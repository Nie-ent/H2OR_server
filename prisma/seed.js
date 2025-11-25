import { Role, Difficulty, CandidateStatusEnum, DocTypeEnum, AddressType, StatusEnum } from "@prisma/client"
import argon2 from "argon2";
import prisma from '../src/config/prisma-client.config.js'

// =====================================================
// ⚠️ 1. HELPER FUNCTIONS FOR MOCK DATA GENERATION (500 Records)
// *****************************************************
const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

// --- REALISTIC NAME LISTS ---
const firstNames = ['James', 'Robert', 'Michael', 'David', 'Richard', 'Thomas', 'Charles', 'Christopher', 'Jessica', 'Emily', 'Sarah', 'Jennifer', 'Michelle', 'Amanda', 'Laura', 'Olivia', 'Emma', 'Liam', 'Noah', 'Oliver', 'Elijah'];
const lastNames = ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis', 'Rodriguez', 'Martinez', 'Hernandez', 'Lopez', 'Gonzalez', 'Wilson', 'Anderson', 'Thomas', 'Taylor'];

const genders = ['Male', 'Female', 'Other'];
const stacks = ['React', 'Node.js', 'Python', 'Go', 'AWS', 'Azure', 'Scrum', 'Agile', 'SQL', 'MongoDB'];
const cities = ['Bangkok', 'Chiang Mai', 'Phuket', 'Khon Kaen', 'Nakhon Ratchasima', 'Chonburi'];
const postalCodes = {
    'Bangkok': '10110',
    'Chiang Mai': '50000',
    'Phuket': '83000',
    'Khon Kaen': '40000',
    'Nakhon Ratchasima': '30000',
    'Chonburi': '20000',
};

const generateCandidateData = (index) => {
    const firstName = firstNames[getRandomInt(0, firstNames.length - 1)];
    const lastName = lastNames[getRandomInt(0, lastNames.length - 1)];
    // สร้างอีเมลที่ดูสมจริง
    const email = `${firstName.toLowerCase()}.${lastName.toLowerCase()}${index + 1}@corpmail.com`;    
    
    const selectedGender = genders[getRandomInt(0, genders.length - 1)];
    const age = getRandomInt(22, 45);
    const expSalary = getRandomInt(30000, 80000);
    const expectedSalary = expSalary + getRandomInt(5000, 20000);
    const selectedStack = Array.from({ length: getRandomInt(1, 3) }, () => stacks[getRandomInt(0, stacks.length - 1)]).join(', ');
    
    let idCard = '1' + String(100000000000 + index + 1).slice(-12);

    return {
        first_name: firstName,
        last_name: lastName,
        email: email,
        phone: `0${getRandomInt(80, 99)}${getRandomInt(10000000, 99999999)}`,
        gender: selectedGender,
        age: age,
        experience_salary: expSalary,
        expected_salary: expectedSalary,
        stack: selectedStack,
        id_card: idCard,
    };
};

/**
 * Creates 500 Candidate records and their corresponding Primary Address records.
 */
async function generateBulkCandidates(count = 500) {
    console.log(`\n--- Starting Bulk Creation of ${count} Candidates with Realistic Names ---`);

    const candidatePromises = [];
    for (let i = 0; i < count; i++) {
        const data = generateCandidateData(i);
        const candidatePromise = prisma.candidate.upsert({
            where: { email: data.email },
            update: {},
            create: data,
        });
        candidatePromises.push(candidatePromise);
    }
    
    // ใช้ Promise.all เพื่อสร้าง Candidates พร้อมกัน
    const candidates = await Promise.all(candidatePromises);
    console.log(`✅ Successfully created/upserted ${candidates.length} candidates.`);

    // --- Create Addresses for Bulk Candidates ---
    const addressPromises = candidates.map((candidate) => {
        const selectedCity = cities[getRandomInt(0, cities.length - 1)];
        const postal = postalCodes[selectedCity];
        
        return prisma.address.upsert({
            where: {
                candidate_id_address_type: {
                    candidate_id: candidate.candidate_id,
                    address_type: AddressType.primary,
                },
            },
            update: {},
            create: {
                candidate_id: candidate.candidate_id,
                address_line1: `${getRandomInt(1, 999)}/${getRandomInt(1, 50)} Mock Street`,
                city: selectedCity,
                postal_code: postal,
                country: 'Thailand',
                address_type: AddressType.primary,
                is_current: true,
            },
        });
    });

    await Promise.all(addressPromises);
    console.log(`✅ Successfully created/upserted ${addressPromises.length} bulk addresses.`);
    
    return candidates;
}


// =====================================================
// 2. MAIN SEED SCRIPT
// *****************************************************
async function main() {
    console.log('🚀 Seed script started');

    // --- Hash the common passwords once ---
    const superAdminPasswordHash = await argon2.hash('super_admin_pw_123');
    const adminPasswordHash = await argon2.hash('admin_pw_456');

    // -----------------------------
    // 1️⃣ ADMIN USERS (1 Super Admin & 9 Admins)
    // -----------------------------

    // 1. Super Admin (ผู้ดูแลระบบสูงสุด)
    const superAdminEmail = 'super.admin@example.com';
    const admin1 = await prisma.adminUser.upsert({
        where: { email: superAdminEmail },
        update: {},
        create: {
            first_name: 'Sara',
            last_name: 'Admin',
            email: superAdminEmail,
            role: Role.super_admin,
            password_hash: superAdminPasswordHash,
        },
    });
    console.log(`✅ Created super admin user: ${admin1.email}`);

    // 2. Mock Data for 9 Regular Admins (ผู้ดูแลระบบทั่วไป)
    const mockAdmins = [
        { first_name: 'John', last_name: 'Doe', email: 'john.doe@example.com' },
        { first_name: 'Jane', last_name: 'Smith', email: 'jane.smith@example.com' },
        { first_name: 'Michael', last_name: 'Scott', email: 'michael.scott@example.com' },
        { first_name: 'Dwight', last_name: 'Schrute', email: 'dwight.schrute@example.com' },
        { first_name: 'Pamela', last_name: 'Beesly', email: 'pamela.beesly@example.com' },
        { first_name: 'Jim', last_name: 'Halpert', email: 'jim.halpert@example.com' },
        { first_name: 'Angela', last_name: 'Martin', email: 'angela.martin@example.com' },
        { first_name: 'Oscar', last_name: 'Martinez', email: 'oscar.martinez@example.com' },
        { first_name: 'Kevin', last_name: 'Malone', email: 'kevin.malone@example.com' },
    ];

    const createdAdmins = [];
    for (const adminData of mockAdmins) {
        const adminUser = await prisma.adminUser.upsert({
            where: { email: adminData.email },
            update: {},
            create: {
                first_name: adminData.first_name,
                last_name: adminData.last_name,
                email: adminData.email,
                role: Role.admin, // ตั้งค่าเป็น 'admin'
                password_hash: adminPasswordHash,
            },
        });
        createdAdmins.push(adminUser);
    }

    console.log(`✅ Created ${createdAdmins.length} regular admin users.`);
    console.log('---');

    // -----------------------------
    // 2️⃣ CANDIDATES (BULK DATA ONLY)
    // -----------------------------
    
    // 🔥 CALL BULK GENERATOR (500 CANDIDATES) 🔥
    const allCandidates = await generateBulkCandidates(500); 

    // 🔴 ผู้สมัครตัวอย่าง (Alice และ Bob) ถูกลบออกทั้งหมด
    
    // 🟢 กำหนดตัวอย่างผู้สมัครสำหรับส่วนที่ 7 (ใช้คนแรกจากกลุ่ม Bulk)
    const candidateExample = allCandidates[0];

    console.log(`✅ Created/Upserted total candidates: ${allCandidates.length}`);
    console.log('---');

    // -----------------------------
    // 3️⃣ ADDRESSES 
    // 🔴 ลบส่วน Address สำหรับผู้สมัครตัวอย่างออกแล้ว
    // (Bulk Addresses ถูกสร้างไปแล้วใน generateBulkCandidates)
    // -----------------------------
    // 
    // const addresses = [ ... ] ถูกลบออกแล้ว
    // 
    // console.log('✅ Example addresses created or upserted'); ถูกลบออกแล้ว

    // =====================================================
    // 4️⃣ QUESTIONS & CHOICES (100 Full-stack MCQs)
    // *****************************************************

    // Helper function to structure question data cleanly
    const createQuestion = (text, difficulty, choices) => ({
        text,
        difficulty,
        choices,
    });

    const questionsData = [
        // ... (questionsData array เดิม)
        createQuestion(
            'What is the purpose of the **<!DOCTYPE html>** declaration?',
            Difficulty.easy,
            [
                { text: 'Defines the document type and version of HTML being used.', correct: true },
                { text: 'Declares a comment line', correct: false },
                { text: 'Imports an external CSS file.', correct: false },
                { text: 'Specifies the character set.', correct: false },
            ]
        ),
        createQuestion(
            'Which CSS property is used to create space around the element, *outside* of the border?',
            Difficulty.easy,
            [
                { text: 'padding', correct: false },
                { text: 'margin', correct: true },
                { text: 'border-spacing', correct: false },
                { text: 'outline', correct: false },
            ]
        ),
        createQuestion(
            'How do you select all `<p>` elements that are **direct children** of a `<div>`?',
            Difficulty.medium,
            [
                { text: 'div p', correct: false },
                { text: 'div > p', correct: true },
                { text: 'div + p', correct: false },
                { text: 'div ~ p', correct: false },
            ]
        ),
        createQuestion(
            'What is the main difference between **`position: relative;`** and **`position: absolute;`**?',
            Difficulty.medium,
            [
                { text: '`relative` uses offset from the original position, `absolute` uses offset from the nearest positioned ancestor.', correct: true },
                { text: '`absolute` is scrollable, `relative` is not.', correct: false },
                { text: 'There is no difference in layout flow.', correct: false },
                { text: '`relative` takes elements out of the normal flow.', correct: false },
            ]
        ),
        createQuestion(
            'What is the purpose of the **`aria-label`** attribute in HTML?',
            Difficulty.medium,
            [
                { text: 'It provides a short hint for input fields.', correct: false },
                { text: 'It defines a string value that labels an interactive element for accessibility.', correct: true },
                { text: 'It specifies the element\'s unique ID.', correct: false },
                { text: 'It links to external documentation.', correct: false },
            ]
        ),
        createQuestion(
            'Which HTML tag is semantic for content *separate* from the main content (like a sidebar)?',
            Difficulty.easy,
            [
                { text: '<div>', correct: false },
                { text: '<aside>', correct: true },
                { text: '<section>', correct: false },
                { text: '<footer>', correct: false },
            ]
        ),
        createQuestion(
            'In CSS Flexbox, what does the **`align-items`** property control?',
            Difficulty.easy,
            [
                { text: 'Alignment along the main axis.', correct: false },
                { text: 'Alignment along the cross axis.', correct: true },
                { text: 'The order of items.', correct: false },
                { text: 'The size of the container.', correct: false },
            ]
        ),
        createQuestion(
            'Which CSS selector has the highest specificity (excluding inline styles)?',
            Difficulty.hard,
            [
                { text: 'Element Selector (`p`)', correct: false },
                { text: 'Class Selector (`.class`)', correct: false },
                { text: 'ID Selector (`#id`)', correct: true },
                { text: 'Universal Selector (`*`)', correct: false },
            ]
        ),
        createQuestion(
            'What does the CSS property **`z-index`** control?',
            Difficulty.medium,
            [
                { text: 'The font weight.', correct: false },
                { text: 'The stacking order of positioned elements.', correct: true },
                { text: 'The opacity level.', correct: false },
                { text: 'The space between letters.', correct: false },
            ]
        ),
        createQuestion(
            'To prevent elements from stacking on top of each other in a standard block flow, what CSS property is commonly used to clear floats?',
            Difficulty.medium,
            [
                { text: '`float: none;`', correct: false },
                { text: '`overflow: auto;` (or `clear: both;`)', correct: true },
                { text: '`position: fixed;`', correct: false },
                { text: '`display: inline;`', correct: false },
            ]
        ),
        createQuestion(
            'Which CSS unit is relative to the font size of the root element (`<html>`)?',
            Difficulty.medium,
            [
                { text: 'em', correct: false },
                { text: 'rem', correct: true },
                { text: 'vw', correct: false },
                { text: 'px', correct: false },
            ]
        ),
        createQuestion(
            'The **Box Model** in CSS consists of which components (from inner to outer)?',
            Difficulty.easy,
            [
                { text: 'Margin, Border, Padding, Content', correct: false },
                { text: 'Content, Padding, Border, Margin.', correct: true },
                { text: 'Padding, Content, Margin, Border.', correct: false },
                { text: 'Content, Margin, Padding, Border.', correct: false },
            ]
        ),
        createQuestion(
            'What is the purpose of the **`srcset`** attribute in the `<img>` tag?',
            Difficulty.medium,
            [
                { text: 'To provide fallback text for the image.', correct: false },
                { text: 'To allow the browser to choose the most appropriate image based on screen resolution and device pixel ratio.', correct: true },
                { text: 'To link to a source file for video.', correct: false },
                { text: 'To specify the size of the image.', correct: false },
            ]
        ),
        createQuestion(
            'Which pseudo-class is used to select an element that has **no children**?',
            Difficulty.hard,
            [
                { text: ':blank', correct: false },
                { text: ':empty', correct: true },
                { text: ':only-child', correct: false },
                { text: ':root', correct: false },
            ]
        ),
        createQuestion(
            'In CSS Grid, how do you define the space between grid cells?',
            Difficulty.medium,
            [
                { text: 'grid-spacing', correct: false },
                { text: 'grid-gap', correct: true },
                { text: 'grid-padding', correct: false },
                { text: 'cell-space', correct: false },
            ]
        ),
        createQuestion(
            'Which HTML tag is used for defining **descriptive text** in a table footer?',
            Difficulty.easy,
            [
                { text: '<thead>', correct: false },
                { text: '<tfoot>', correct: true },
                { text: '<tbody>', correct: false },
                { text: '<th>', correct: false },
            ]
        ),
        createQuestion(
            'What is the primary function of **`will-change: property`** in CSS?',
            Difficulty.hard,
            [
                { text: 'It applies the change immediately.', correct: false },
                { text: 'It informs the browser of which properties are expected to change, allowing it to prepare optimizations.', correct: true },
                { text: 'It stops rendering of the element entirely.', correct: false },
                { text: 'It forces a redraw of the element every frame.', correct: false },
            ]
        ),
        createQuestion(
            'What is the preferred way to hide an element visually while keeping it accessible to screen readers?',
            Difficulty.medium,
            [
                { text: '`display: none;`', correct: false },
                { text: 'Using a clipping technique (e.g., `clip: rect(...)` or `sr-only` utility class).', correct: true },
                { text: '`visibility: hidden;`', correct: false },
                { text: 'Setting `opacity: 0;`', correct: false },
            ]
        ),
        createQuestion(
            'Which property is shorthand for `font-weight`, `font-style`, `font-size`, `line-height`, and `font-family`?',
            Difficulty.medium,
            [
                { text: '`typography`', correct: false },
                { text: '`font`', correct: true },
                { text: '`text-style`', correct: false },
                { text: '`font-compound`', correct: false },
            ]
        ),
        createQuestion(
            'What does the **`defer`** attribute in a `<script>` tag do?',
            Difficulty.medium,
            [
                { text: 'The script is executed immediately.', correct: false },
                { text: 'The script is downloaded asynchronously and executed after the document is fully parsed.', correct: true },
                { text: 'The script blocks HTML parsing.', correct: false },
                { text: 'The script is ignored by the browser.', correct: false },
            ]
        ),
        
        // -----------------------------------------------------------------
        // ⚛️ JavaScript & ES6 (30 Questions)
        // -----------------------------------------------------------------
        createQuestion(
            'What is the correct way to declare a variable that is **block-scoped** and can be reassigned?',
            Difficulty.easy,
            [
                { text: 'var', correct: false },
                { text: 'let', correct: true },
                { text: 'const', correct: false },
                { text: 'global', correct: false },
            ]
        ),
        createQuestion(
            'Which method is used to create a **new array** by calling a function for every array element?',
            Difficulty.easy,
            [
                { text: 'forEach()', correct: false },
                { text: 'map()', correct: true },
                { text: 'filter()', correct: false },
                { text: 'reduce()', correct: false },
            ]
        ),
        createQuestion(
            'What does the operator **`===`** check in JavaScript?',
            Difficulty.easy,
            [
                { text: 'Only value equality', correct: false },
                { text: 'Value and type equality.', correct: true },
                { text: 'Only reference equality', correct: false },
                { text: 'Value or type equality.', correct: false },
            ]
        ),
        createQuestion(
            'What is **Closure** in JavaScript?',
            Difficulty.medium,
            [
                { text: 'A function that runs immediately.', correct: false },
                { text: 'A function having access to the scope where it was created, even after that scope has closed.', correct: true },
                { text: 'A method for asynchronous operations.', correct: false },
                { text: 'The end of a loop.', correct: false },
            ]
        ),
        createQuestion(
            'Which ES6 feature is used to merge properties from two or more objects into a new object *immutably*?',
            Difficulty.medium,
            [
                { text: 'Object.assign()', correct: false },
                { text: 'Spread syntax (`...`)', correct: true },
                { text: 'concat()', correct: false },
                { text: 'Object.freeze()', correct: false },
            ]
        ),
        createQuestion(
            'What is the primary use of the **`Promise`** object?',
            Difficulty.easy,
            [
                { text: 'Handling synchronous code.', correct: false },
                { text: 'Handling asynchronous operations and their resulting value or error.', correct: true },
                { text: 'Creating static classes.', correct: false },
                { text: 'Manipulating the DOM.', correct: false },
            ]
        ),
        createQuestion(
            'What will **`typeof null`** return?',
            Difficulty.hard,
            [
                { text: '"null"', correct: false },
                { text: '"object"', correct: true },
                { text: '"undefined"', correct: false },
                { text: '"string"', correct: false },
            ]
        ),
        createQuestion(
            'How do you prevent the default action of an event (e.g., form submission) in JavaScript?',
            Difficulty.easy,
            [
                { text: 'event.stop()', correct: false },
                { text: 'event.preventDefault()', correct: true },
                { text: 'event.cancel()', correct: false },
                { text: 'event.stopImmediatePropagation()', correct: false },
            ]
        ),
        createQuestion(
            'What is **Destructuring Assignment** in ES6?',
            Difficulty.medium,
            [
                { text: 'Converting an object into a JSON string.', correct: false },
                { text: 'A syntax that makes it possible to unpack values from arrays or properties from objects into distinct variables.', correct: true },
                { text: 'Removing properties from an object.', correct: false },
                { text: 'Combining multiple arrays into one.', correct: false },
            ]
        ),
        createQuestion(
            'Which keyword is used to handle synchronous errors in asynchronous functions (using `async/await`)?',
            Difficulty.easy,
            [
                { text: 'try...catch', correct: true },
                { text: 'then().catch()', correct: false },
                { text: 'finally', correct: false },
                { text: 'throw', correct: false },
            ]
        ),
        createQuestion(
            'What is **Hoisting** in JavaScript?',
            Difficulty.medium,
            [
                { text: 'Moving a variable\'s assignment to the top.', correct: false },
                { text: 'Moving declarations (function and variable) to the top of their scope before code execution.', correct: true },
                { text: 'Running asynchronous code.', correct: false },
                { text: 'Optimizing array loops.', correct: false },
            ]
        ),
        createQuestion(
            'What does **`Array.prototype.flat()`** do?',
            Difficulty.medium,
            [
                { text: 'Converts a multidimensional array into a single-dimensional array by recursively flattening up to a specified depth.', correct: true },
                { text: 'Checks if an array is empty.', correct: false },
                { text: 'Creates a deep copy of an array.', correct: false },
                { text: 'Sorts an array alphabetically.', correct: false },
            ]
        ),
        createQuestion(
            'What is the primary purpose of the **`Symbol`** primitive type?',
            Difficulty.hard,
            [
                { text: 'Representing numeric values.', correct: false },
                { text: 'Creating unique identifiers for object properties.', correct: true },
                { text: 'Storing large integer values.', correct: false },
                { text: 'Representing text strings.', correct: false },
            ]
        ),
        createQuestion(
            'What is the primary difference between **`let`** and **`const`**?',
            Difficulty.easy,
            [
                { text: '`const` is function-scoped, `let` is block-scoped.', correct: false },
                { text: '`const` variables cannot be reassigned after declaration, while `let` variables can.', correct: true },
                { text: '`let` is hoisted, `const` is not.', correct: false },
                { text: '`const` is only for arrays.', correct: false },
            ]
        ),
        createQuestion(
            'What is the correct syntax for an **IIFE** (Immediately Invoked Function Expression)?',
            Difficulty.medium,
            [
                { text: 'function() {}()', correct: false },
                { text: '(function() {})()', correct: true },
                { text: 'new Function()()', correct: false },
                { text: 'run(function() {})', correct: false },
            ]
        ),
        createQuestion(
            'Which built-in method converts a JavaScript object or value to a JSON string?',
            Difficulty.easy,
            [
                { text: 'JSON.parse()', correct: false },
                { text: 'JSON.stringify()', correct: true },
                { text: 'toString()', correct: false },
                { text: 'Object.serialize()', correct: false },
            ]
        ),
        createQuestion(
            'How do you inherit methods/properties from a parent class in ES6?',
            Difficulty.easy,
            [
                { text: 'this.parent()', correct: false },
                { text: 'super()', correct: true },
                { text: 'extends.parent()', correct: false },
                { text: 'parent.call(this)', correct: false },
            ]
        ),
        createQuestion(
            'Which array method checks if **at least one** element in the array passes the test implemented by the provided function?',
            Difficulty.medium,
            [
                { text: 'every()', correct: false },
                { text: 'includes()', correct: false },
                { text: 'some()', correct: true },
                { text: 'filter()', correct: false },
            ]
        ),
        createQuestion(
            'What is **Type Coercion** in JavaScript?',
            Difficulty.medium,
            [
                { text: 'Manually converting a type using functions like `String()`.', correct: false },
                { text: 'The automatic conversion of values from one data type to another that occurs implicitly during execution.', correct: true },
                { text: 'Checking the type of a variable.', correct: false },
                { text: 'Forcing a variable to remain its original type.', correct: false },
            ]
        ),
        createQuestion(
            'What is the primary purpose of the `Set` object?',
            Difficulty.medium,
            [
                { text: 'Storing key-value pairs.', correct: false },
                { text: 'Storing a collection of unique values.', correct: true },
                { text: 'Storing ordered lists of values.', correct: false },
                { text: 'Storing weak references to objects.', correct: false },
            ]
        ),
        createQuestion(
            'Which operator is used for **Nullish Coalescing** in ES2020?',
            Difficulty.medium,
            [
                { text: '||', correct: false },
                { text: '??', correct: true },
                { text: '&&', correct: false },
                { text: '!?', correct: false },
            ]
        ),
        createQuestion(
            'What does the optional chaining operator **`?.`** do?',
            Difficulty.easy,
            [
                { text: 'Assigns a default value if the property is missing.', correct: false },
                { text: 'Checks if a value is null or undefined before accessing a property, preventing runtime errors.', correct: true },
                { text: 'Creates a private property.', correct: false },
                { text: 'Forces a type conversion.', correct: false },
            ]
        ),
        createQuestion(
            'What is **Event Bubbling**?',
            Difficulty.medium,
            [
                { text: 'The event propagates from the parent element down to the target element.', correct: false },
                { text: 'The event propagates from the target element up through its ancestors to the window.', correct: true },
                { text: 'A process for error handling.', correct: false },
                { text: 'A way to queue asynchronous tasks.', correct: false },
            ]
        ),
        createQuestion(
            'What is **Memoization** in the context of JavaScript?',
            Difficulty.hard,
            [
                { text: 'Storing data locally on the user\'s browser.', correct: false },
                { text: 'An optimization technique used to cache the results of expensive function calls based on inputs.', correct: true },
                { text: 'Creating a reference to an object.', correct: false },
                { text: 'Compiling JavaScript code ahead of time.', correct: false },
            ]
        ),
        createQuestion(
            'In strict mode, what does **`this`** refer to inside a regular function call (not a method or class)?',
            Difficulty.medium,
            [
                { text: 'The global object (`window` or `global`).', correct: false },
                { text: '`undefined`', correct: true },
                { text: 'The function itself.', correct: false },
                { text: 'The object containing the function.', correct: false },
            ]
        ),
        createQuestion(
            'Which method should be used to make an object immutable in ES5/ES6?',
            Difficulty.medium,
            [
                { text: 'Object.freeze()', correct: true },
                { text: 'Object.seal()', correct: false },
                { text: 'Object.preventExtensions()', correct: false },
                { text: 'Object.lock()', correct: false },
            ]
        ),
        createQuestion(
            'What is the result of `1 + "2" + 3` in JavaScript?',
            Difficulty.medium,
            [
                { text: '6', correct: false },
                { text: '"123"', correct: true },
                { text: '"126"', correct: false },
                { text: '3', correct: false },
            ]
        ),
        createQuestion(
            'What does the **`yield`** keyword do?',
            Difficulty.hard,
            [
                { text: 'It pauses and resumes a Generator Function.', correct: true },
                { text: 'It throws an error.', correct: false },
                { text: 'It defines a private variable.', correct: false },
                { text: 'It returns a Promise.', correct: false },
            ]
        ),
        createQuestion(
            'What is the difference between synchronous and asynchronous code?',
            Difficulty.easy,
            [
                { text: 'Synchronous code runs one operation at a time, blocking execution; asynchronous code allows other operations to run while waiting.', correct: true },
                { text: 'Asynchronous code is always faster.', correct: false },
                { text: 'Synchronous code only works in Node.js.', correct: false },
                { text: 'They both run on the main thread.', correct: false },
            ]
        ),
        createQuestion(
            'Which built-in object is used to perform mathematical tasks?',
            Difficulty.easy,
            [
                { text: 'Array', correct: false },
                { text: 'Date', correct: false },
                { text: 'Math', correct: true },
                { text: 'Number', correct: false },
            ]
        ),

        // -----------------------------------------------------------------
        // ⚛️ React & Frontend (30 Questions)
        // -----------------------------------------------------------------
        createQuestion(
            'What is the main difference between **State** and **Props** in React?',
            Difficulty.easy,
            [
                { text: 'Props are mutable, State is not', correct: false },
                { text: 'State is internal and managed by the component, Props are external and passed from a parent.', correct: true },
                { text: 'Both are immutable.', correct: false },
                { text: 'Props can only be strings.', correct: false },
            ]
        ),
        createQuestion(
            'Which Hook is used for performing **side effects** (data fetching, subscriptions, manual DOM manipulation) in functional components?',
            Difficulty.easy,
            [
                { text: 'useState', correct: false },
                { text: 'useEffect', correct: true },
                { text: 'useContext', correct: false },
                { text: 'useReducer', correct: false },
            ]
        ),
        createQuestion(
            'Why is it important to use a **`key`** prop when rendering a list of elements in React?',
            Difficulty.medium,
            [
                { text: 'To improve visual styling.', correct: false },
                { text: 'To help React identify which items have changed, are added, or are removed, improving performance and stability.', correct: true },
                { text: 'It defines the order of rendering.', correct: false },
                { text: 'It must be the element\'s index.', correct: false },
            ]
        ),
        createQuestion(
            'What is the purpose of the **Virtual DOM**?',
            Difficulty.medium,
            [
                { text: 'To render HTML directly to the browser.', correct: false },
                { text: 'A programming concept where a virtual representation of the UI is kept in memory and synced with the real DOM efficiently.', correct: true },
                { text: 'To handle server-side rendering.', correct: false },
                { text: 'To manage component state.', correct: false },
            ]
        ),
        createQuestion(
            'What is **JSX**?',
            Difficulty.easy,
            [
                { text: 'A template language for HTML.', correct: false },
                { text: 'A syntax extension for JavaScript that allows writing HTML-like code within JavaScript.', correct: true },
                { text: 'A JavaScript library for routing.', correct: false },
                { text: 'A CSS preprocessor.', correct: false },
            ]
        ),
        createQuestion(
            'How do you ensure a component only re-renders when a specific prop or state value changes (optimization)?',
            Difficulty.medium,
            [
                { text: 'By using `useCallback`.', correct: false },
                { text: 'By wrapping the component in `React.memo` (for functional components).', correct: true },
                { text: 'By calling `forceUpdate()`.', correct: false },
                { text: 'By placing it in a separate file.', correct: false },
            ]
        ),
        createQuestion(
            'Which Hook is used for complex state logic that involves multiple sub-values or when the next state depends on the previous one?',
            Difficulty.medium,
            [
                { text: 'useState', correct: false },
                { text: 'useReducer', correct: true },
                { text: 'useMemo', correct: false },
                { text: 'useRef', correct: false },
            ]
        ),
        createQuestion(
            'What is **"lifting state up"** in React?',
            Difficulty.easy,
            [
                { text: 'Moving state from a child component to its nearest common ancestor component.', correct: true },
                { text: 'Using global state management (Redux).', correct: false },
                { text: 'Using the `useReducer` hook.', correct: false },
                { text: 'Implementing CSS animations.', correct: false },
            ]
        ),
        createQuestion(
            'What is the recommended way to handle forms in React where component state controls the form input values?',
            Difficulty.medium,
            [
                { text: 'Uncontrolled Components', correct: false },
                { text: 'Controlled Components.', correct: true },
                { text: 'Pure Forms', correct: false },
                { text: 'Legacy Forms', correct: false },
            ]
        ),
        createQuestion(
            'When using the dependency array in `useEffect([dependencyA, dependencyB])`, when does the effect run?',
            Difficulty.easy,
            [
                { text: 'Only on mount.', correct: false },
                { text: 'On mount and whenever `dependencyA` or `dependencyB` changes.', correct: true },
                { text: 'Every time the component re-renders.', correct: false },
                { text: 'Never.', correct: false },
            ]
        ),
        createQuestion(
            'What is a **Higher-Order Component (HOC)**?',
            Difficulty.hard,
            [
                { text: 'A component that uses another component.', correct: false },
                { text: 'A function that takes a component and returns a new component with enhanced functionality.', correct: true },
                { text: 'A component that renders JSX directly.', correct: false },
                { text: 'A deprecated feature in React.', correct: false },
            ]
        ),
        createQuestion(
            'What is the primary benefit of using **React Context**?',
            Difficulty.medium,
            [
                { text: 'To manage component lifecycle.', correct: false },
                { text: 'To avoid passing props down through many nested components (Prop Drilling) for global data.', correct: true },
                { text: 'To handle asynchronous operations.', correct: false },
                { text: 'To optimize list rendering.', correct: false },
            ]
        ),
        createQuestion(
            'What does the **`useRef`** Hook return and what is its primary purpose?',
            Difficulty.medium,
            [
                { text: 'Returns a function; for state management.', correct: false },
                { text: 'Returns an object (`{ current: initialValue }`); for accessing the DOM element or persistent mutable values.', correct: true },
                { text: 'Returns a Promise; for data fetching.', correct: false },
                { text: 'Returns the previous state.', correct: false },
            ]
        ),
        createQuestion(
            'Which statement best describes a **Pure Component** (in the class component sense)?',
            Difficulty.medium,
            [
                { text: 'A component that renders plain HTML only.', correct: false },
                { text: 'A Component that implements `shouldComponentUpdate` with a shallow prop and state comparison.', correct: true },
                { text: 'Any functional component using Hooks.', correct: false },
                { text: 'A component that has no state.', correct: false },
            ]
        ),
        createQuestion(
            'What is **Server-Side Rendering (SSR)** in the context of React (e.g., Next.js)?',
            Difficulty.medium,
            [
                { text: 'Rendering components only on the browser.', correct: false },
                { text: 'Rendering the initial HTML and components on the server before sending to the client, improving initial load time and SEO.', correct: true },
                { text: 'Using Web Workers for rendering.', correct: false },
                { text: 'The browser is responsible for fetching all data.', correct: false },
            ]
        ),
        createQuestion(
            'In React Router, which component is used to define a link that navigates without a full page reload?',
            Difficulty.easy,
            [
                { text: '<A>', correct: false },
                { text: '<Link>', correct: true },
                { text: '<Route>', correct: false },
                { text: '<Redirect>', correct: false },
            ]
        ),
        createQuestion(
            'What are **React Fragments** (`<>...</>`) primarily used for?',
            Difficulty.easy,
            [
                { text: 'To manage component state.', correct: false },
                { text: 'To group children without adding extra nodes to the DOM.', correct: true },
                { text: 'To define conditional rendering.', correct: false },
                { text: 'To define a component boundary.', correct: false },
            ]
        ),
        createQuestion(
            'What happens when you call the **`setState`** function (or `useState` setter) in React?',
            Difficulty.medium,
            [
                { text: 'React immediately updates the DOM.', correct: false },
                { text: 'React schedules a re-render of the component and its children.', correct: true },
                { text: 'It blocks the main thread until the DOM is updated.', correct: false },
                { text: 'It only updates the state object.', correct: false },
            ]
        ),
        createQuestion(
            'What is the primary difference between `useMemo` and `useCallback`?',
            Difficulty.hard,
            [
                { text: '`useMemo` memoizes a value (result of a function), `useCallback` memoizes a function definition.', correct: true },
                { text: '`useMemo` is for state, `useCallback` is for props.', correct: false },
                { text: 'They are identical and interchangeable.', correct: false },
                { text: '`useCallback` is deprecated.', correct: false },
            ]
        ),
        createQuestion(
            'What is a common pitfall when using `useEffect` with an empty dependency array (`[]`)?',
            Difficulty.medium,
            [
                { text: 'The effect runs indefinitely.', correct: false },
                { text: 'The effect uses stale props or state from the initial render because it never re-runs.', correct: true },
                { text: 'The component crashes on every render.', correct: false },
                { text: 'It causes memory leaks automatically.', correct: false },
            ]
        ),
        createQuestion(
            'What does the **`dangerouslySetInnerHTML`** prop do?',
            Difficulty.medium,
            [
                { text: 'It protects against XSS attacks.', correct: false },
                { text: 'It allows you to set HTML content directly from a string (bypassing React\'s protection).', correct: true },
                { text: 'It sets the inner text safely.', correct: false },
                { text: 'It optimizes rendering of large HTML structures.', correct: false },
            ]
        ),
        createQuestion(
            'What is a **Custom Hook**?',
            Difficulty.easy,
            [
                { text: 'A function that starts with `use` and calls other Hooks, allowing stateful logic reuse.', correct: true },
                { text: 'A built-in React feature like `useState`.', correct: false },
                { text: 'A component that handles form submission.', correct: false },
                { text: 'A deprecated lifecycle method.', correct: false },
            ]
        ),
        createQuestion(
            'Which React testing utility is generally preferred for testing how components behave from the user\'s perspective?',
            Difficulty.medium,
            [
                { text: 'Enzyme', correct: false },
                { text: 'React Testing Library (RTL)', correct: true },
                { text: 'Jest Snapshots', correct: false },
                { text: 'Cypress', correct: false },
            ]
        ),
        createQuestion(
            'What is the default mechanism for passing data to a child component in React?',
            Difficulty.easy,
            [
                { text: 'State', correct: false },
                { text: 'Props', correct: true },
                { text: 'Context', correct: false },
                { text: 'Refs', correct: false },
            ]
        ),
        createQuestion(
            'What is **Prop Drilling**?',
            Difficulty.medium,
            [
                { text: 'Passing data down through many nested child components, even if intermediate components don\'t need the data.', correct: true },
                { text: 'Optimizing prop updates.', correct: false },
                { text: 'A security vulnerability.', correct: false },
                { text: 'Using the `useReducer` hook.', correct: false },
            ]
        ),
        createQuestion(
            'Which pattern is commonly used for sharing functionality between components in modern React (Hooks era)?',
            Difficulty.easy,
            [
                { text: 'HOCs', correct: false },
                { text: 'Render Props', correct: false },
                { text: 'Custom Hooks', correct: true },
                { text: 'Mixins', correct: false },
            ]
        ),
        createQuestion(
            'What does the **`key`** prop in a list component need to be for best performance?',
            Difficulty.medium,
            [
                { text: 'The array index.', correct: false },
                { text: 'A unique and stable ID related to the list item data.', correct: true },
                { text: 'The component name.', correct: false },
                { text: 'A random number generated on render.', correct: false },
            ]
        ),
        createQuestion(
            'In `useState`, what is the purpose of passing a function to the setter (e.g., `setCount(prev => prev + 1)`)?',
            Difficulty.medium,
            [
                { text: 'To optimize the re-render speed.', correct: false },
                { text: 'To ensure the new state value is based on the most recent previous state.', correct: true },
                { text: 'It allows asynchronous state updates.', correct: false },
                { text: 'It creates a custom hook.', correct: false },
            ]
        ),
        createQuestion(
            'What is the purpose of the `StrictMode` component in React?',
            Difficulty.medium,
            [
                { text: 'To force synchronous rendering.', correct: false },
                { text: 'To highlight potential problems in an application, like unsafe lifecycle methods or legacy API usage.', correct: true },
                { text: 'To manage component data flow.', correct: false },
                { text: 'To automatically optimize the component bundle size.', correct: false },
            ]
        ),
        createQuestion(
            'How do you access the value of a controlled input field in React?',
            Difficulty.easy,
            [
                { text: 'By directly querying the DOM.', correct: false },
                { text: 'Via the component\'s state (managed by `onChange` handler).', correct: true },
                { text: 'Using the `useEffect` hook.', correct: false },
                { text: 'Through the `context` object.', correct: false },
            ]
        ),
        
        // -----------------------------------------------------------------
        // ⚙️ Node.js & Backend (30 Questions)
        // -----------------------------------------------------------------
        createQuestion(
            'What is the primary benefit of Node.js\'s **Non-blocking I/O** model?',
            Difficulty.easy,
            [
                { text: 'It prevents code from being compiled.', correct: false },
                { text: 'It allows Node.js to handle many concurrent connections without needing multiple threads, improving scalability.', correct: true },
                { text: 'It encrypts data transmission.', correct: false },
                { text: 'It forces all operations to be synchronous.', correct: false },
            ]
        ),
        createQuestion(
            'Which module is built into Node.js and used for file system operations (reading, writing files)?',
            Difficulty.easy,
            [
                { text: 'http', correct: false },
                { text: 'fs', correct: true },
                { text: 'path', correct: false },
                { text: 'crypto', correct: false },
            ]
        ),
        createQuestion(
            'What is **Middleware** in the context of Express.js?',
            Difficulty.medium,
            [
                { text: 'A database connection.', correct: false },
                { text: 'Functions that execute sequentially in the request-response cycle, with access to `req`, `res`, and `next()`.', correct: true },
                { text: 'A template engine.', correct: false },
                { text: 'A data validation schema.', correct: false },
            ]
        ),
        createQuestion(
            'What is the purpose of the **`require()`** function in CommonJS (Node.js default module system)?',
            Difficulty.easy,
            [
                { text: 'To start a server.', correct: false },
                { text: 'To import modules (e.g., libraries or local files) into the current file.', correct: true },
                { text: 'To define a new class.', correct: false },
                { text: 'To define environment variables.', correct: false },
            ]
        ),
        createQuestion(
            'Which HTTP method should be used to **create a new resource** on the server?',
            Difficulty.easy,
            [
                { text: 'GET', correct: false },
                { text: 'POST', correct: true },
                { text: 'PUT', correct: false },
                { text: 'DELETE', correct: false },
            ]
        ),
        createQuestion(
            'What is **JWT (JSON Web Token)** primarily used for in a backend API?',
            Difficulty.medium,
            [
                { text: 'Sending emails.', correct: false },
                { text: 'Securely transmitting information for authentication and authorization.', correct: true },
                { text: 'Encrypting the entire database.', correct: false },
                { text: 'Caching database queries.', correct: false },
            ]
        ),
        createQuestion(
            'What is **API Rate Limiting**?',
            Difficulty.medium,
            [
                { text: 'Reducing the response size.', correct: false },
                { text: 'Controlling the amount of requests a user can make to an API in a given time period to prevent abuse.', correct: true },
                { text: 'Limiting the speed of the internet connection.', correct: false },
                { text: 'Limiting the number of fields returned in a response.', correct: false },
            ]
        ),
        createQuestion(
            'What is the security vulnerability prevented by using **CSRF Tokens**?',
            Difficulty.medium,
            [
                { text: 'SQL Injection', correct: false },
                { text: 'Cross-Site Request Forgery.', correct: true },
                { text: 'Cross-Site Scripting (XSS)', correct: false },
                { text: 'Denial of Service (DoS).', correct: false },
            ]
        ),
        createQuestion(
            'What is the primary role of the **`package-lock.json`** file?',
            Difficulty.medium,
            [
                { text: 'Listing all dependencies only.', correct: false },
                { text: 'Locking the exact version tree of dependencies installed, ensuring consistent builds across different environments.', correct: true },
                { text: 'Defining the project name.', correct: false },
                { text: 'Storing configuration settings.', correct: false },
            ]
        ),
        createQuestion(
            'What is the purpose of **Environment Variables** in a Node.js application?',
            Difficulty.easy,
            [
                { text: 'Storing public files.', correct: false },
                { text: 'Storing configuration settings (like database URLs, API keys) that vary by environment (dev, staging, production).', correct: true },
                { text: 'Storing reusable code modules.', correct: false },
                { text: 'Defining global utility functions.', correct: false },
            ]
        ),
        createQuestion(
            'What does the **`res.json()`** method do in Express.js?',
            Difficulty.easy,
            [
                { text: 'Sends a JSON response to the client.', correct: true },
                { text: 'Reads JSON data from the request body.', correct: false },
                { text: 'Parses a JSON string.', correct: false },
                { text: 'Redirects the user to a new page.', correct: false },
            ]
        ),
        createQuestion(
            'What is **CORS** (Cross-Origin Resource Sharing)?',
            Difficulty.medium,
            [
                { text: 'A data validation standard.', correct: false },
                { text: 'A security mechanism that allows a web page to make requests to a domain other than the one that served the web page, if explicitly allowed by the server.', correct: true },
                { text: 'A method for database migration.', correct: false },
                { text: 'A type of API load balancer.', correct: false },
            ]
        ),
        createQuestion(
            'What is the difference between **`PUT`** and **`PATCH`** HTTP methods?',
            Difficulty.medium,
            [
                { text: '`PUT` replaces the entire resource, `PATCH` applies partial modifications to a resource.', correct: true },
                { text: '`PUT` is only for creating, `PATCH` is for updating.', correct: false },
                { text: '`PUT` is synchronous, `PATCH` is asynchronous.', correct: false },
                { text: 'They are identical.', correct: false },
            ]
        ),
        createQuestion(
            'Which Node.js module handles streaming data (e.g., large file uploads)?',
            Difficulty.medium,
            [
                { text: 'util', correct: false },
                { text: 'stream', correct: true },
                { text: 'buffer', correct: false },
                { text: 'http', correct: false },
            ]
        ),
        createQuestion(
            'What is **Idempotence** in API design (related to `PUT`, `DELETE`)?',
            Difficulty.hard,
            [
                { text: 'The API always returns the same result code.', correct: false },
                { text: 'Making the same request multiple times will have the same effect as making it once.', correct: true },
                { text: 'The request is always synchronous.', correct: false },
                { text: 'The request is atomic (all or nothing).', correct: false },
            ]
        ),
        createQuestion(
            'What does the **`cluster`** module in Node.js enable?',
            Difficulty.hard,
            [
                { text: 'Grouping related files.', correct: false },
                { text: 'Enabling multiple worker processes to share the same server port, taking advantage of multi-core systems.', correct: true },
                { text: 'Connecting to a database cluster.', correct: false },
                { text: 'Auto-restarting the server on crash.', correct: false },
            ]
        ),
        createQuestion(
            'What is an **ORM (Object-Relational Mapper)**?',
            Difficulty.medium,
            [
                { text: 'A type of database.', correct: false },
                { text: 'A tool that lets you query and manipulate data from a relational database using an object-oriented paradigm.', correct: true },
                { text: 'A server load balancer.', correct: false },
                { text: 'A library for validating JSON schemas.', correct: false },
            ]
        ),
        createQuestion(
            'What is **Semantic Versioning (SemVer)**?',
            Difficulty.medium,
            [
                { text: 'A way to structure file paths.', correct: false },
                { text: 'A standard way to number software versions (MAJOR.MINOR.PATCH) based on the type of changes made.', correct: true },
                { text: 'A protocol for data transfer.', correct: false },
                { text: 'A method for naming variables logically.', correct: false },
            ]
        ),
        createQuestion(
            'What is the main security risk associated with concatenating user input directly into a raw SQL query string?',
            Difficulty.medium,
            [
                { text: 'Cross-Site Scripting (XSS)', correct: false },
                { text: 'SQL Injection', correct: true },
                { text: 'Buffer Overflow', correct: false },
                { text: 'Brute Force Attacks', correct: false },
            ]
        ),
        createQuestion(
            'How does **asynchronous** Node.js code typically manage the order of execution?',
            Difficulty.medium,
            [
                { text: 'By blocking the main thread until the operation is complete.', correct: false },
                { text: 'Using the Event Loop and Callback/Promise/Async mechanisms.', correct: true },
                { text: 'By creating a new thread for every request.', correct: false },
                { text: 'It uses a different CPU core for every operation.', correct: false },
            ]
        ),
        createQuestion(
            'Which HTTP status code indicates a successful creation of a new resource?',
            Difficulty.easy,
            [
                { text: '200 OK', correct: false },
                { text: '201 Created', correct: true },
                { text: '204 No Content', correct: false },
                { text: '400 Bad Request', correct: false },
            ]
        ),
        createQuestion(
            'In Express.js, what is the purpose of the **`next()`** function in middleware?',
            Difficulty.easy,
            [
                { text: 'To terminate the request-response cycle.', correct: false },
                { text: 'To pass control to the next middleware function or route handler.', correct: true },
                { text: 'To send an error response to the client.', correct: false },
                { text: 'To redirect the user.', correct: false },
            ]
        ),
        createQuestion(
            'What is a **Buffer** in Node.js?',
            Difficulty.medium,
            [
                { text: 'A temporary storage space for slow network requests.', correct: false },
                { text: 'A global object for managing environment variables.', correct: false },
                { text: 'A temporary storage unit for binary data, commonly used when dealing with streams or file operations.', correct: true },
                { text: 'An array optimized for number storage.', correct: false },
            ]
        ),
        createQuestion(
            'What is the main advantage of using **ES Modules (`import`/`export`)** over CommonJS (`require`/`module.exports`) in Node.js?',
            Difficulty.hard,
            [
                { text: 'Synchronous loading.', correct: false },
                { text: 'Static analysis, better tree-shaking (dead code removal), and native browser compatibility.', correct: true },
                { text: 'Faster disk I/O.', correct: false },
                { text: 'Ability to use `require()` statements.', correct: false },
            ]
        ),
        createQuestion(
            'What does **DevOps** primarily focus on?',
            Difficulty.easy,
            [
                { text: 'Software testing only.', correct: false },
                { text: 'The practice of combining software development and IT operations to shorten the system development lifecycle.', correct: true },
                { text: 'Frontend UI design.', correct: false },
                { text: 'Database administration only.', correct: false },
            ]
        ),
        createQuestion(
            'Which tool is commonly used in Node.js for **API documentation** (Swagger/OpenAPI)?',
            Difficulty.medium,
            [
                { text: 'Jest', correct: false },
                { text: 'Swagger UI / OpenAPI Generator', correct: true },
                { text: 'Babel', correct: false },
                { text: 'Webpack', correct: false },
            ]
        ),
        createQuestion(
            'What is the purpose of a **Reverse Proxy** (e.g., Nginx, in front of a Node.js app)?',
            Difficulty.hard,
            [
                { text: 'To handle frontend routing.', correct: false },
                { text: 'To increase security, provide load balancing, and handle SSL termination before requests reach the application server.', correct: true },
                { text: 'To cache all database queries.', correct: false },
                { text: 'To monitor JavaScript memory usage.', correct: false },
            ]
        ),
        createQuestion(
            'Which type of attack involves an attacker uploading malicious executable files to a server?',
            Difficulty.medium,
            [
                { text: 'DDoS', correct: false },
                { text: 'Unrestricted File Upload / Code Execution', correct: true },
                { text: 'XSS', correct: false },
                { text: 'Man-in-the-Middle', correct: false },
            ]
        ),
        createQuestion(
            'What is the concept of **Load Balancing**?',
            Difficulty.easy,
            [
                { text: 'Running the application on a single, powerful server.', correct: false },
                { text: 'Distributing network traffic across multiple servers to ensure high availability and reliability.', correct: true },
                { text: 'Minifying JavaScript files.', correct: false },
                { text: 'Optimizing database schema.', correct: false },
            ]
        ),
        createQuestion(
            'Which environment variable typically dictates the port a Node.js Express server listens on?',
            Difficulty.easy,
            [
                { text: 'NODE_ENV', correct: false },
                { text: 'PORT', correct: true },
                { text: 'HOST', correct: false },
                { text: 'SERVER_URL', correct: false },
            ]
        ),
        
        // -----------------------------------------------------------------
        // 💾 Database & General Concepts (20 Questions)
        // -----------------------------------------------------------------
        createQuestion(
            'What is the Primary Key in a database?',
            Difficulty.easy,
            [
                { text: 'A key that uniquely identifies each record.', correct: true },
                { text: 'A key used to link two tables.', correct: false },
                { text: 'A key used for sorting data.', correct: false },
                { text: 'A key that must be a string.', correct: false },
            ]
        ),
        createQuestion(
            'In SQL, which clause is used to filter records based on specified criteria?',
            Difficulty.easy,
            [
                { text: 'GROUP BY', correct: false },
                { text: 'ORDER BY', correct: false },
                { text: 'WHERE', correct: true },
                { text: 'SELECT', correct: false },
            ]
        ),
        createQuestion(
            'What does **ACID** stand for in the context of database transactions?',
            Difficulty.medium,
            [
                { text: 'Access, Compute, Index, Deploy', correct: false },
                { text: 'Atomicity, Consistency, Isolation, Durability', correct: true },
                { text: 'Array, Class, Interface, Data', correct: false },
                { text: 'Asynchronous, Caching, Integrity, Distribution', correct: false },
            ]
        ),
        createQuestion(
            'Which type of database is generally preferred for schemas that change frequently or handle vast amounts of unstructured data?',
            Difficulty.easy,
            [
                { text: 'SQL (Relational)', correct: false },
                { text: 'NoSQL (e.g., MongoDB, DynamoDB)', correct: true },
                { text: 'Graph Databases', correct: false },
                { text: 'In-Memory Databases', correct: false },
            ]
        ),
        createQuestion(
            'What is a **Foreign Key**?',
            Difficulty.easy,
            [
                { text: 'A key that defines the order of records.', correct: false },
                { text: 'A column or columns that references the Primary Key of another table, enforcing a link between tables.', correct: true },
                { text: 'The main index used for searches.', correct: false },
                { text: 'A key used to encrypt the database.', correct: false },
            ]
        ),
        createQuestion(
            'What is **Normalization** in database design?',
            Difficulty.medium,
            [
                { text: 'Speeding up query execution.', correct: false },
                { text: 'The process of organizing columns and tables to minimize data redundancy and dependency.', correct: true },
                { text: 'Encrypting data fields.', correct: false },
                { text: 'Creating indexes on all tables.', correct: false },
            ]
        ),
        createQuestion(
            'Which SQL command is used to change existing data in a database table?',
            Difficulty.easy,
            [
                { text: 'SELECT', correct: false },
                { text: 'INSERT', correct: false },
                { text: 'UPDATE', correct: true },
                { text: 'ALTER', correct: false },
            ]
        ),
        createQuestion(
            'What is a **Stored Procedure** in a database?',
            Difficulty.medium,
            [
                { text: 'A database table.', correct: false },
                { text: 'A prepared SQL code that you can save and reuse, often to encapsulate logic.', correct: true },
                { text: 'A type of database index.', correct: false },
                { text: 'A backup of the database schema.', correct: false },
            ]
        ),
        createQuestion(
            'In Agile development, what is a **Sprint**?',
            Difficulty.easy,
            [
                { text: 'The final testing phase.', correct: false },
                { text: 'A fixed period during which a specific set of work is completed and made ready for review.', correct: true },
                { text: 'A long-term project plan.', correct: false },
                { text: 'A single bug fix.', correct: false },
            ]
        ),
        createQuestion(
            'What is the purpose of **Code Review**?',
            Difficulty.easy,
            [
                { text: 'To automatically format the code.', correct: false },
                { text: 'To ensure code quality, catch bugs, and share knowledge among team members.', correct: true },
                { text: 'To run unit tests.', correct: false },
                { text: 'To deploy the code to production.', correct: false },
            ]
        ),
        createQuestion(
            'Which type of testing ensures that different parts of the application work together correctly?',
            Difficulty.medium,
            [
                { text: 'Unit Testing', correct: false },
                { text: 'Integration Testing', correct: true },
                { text: 'End-to-End Testing', correct: false },
                { text: 'Smoke Testing', correct: false },
            ]
        ),
        createQuestion(
            'What is a **Microservice Architecture**?',
            Difficulty.medium,
            [
                { text: 'Building the entire application as a single, monolithic unit.', correct: false },
                { text: 'Building an application as a collection of small, independent services that communicate via APIs.', correct: true },
                { text: 'Using a single server for all operations.', correct: false },
                { text: 'A way to minimize database usage.', correct: false },
            ]
        ),
        createQuestion(
            'What is the primary function of **WebAssembly (Wasm)**?',
            Difficulty.hard,
            [
                { text: 'A low-level assembly-like language that can be executed rapidly by web browsers, often used for performance-critical applications.', correct: true },
                { text: 'A new version of JavaScript.', correct: false },
                { text: 'A tool for managing server configuration.', correct: false },
                { text: 'A standard for styling web components.', correct: false },
            ]
        ),
        createQuestion(
            'Which tool is commonly used for **version control** in software development?',
            Difficulty.easy,
            [
                { text: 'NPM', correct: false },
                { text: 'Git', correct: true },
                { text: 'Webpack', correct: false },
                { text: 'MongoDB', correct: false },
            ]
        ),
        createQuestion(
            'What is the purpose of a **`.gitignore`** file?',
            Difficulty.easy,
            [
                { text: 'To define environment variables.', correct: false },
                { text: 'To specify files and directories that Git should ignore and not track.', correct: true },
                { text: 'To configure Git hooks.', correct: false },
                { text: 'To store secure credentials.', correct: false },
            ]
        ),
        createQuestion(
            'What is **Continuous Integration (CI)**?',
            Difficulty.medium,
            [
                { text: 'A process of continuously deploying code to production.', correct: false },
                { text: 'A development practice where developers frequently merge their code changes into a central repository, followed by automated builds and tests.', correct: true },
                { text: 'A type of database.', correct: false },
                { text: 'A method for writing unit tests.', correct: false },
            ]
        ),
        createQuestion(
            'What is the main benefit of using **TypeScript** over plain JavaScript?',
            Difficulty.easy,
            [
                { text: 'Faster runtime execution.', correct: false },
                { text: 'Static Type Checking to catch errors during development.', correct: true },
                { text: 'Automatic CSS compilation.', correct: false },
                { text: 'Built-in routing capabilities.', correct: false },
            ]
        ),
        createQuestion(
            'What is the concept of **Sharding** in database systems?',
            Difficulty.hard,
            [
                { text: 'Encrypting data fields.', correct: false },
                { text: 'Partitioning a large database into smaller, more manageable pieces (shards) across multiple servers to improve scalability.', correct: true },
                { text: 'Creating database backups.', correct: false },
                { text: 'Optimizing SQL query execution plans.', correct: false },
            ]
        ),
        createQuestion(
            'In Git, what command is used to incorporate changes from one branch into the current branch?',
            Difficulty.easy,
            [
                { text: '`git push`', correct: false },
                { text: '`git commit`', correct: false },
                { text: '`git merge` (or `git rebase`)', correct: true },
                { text: '`git clone`', correct: false },
            ]
        ),
        createQuestion(
            'What is a common reason for a full-stack application to use a **Cache** (e.g., Redis)?',
            Difficulty.easy,
            [
                { text: 'To store complex SQL queries.', correct: false },
                { text: 'To reduce the load on the database and improve response times for frequently requested data.', correct: true },
                { text: 'To manage all user sessions permanently.', correct: false },
                { text: 'To replace the database entirely.', correct: false },
            ]
        ),
    ];

   

    // 4️⃣ QUESTIONS & CHOICES: 
    const questions = [];
    for (const q of questionsData) {
        const question = await prisma.question.create({
            data: {
                question_text: q.text,
                difficulty: q.difficulty, 
                mcq: true,
                choices: { create: q.choices.map(c => ({ choice_text: c.text, is_correct: c.correct })) },
            },
        });
        questions.push(question);
    }
    console.log('✅ Questions and choices created');

    // -----------------------------------------------------------------
    // 🆕 PREP: เตรียมข้อมูลสำหรับลูป
    // -----------------------------------------------------------------
    const correctChoiceQ1 = await prisma.choice.findFirst({ where: { question_id: questions[0].question_id, is_correct: true } });
    const incorrectChoiceQ2 = await prisma.choice.findFirst({ where: { question_id: questions[1].question_id, is_correct: false } });

    const answerTemplate = [
        { question: questions[0], selected_choice: correctChoiceQ1, is_correct: true }, // Q1: ตอบถูก
        { question: questions[1], selected_choice: incorrectChoiceQ2, is_correct: false }, // Q2: ตอบผิด
    ];

    console.log('\n--- 5️⃣ & 6️⃣ Starting Test Assignment and Mock Answers for ALL Candidates ---');

    // -----------------------------------------------------------------
    // 🔄 วนลูปเพื่อสร้าง TEST และ TEST ANSWERS ให้กับผู้สมัคร 500 คน
    // -----------------------------------------------------------------
    for (const candidate of allCandidates) {
        const candidateId = candidate.candidate_id;
        const testUniqueId = 'test1-' + candidateId;

        // 5️⃣ TEST: สร้างบันทึกการสอบ (Test Record)
        const test = await prisma.test.upsert({
            where: { test_id: testUniqueId },
            update: {},
            create: { 
                test_id: testUniqueId, 
                candidate_id: candidateId,
            },
        });

        // 5️⃣ TESTQUESTIONS: เชื่อมโยงคำถามทั้งหมด (100 ข้อ)
        const testQuestionPromises = questions.map((q) => 
             prisma.testQuestion.upsert({
                where: { test_id_question_id: { test_id: test.test_id, question_id: q.question_id } },
                update: {},
                create: { test_id: test.test_id, question_id: q.question_id },
            })
        );
        await Promise.all(testQuestionPromises);
        
        // 6️⃣ TEST ANSWERS: บันทึกคำตอบจำลอง (2 ข้อแรก)
        const testAnswerPromises = answerTemplate.map((ta) =>
             prisma.testAnswer.upsert({
                where: { test_id_question_id: { test_id: test.test_id, question_id: ta.question.question_id } },
                update: {},
                create: {
                    test_id: test.test_id,
                    question_id: ta.question.question_id,
                    selected_choice_id: ta.selected_choice?.choice_id,
                    is_correct: ta.is_correct,
                },
            })
        );
        await Promise.all(testAnswerPromises);
        
        // Console log เพื่อติดตามความคืบหน้า
        // console.log(`✅ Processed Test & Answers for: ${candidate.first_name} ${candidate.last_name} (Total: ${allCandidates.indexOf(candidate) + 1}/${allCandidates.length})`);
    }

    console.log('--- ✅ All Tests, Questions, and Mock Answers linked successfully for ALL candidates. ---');


    // -----------------------------
    // 7️⃣ CANDIDATE STATUS, DOCUMENTS & STATUS UPDATES (สำหรับผู้สมัครทุกคน)
    // -----------------------------
    console.log('\n--- 7️⃣ Starting Status and Document Assignment for ALL Candidates ---');

    // 🔄 วนลูปเพื่อสร้าง Status, Document และ Request ให้กับผู้สมัครแต่ละคน
    for (const candidate of allCandidates) {
        const candidateId = candidate.candidate_id;
        const statusId = 'status-' + candidateId;
        const requestId = 'req-' + candidateId;

        // 1. Candidate Status (ตั้งสถานะเป็น 'pass' โดย Admin1)
        // ต้อง await เพื่อให้ได้ statusRecord สำหรับการอ้างอิงใน StatusUpdateRequests
        const statusRecord = await prisma.candidateStatus.upsert({
            where: { candidate_status_id: statusId },
            update: {},
            create: { 
                candidate_status_id: statusId, 
                candidate_id: candidateId, 
                status: CandidateStatusEnum.pass, 
                updated_by: admin1.admin_user_id 
            },
        });

        // 2. Document (สร้างเอกสาร PDF 1 ฉบับ)
        await prisma.document.upsert({
            where: { candidate_id_doc_type: { candidate_id: candidateId, doc_type: DocTypeEnum.pdf } },
            update: {},
            create: { 
                candidate_id: candidateId, 
                file_url: `https://docs.example.com/${candidate.email}/cv.pdf`, // ใช้อีเมลสร้าง URL ที่ไม่ซ้ำ
                file_type: 'application/pdf', 
                doc_type: DocTypeEnum.pdf 
            },
        });

        // 3. Status Update Request (จำลองการอนุมัติ)
        await prisma.statusUpdateRequests.upsert({
            where: { status_update_request_id: requestId },
            update: {},
            create: { 
                status_update_request_id: requestId, 
                candidate_status_id: statusRecord.candidate_status_id, // อ้างอิงสถานะที่เพิ่งสร้าง
                requested_status: StatusEnum.accepted, 
                approve_by: admin1.admin_user_id, 
                status: StatusEnum.accepted 
            },
        });
    }

    console.log('✅ Candidate status, documents, and status update requests created for ALL candidates.');
    console.log('🎉 Seeding finished successfully!');
}

main()
    .catch(e => { console.error(e); process.exit(1); })
    .finally(async () => { await prisma.$disconnect(); });