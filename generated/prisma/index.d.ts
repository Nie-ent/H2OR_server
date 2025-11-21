
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model AdminUser
 * 
 */
export type AdminUser = $Result.DefaultSelection<Prisma.$AdminUserPayload>
/**
 * Model Candidate
 * 
 */
export type Candidate = $Result.DefaultSelection<Prisma.$CandidatePayload>
/**
 * Model Address
 * 
 */
export type Address = $Result.DefaultSelection<Prisma.$AddressPayload>
/**
 * Model CandidateStatus
 * 
 */
export type CandidateStatus = $Result.DefaultSelection<Prisma.$CandidateStatusPayload>
/**
 * Model StatusUpdateRequests
 * 
 */
export type StatusUpdateRequests = $Result.DefaultSelection<Prisma.$StatusUpdateRequestsPayload>
/**
 * Model Document
 * 
 */
export type Document = $Result.DefaultSelection<Prisma.$DocumentPayload>
/**
 * Model Question
 * 
 */
export type Question = $Result.DefaultSelection<Prisma.$QuestionPayload>
/**
 * Model Choice
 * 
 */
export type Choice = $Result.DefaultSelection<Prisma.$ChoicePayload>
/**
 * Model Test
 * 
 */
export type Test = $Result.DefaultSelection<Prisma.$TestPayload>
/**
 * Model TestQuestion
 * 
 */
export type TestQuestion = $Result.DefaultSelection<Prisma.$TestQuestionPayload>
/**
 * Model TestAnswer
 * 
 */
export type TestAnswer = $Result.DefaultSelection<Prisma.$TestAnswerPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  admin: 'admin',
  super_admin: 'super_admin'
};

export type Role = (typeof Role)[keyof typeof Role]


export const Difficulty: {
  easy: 'easy',
  medium: 'medium',
  hard: 'hard'
};

export type Difficulty = (typeof Difficulty)[keyof typeof Difficulty]


export const StatusEnum: {
  pending: 'pending',
  accepted: 'accepted',
  rejected: 'rejected'
};

export type StatusEnum = (typeof StatusEnum)[keyof typeof StatusEnum]


export const CandidateStatusEnum: {
  pending: 'pending',
  pass: 'pass',
  fail: 'fail'
};

export type CandidateStatusEnum = (typeof CandidateStatusEnum)[keyof typeof CandidateStatusEnum]


export const DocTypeEnum: {
  pdf: 'pdf',
  png: 'png',
  jpg: 'jpg'
};

export type DocTypeEnum = (typeof DocTypeEnum)[keyof typeof DocTypeEnum]


export const AddressType: {
  primary: 'primary',
  mailing: 'mailing',
  permanent: 'permanent'
};

export type AddressType = (typeof AddressType)[keyof typeof AddressType]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type Difficulty = $Enums.Difficulty

export const Difficulty: typeof $Enums.Difficulty

export type StatusEnum = $Enums.StatusEnum

export const StatusEnum: typeof $Enums.StatusEnum

export type CandidateStatusEnum = $Enums.CandidateStatusEnum

export const CandidateStatusEnum: typeof $Enums.CandidateStatusEnum

export type DocTypeEnum = $Enums.DocTypeEnum

export const DocTypeEnum: typeof $Enums.DocTypeEnum

export type AddressType = $Enums.AddressType

export const AddressType: typeof $Enums.AddressType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more AdminUsers
 * const adminUsers = await prisma.adminUser.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more AdminUsers
   * const adminUsers = await prisma.adminUser.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.adminUser`: Exposes CRUD operations for the **AdminUser** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AdminUsers
    * const adminUsers = await prisma.adminUser.findMany()
    * ```
    */
  get adminUser(): Prisma.AdminUserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.candidate`: Exposes CRUD operations for the **Candidate** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Candidates
    * const candidates = await prisma.candidate.findMany()
    * ```
    */
  get candidate(): Prisma.CandidateDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.address`: Exposes CRUD operations for the **Address** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Addresses
    * const addresses = await prisma.address.findMany()
    * ```
    */
  get address(): Prisma.AddressDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.candidateStatus`: Exposes CRUD operations for the **CandidateStatus** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CandidateStatuses
    * const candidateStatuses = await prisma.candidateStatus.findMany()
    * ```
    */
  get candidateStatus(): Prisma.CandidateStatusDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.statusUpdateRequests`: Exposes CRUD operations for the **StatusUpdateRequests** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StatusUpdateRequests
    * const statusUpdateRequests = await prisma.statusUpdateRequests.findMany()
    * ```
    */
  get statusUpdateRequests(): Prisma.StatusUpdateRequestsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.document`: Exposes CRUD operations for the **Document** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Documents
    * const documents = await prisma.document.findMany()
    * ```
    */
  get document(): Prisma.DocumentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.question`: Exposes CRUD operations for the **Question** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Questions
    * const questions = await prisma.question.findMany()
    * ```
    */
  get question(): Prisma.QuestionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.choice`: Exposes CRUD operations for the **Choice** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Choices
    * const choices = await prisma.choice.findMany()
    * ```
    */
  get choice(): Prisma.ChoiceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.test`: Exposes CRUD operations for the **Test** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tests
    * const tests = await prisma.test.findMany()
    * ```
    */
  get test(): Prisma.TestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.testQuestion`: Exposes CRUD operations for the **TestQuestion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TestQuestions
    * const testQuestions = await prisma.testQuestion.findMany()
    * ```
    */
  get testQuestion(): Prisma.TestQuestionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.testAnswer`: Exposes CRUD operations for the **TestAnswer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TestAnswers
    * const testAnswers = await prisma.testAnswer.findMany()
    * ```
    */
  get testAnswer(): Prisma.TestAnswerDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.0.0
   * Query Engine version: 0c19ccc313cf9911a90d99d2ac2eb0280c76c513
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    AdminUser: 'AdminUser',
    Candidate: 'Candidate',
    Address: 'Address',
    CandidateStatus: 'CandidateStatus',
    StatusUpdateRequests: 'StatusUpdateRequests',
    Document: 'Document',
    Question: 'Question',
    Choice: 'Choice',
    Test: 'Test',
    TestQuestion: 'TestQuestion',
    TestAnswer: 'TestAnswer'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "adminUser" | "candidate" | "address" | "candidateStatus" | "statusUpdateRequests" | "document" | "question" | "choice" | "test" | "testQuestion" | "testAnswer"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      AdminUser: {
        payload: Prisma.$AdminUserPayload<ExtArgs>
        fields: Prisma.AdminUserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdminUserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdminUserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>
          }
          findFirst: {
            args: Prisma.AdminUserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdminUserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>
          }
          findMany: {
            args: Prisma.AdminUserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>[]
          }
          create: {
            args: Prisma.AdminUserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>
          }
          createMany: {
            args: Prisma.AdminUserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AdminUserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>
          }
          update: {
            args: Prisma.AdminUserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>
          }
          deleteMany: {
            args: Prisma.AdminUserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdminUserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AdminUserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>
          }
          aggregate: {
            args: Prisma.AdminUserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdminUser>
          }
          groupBy: {
            args: Prisma.AdminUserGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminUserGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdminUserCountArgs<ExtArgs>
            result: $Utils.Optional<AdminUserCountAggregateOutputType> | number
          }
        }
      }
      Candidate: {
        payload: Prisma.$CandidatePayload<ExtArgs>
        fields: Prisma.CandidateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CandidateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CandidateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidatePayload>
          }
          findFirst: {
            args: Prisma.CandidateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CandidateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidatePayload>
          }
          findMany: {
            args: Prisma.CandidateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidatePayload>[]
          }
          create: {
            args: Prisma.CandidateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidatePayload>
          }
          createMany: {
            args: Prisma.CandidateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CandidateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidatePayload>
          }
          update: {
            args: Prisma.CandidateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidatePayload>
          }
          deleteMany: {
            args: Prisma.CandidateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CandidateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CandidateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidatePayload>
          }
          aggregate: {
            args: Prisma.CandidateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCandidate>
          }
          groupBy: {
            args: Prisma.CandidateGroupByArgs<ExtArgs>
            result: $Utils.Optional<CandidateGroupByOutputType>[]
          }
          count: {
            args: Prisma.CandidateCountArgs<ExtArgs>
            result: $Utils.Optional<CandidateCountAggregateOutputType> | number
          }
        }
      }
      Address: {
        payload: Prisma.$AddressPayload<ExtArgs>
        fields: Prisma.AddressFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AddressFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AddressFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          findFirst: {
            args: Prisma.AddressFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AddressFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          findMany: {
            args: Prisma.AddressFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>[]
          }
          create: {
            args: Prisma.AddressCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          createMany: {
            args: Prisma.AddressCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AddressDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          update: {
            args: Prisma.AddressUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          deleteMany: {
            args: Prisma.AddressDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AddressUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AddressUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          aggregate: {
            args: Prisma.AddressAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAddress>
          }
          groupBy: {
            args: Prisma.AddressGroupByArgs<ExtArgs>
            result: $Utils.Optional<AddressGroupByOutputType>[]
          }
          count: {
            args: Prisma.AddressCountArgs<ExtArgs>
            result: $Utils.Optional<AddressCountAggregateOutputType> | number
          }
        }
      }
      CandidateStatus: {
        payload: Prisma.$CandidateStatusPayload<ExtArgs>
        fields: Prisma.CandidateStatusFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CandidateStatusFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidateStatusPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CandidateStatusFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidateStatusPayload>
          }
          findFirst: {
            args: Prisma.CandidateStatusFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidateStatusPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CandidateStatusFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidateStatusPayload>
          }
          findMany: {
            args: Prisma.CandidateStatusFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidateStatusPayload>[]
          }
          create: {
            args: Prisma.CandidateStatusCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidateStatusPayload>
          }
          createMany: {
            args: Prisma.CandidateStatusCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CandidateStatusDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidateStatusPayload>
          }
          update: {
            args: Prisma.CandidateStatusUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidateStatusPayload>
          }
          deleteMany: {
            args: Prisma.CandidateStatusDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CandidateStatusUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CandidateStatusUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidateStatusPayload>
          }
          aggregate: {
            args: Prisma.CandidateStatusAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCandidateStatus>
          }
          groupBy: {
            args: Prisma.CandidateStatusGroupByArgs<ExtArgs>
            result: $Utils.Optional<CandidateStatusGroupByOutputType>[]
          }
          count: {
            args: Prisma.CandidateStatusCountArgs<ExtArgs>
            result: $Utils.Optional<CandidateStatusCountAggregateOutputType> | number
          }
        }
      }
      StatusUpdateRequests: {
        payload: Prisma.$StatusUpdateRequestsPayload<ExtArgs>
        fields: Prisma.StatusUpdateRequestsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StatusUpdateRequestsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusUpdateRequestsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StatusUpdateRequestsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusUpdateRequestsPayload>
          }
          findFirst: {
            args: Prisma.StatusUpdateRequestsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusUpdateRequestsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StatusUpdateRequestsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusUpdateRequestsPayload>
          }
          findMany: {
            args: Prisma.StatusUpdateRequestsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusUpdateRequestsPayload>[]
          }
          create: {
            args: Prisma.StatusUpdateRequestsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusUpdateRequestsPayload>
          }
          createMany: {
            args: Prisma.StatusUpdateRequestsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.StatusUpdateRequestsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusUpdateRequestsPayload>
          }
          update: {
            args: Prisma.StatusUpdateRequestsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusUpdateRequestsPayload>
          }
          deleteMany: {
            args: Prisma.StatusUpdateRequestsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StatusUpdateRequestsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.StatusUpdateRequestsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusUpdateRequestsPayload>
          }
          aggregate: {
            args: Prisma.StatusUpdateRequestsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStatusUpdateRequests>
          }
          groupBy: {
            args: Prisma.StatusUpdateRequestsGroupByArgs<ExtArgs>
            result: $Utils.Optional<StatusUpdateRequestsGroupByOutputType>[]
          }
          count: {
            args: Prisma.StatusUpdateRequestsCountArgs<ExtArgs>
            result: $Utils.Optional<StatusUpdateRequestsCountAggregateOutputType> | number
          }
        }
      }
      Document: {
        payload: Prisma.$DocumentPayload<ExtArgs>
        fields: Prisma.DocumentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DocumentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DocumentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          findFirst: {
            args: Prisma.DocumentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DocumentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          findMany: {
            args: Prisma.DocumentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>[]
          }
          create: {
            args: Prisma.DocumentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          createMany: {
            args: Prisma.DocumentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.DocumentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          update: {
            args: Prisma.DocumentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          deleteMany: {
            args: Prisma.DocumentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DocumentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DocumentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          aggregate: {
            args: Prisma.DocumentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDocument>
          }
          groupBy: {
            args: Prisma.DocumentGroupByArgs<ExtArgs>
            result: $Utils.Optional<DocumentGroupByOutputType>[]
          }
          count: {
            args: Prisma.DocumentCountArgs<ExtArgs>
            result: $Utils.Optional<DocumentCountAggregateOutputType> | number
          }
        }
      }
      Question: {
        payload: Prisma.$QuestionPayload<ExtArgs>
        fields: Prisma.QuestionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuestionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuestionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          findFirst: {
            args: Prisma.QuestionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuestionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          findMany: {
            args: Prisma.QuestionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>[]
          }
          create: {
            args: Prisma.QuestionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          createMany: {
            args: Prisma.QuestionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.QuestionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          update: {
            args: Prisma.QuestionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          deleteMany: {
            args: Prisma.QuestionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuestionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.QuestionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          aggregate: {
            args: Prisma.QuestionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuestion>
          }
          groupBy: {
            args: Prisma.QuestionGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuestionGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuestionCountArgs<ExtArgs>
            result: $Utils.Optional<QuestionCountAggregateOutputType> | number
          }
        }
      }
      Choice: {
        payload: Prisma.$ChoicePayload<ExtArgs>
        fields: Prisma.ChoiceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChoiceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChoicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChoiceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChoicePayload>
          }
          findFirst: {
            args: Prisma.ChoiceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChoicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChoiceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChoicePayload>
          }
          findMany: {
            args: Prisma.ChoiceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChoicePayload>[]
          }
          create: {
            args: Prisma.ChoiceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChoicePayload>
          }
          createMany: {
            args: Prisma.ChoiceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ChoiceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChoicePayload>
          }
          update: {
            args: Prisma.ChoiceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChoicePayload>
          }
          deleteMany: {
            args: Prisma.ChoiceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChoiceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ChoiceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChoicePayload>
          }
          aggregate: {
            args: Prisma.ChoiceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChoice>
          }
          groupBy: {
            args: Prisma.ChoiceGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChoiceGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChoiceCountArgs<ExtArgs>
            result: $Utils.Optional<ChoiceCountAggregateOutputType> | number
          }
        }
      }
      Test: {
        payload: Prisma.$TestPayload<ExtArgs>
        fields: Prisma.TestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestPayload>
          }
          findFirst: {
            args: Prisma.TestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestPayload>
          }
          findMany: {
            args: Prisma.TestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestPayload>[]
          }
          create: {
            args: Prisma.TestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestPayload>
          }
          createMany: {
            args: Prisma.TestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestPayload>
          }
          update: {
            args: Prisma.TestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestPayload>
          }
          deleteMany: {
            args: Prisma.TestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestPayload>
          }
          aggregate: {
            args: Prisma.TestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTest>
          }
          groupBy: {
            args: Prisma.TestGroupByArgs<ExtArgs>
            result: $Utils.Optional<TestGroupByOutputType>[]
          }
          count: {
            args: Prisma.TestCountArgs<ExtArgs>
            result: $Utils.Optional<TestCountAggregateOutputType> | number
          }
        }
      }
      TestQuestion: {
        payload: Prisma.$TestQuestionPayload<ExtArgs>
        fields: Prisma.TestQuestionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TestQuestionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestQuestionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TestQuestionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestQuestionPayload>
          }
          findFirst: {
            args: Prisma.TestQuestionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestQuestionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TestQuestionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestQuestionPayload>
          }
          findMany: {
            args: Prisma.TestQuestionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestQuestionPayload>[]
          }
          create: {
            args: Prisma.TestQuestionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestQuestionPayload>
          }
          createMany: {
            args: Prisma.TestQuestionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TestQuestionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestQuestionPayload>
          }
          update: {
            args: Prisma.TestQuestionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestQuestionPayload>
          }
          deleteMany: {
            args: Prisma.TestQuestionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TestQuestionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TestQuestionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestQuestionPayload>
          }
          aggregate: {
            args: Prisma.TestQuestionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTestQuestion>
          }
          groupBy: {
            args: Prisma.TestQuestionGroupByArgs<ExtArgs>
            result: $Utils.Optional<TestQuestionGroupByOutputType>[]
          }
          count: {
            args: Prisma.TestQuestionCountArgs<ExtArgs>
            result: $Utils.Optional<TestQuestionCountAggregateOutputType> | number
          }
        }
      }
      TestAnswer: {
        payload: Prisma.$TestAnswerPayload<ExtArgs>
        fields: Prisma.TestAnswerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TestAnswerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestAnswerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TestAnswerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestAnswerPayload>
          }
          findFirst: {
            args: Prisma.TestAnswerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestAnswerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TestAnswerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestAnswerPayload>
          }
          findMany: {
            args: Prisma.TestAnswerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestAnswerPayload>[]
          }
          create: {
            args: Prisma.TestAnswerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestAnswerPayload>
          }
          createMany: {
            args: Prisma.TestAnswerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TestAnswerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestAnswerPayload>
          }
          update: {
            args: Prisma.TestAnswerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestAnswerPayload>
          }
          deleteMany: {
            args: Prisma.TestAnswerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TestAnswerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TestAnswerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestAnswerPayload>
          }
          aggregate: {
            args: Prisma.TestAnswerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTestAnswer>
          }
          groupBy: {
            args: Prisma.TestAnswerGroupByArgs<ExtArgs>
            result: $Utils.Optional<TestAnswerGroupByOutputType>[]
          }
          count: {
            args: Prisma.TestAnswerCountArgs<ExtArgs>
            result: $Utils.Optional<TestAnswerCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    adminUser?: AdminUserOmit
    candidate?: CandidateOmit
    address?: AddressOmit
    candidateStatus?: CandidateStatusOmit
    statusUpdateRequests?: StatusUpdateRequestsOmit
    document?: DocumentOmit
    question?: QuestionOmit
    choice?: ChoiceOmit
    test?: TestOmit
    testQuestion?: TestQuestionOmit
    testAnswer?: TestAnswerOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type AdminUserCountOutputType
   */

  export type AdminUserCountOutputType = {
    approved_status_updates: number
  }

  export type AdminUserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    approved_status_updates?: boolean | AdminUserCountOutputTypeCountApproved_status_updatesArgs
  }

  // Custom InputTypes
  /**
   * AdminUserCountOutputType without action
   */
  export type AdminUserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUserCountOutputType
     */
    select?: AdminUserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AdminUserCountOutputType without action
   */
  export type AdminUserCountOutputTypeCountApproved_status_updatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StatusUpdateRequestsWhereInput
  }


  /**
   * Count Type CandidateCountOutputType
   */

  export type CandidateCountOutputType = {
    tests: number
    candidate_statuses: number
    documents: number
    addresses: number
  }

  export type CandidateCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tests?: boolean | CandidateCountOutputTypeCountTestsArgs
    candidate_statuses?: boolean | CandidateCountOutputTypeCountCandidate_statusesArgs
    documents?: boolean | CandidateCountOutputTypeCountDocumentsArgs
    addresses?: boolean | CandidateCountOutputTypeCountAddressesArgs
  }

  // Custom InputTypes
  /**
   * CandidateCountOutputType without action
   */
  export type CandidateCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateCountOutputType
     */
    select?: CandidateCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CandidateCountOutputType without action
   */
  export type CandidateCountOutputTypeCountTestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TestWhereInput
  }

  /**
   * CandidateCountOutputType without action
   */
  export type CandidateCountOutputTypeCountCandidate_statusesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CandidateStatusWhereInput
  }

  /**
   * CandidateCountOutputType without action
   */
  export type CandidateCountOutputTypeCountDocumentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentWhereInput
  }

  /**
   * CandidateCountOutputType without action
   */
  export type CandidateCountOutputTypeCountAddressesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AddressWhereInput
  }


  /**
   * Count Type CandidateStatusCountOutputType
   */

  export type CandidateStatusCountOutputType = {
    status_update_requests: number
  }

  export type CandidateStatusCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    status_update_requests?: boolean | CandidateStatusCountOutputTypeCountStatus_update_requestsArgs
  }

  // Custom InputTypes
  /**
   * CandidateStatusCountOutputType without action
   */
  export type CandidateStatusCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateStatusCountOutputType
     */
    select?: CandidateStatusCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CandidateStatusCountOutputType without action
   */
  export type CandidateStatusCountOutputTypeCountStatus_update_requestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StatusUpdateRequestsWhereInput
  }


  /**
   * Count Type QuestionCountOutputType
   */

  export type QuestionCountOutputType = {
    choices: number
    test_questions: number
    testAnswers: number
  }

  export type QuestionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    choices?: boolean | QuestionCountOutputTypeCountChoicesArgs
    test_questions?: boolean | QuestionCountOutputTypeCountTest_questionsArgs
    testAnswers?: boolean | QuestionCountOutputTypeCountTestAnswersArgs
  }

  // Custom InputTypes
  /**
   * QuestionCountOutputType without action
   */
  export type QuestionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionCountOutputType
     */
    select?: QuestionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * QuestionCountOutputType without action
   */
  export type QuestionCountOutputTypeCountChoicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChoiceWhereInput
  }

  /**
   * QuestionCountOutputType without action
   */
  export type QuestionCountOutputTypeCountTest_questionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TestQuestionWhereInput
  }

  /**
   * QuestionCountOutputType without action
   */
  export type QuestionCountOutputTypeCountTestAnswersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TestAnswerWhereInput
  }


  /**
   * Count Type ChoiceCountOutputType
   */

  export type ChoiceCountOutputType = {
    selected_answers: number
  }

  export type ChoiceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    selected_answers?: boolean | ChoiceCountOutputTypeCountSelected_answersArgs
  }

  // Custom InputTypes
  /**
   * ChoiceCountOutputType without action
   */
  export type ChoiceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChoiceCountOutputType
     */
    select?: ChoiceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ChoiceCountOutputType without action
   */
  export type ChoiceCountOutputTypeCountSelected_answersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TestAnswerWhereInput
  }


  /**
   * Count Type TestCountOutputType
   */

  export type TestCountOutputType = {
    test_questions: number
    test_answers: number
  }

  export type TestCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    test_questions?: boolean | TestCountOutputTypeCountTest_questionsArgs
    test_answers?: boolean | TestCountOutputTypeCountTest_answersArgs
  }

  // Custom InputTypes
  /**
   * TestCountOutputType without action
   */
  export type TestCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestCountOutputType
     */
    select?: TestCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TestCountOutputType without action
   */
  export type TestCountOutputTypeCountTest_questionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TestQuestionWhereInput
  }

  /**
   * TestCountOutputType without action
   */
  export type TestCountOutputTypeCountTest_answersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TestAnswerWhereInput
  }


  /**
   * Models
   */

  /**
   * Model AdminUser
   */

  export type AggregateAdminUser = {
    _count: AdminUserCountAggregateOutputType | null
    _avg: AdminUserAvgAggregateOutputType | null
    _sum: AdminUserSumAggregateOutputType | null
    _min: AdminUserMinAggregateOutputType | null
    _max: AdminUserMaxAggregateOutputType | null
  }

  export type AdminUserAvgAggregateOutputType = {
    admin_user_id: number | null
  }

  export type AdminUserSumAggregateOutputType = {
    admin_user_id: number | null
  }

  export type AdminUserMinAggregateOutputType = {
    admin_user_id: number | null
    first_name: string | null
    last_name: string | null
    email: string | null
    role: $Enums.Role | null
    password_hash: string | null
    created_at: Date | null
  }

  export type AdminUserMaxAggregateOutputType = {
    admin_user_id: number | null
    first_name: string | null
    last_name: string | null
    email: string | null
    role: $Enums.Role | null
    password_hash: string | null
    created_at: Date | null
  }

  export type AdminUserCountAggregateOutputType = {
    admin_user_id: number
    first_name: number
    last_name: number
    email: number
    role: number
    password_hash: number
    created_at: number
    _all: number
  }


  export type AdminUserAvgAggregateInputType = {
    admin_user_id?: true
  }

  export type AdminUserSumAggregateInputType = {
    admin_user_id?: true
  }

  export type AdminUserMinAggregateInputType = {
    admin_user_id?: true
    first_name?: true
    last_name?: true
    email?: true
    role?: true
    password_hash?: true
    created_at?: true
  }

  export type AdminUserMaxAggregateInputType = {
    admin_user_id?: true
    first_name?: true
    last_name?: true
    email?: true
    role?: true
    password_hash?: true
    created_at?: true
  }

  export type AdminUserCountAggregateInputType = {
    admin_user_id?: true
    first_name?: true
    last_name?: true
    email?: true
    role?: true
    password_hash?: true
    created_at?: true
    _all?: true
  }

  export type AdminUserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AdminUser to aggregate.
     */
    where?: AdminUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminUsers to fetch.
     */
    orderBy?: AdminUserOrderByWithRelationInput | AdminUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdminUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AdminUsers
    **/
    _count?: true | AdminUserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AdminUserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AdminUserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminUserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminUserMaxAggregateInputType
  }

  export type GetAdminUserAggregateType<T extends AdminUserAggregateArgs> = {
        [P in keyof T & keyof AggregateAdminUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdminUser[P]>
      : GetScalarType<T[P], AggregateAdminUser[P]>
  }




  export type AdminUserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminUserWhereInput
    orderBy?: AdminUserOrderByWithAggregationInput | AdminUserOrderByWithAggregationInput[]
    by: AdminUserScalarFieldEnum[] | AdminUserScalarFieldEnum
    having?: AdminUserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminUserCountAggregateInputType | true
    _avg?: AdminUserAvgAggregateInputType
    _sum?: AdminUserSumAggregateInputType
    _min?: AdminUserMinAggregateInputType
    _max?: AdminUserMaxAggregateInputType
  }

  export type AdminUserGroupByOutputType = {
    admin_user_id: number
    first_name: string
    last_name: string
    email: string
    role: $Enums.Role
    password_hash: string
    created_at: Date
    _count: AdminUserCountAggregateOutputType | null
    _avg: AdminUserAvgAggregateOutputType | null
    _sum: AdminUserSumAggregateOutputType | null
    _min: AdminUserMinAggregateOutputType | null
    _max: AdminUserMaxAggregateOutputType | null
  }

  type GetAdminUserGroupByPayload<T extends AdminUserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminUserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminUserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminUserGroupByOutputType[P]>
            : GetScalarType<T[P], AdminUserGroupByOutputType[P]>
        }
      >
    >


  export type AdminUserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    admin_user_id?: boolean
    first_name?: boolean
    last_name?: boolean
    email?: boolean
    role?: boolean
    password_hash?: boolean
    created_at?: boolean
    approved_status_updates?: boolean | AdminUser$approved_status_updatesArgs<ExtArgs>
    _count?: boolean | AdminUserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["adminUser"]>



  export type AdminUserSelectScalar = {
    admin_user_id?: boolean
    first_name?: boolean
    last_name?: boolean
    email?: boolean
    role?: boolean
    password_hash?: boolean
    created_at?: boolean
  }

  export type AdminUserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"admin_user_id" | "first_name" | "last_name" | "email" | "role" | "password_hash" | "created_at", ExtArgs["result"]["adminUser"]>
  export type AdminUserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    approved_status_updates?: boolean | AdminUser$approved_status_updatesArgs<ExtArgs>
    _count?: boolean | AdminUserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $AdminUserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AdminUser"
    objects: {
      approved_status_updates: Prisma.$StatusUpdateRequestsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      admin_user_id: number
      first_name: string
      last_name: string
      email: string
      role: $Enums.Role
      password_hash: string
      created_at: Date
    }, ExtArgs["result"]["adminUser"]>
    composites: {}
  }

  type AdminUserGetPayload<S extends boolean | null | undefined | AdminUserDefaultArgs> = $Result.GetResult<Prisma.$AdminUserPayload, S>

  type AdminUserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdminUserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdminUserCountAggregateInputType | true
    }

  export interface AdminUserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AdminUser'], meta: { name: 'AdminUser' } }
    /**
     * Find zero or one AdminUser that matches the filter.
     * @param {AdminUserFindUniqueArgs} args - Arguments to find a AdminUser
     * @example
     * // Get one AdminUser
     * const adminUser = await prisma.adminUser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdminUserFindUniqueArgs>(args: SelectSubset<T, AdminUserFindUniqueArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AdminUser that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdminUserFindUniqueOrThrowArgs} args - Arguments to find a AdminUser
     * @example
     * // Get one AdminUser
     * const adminUser = await prisma.adminUser.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdminUserFindUniqueOrThrowArgs>(args: SelectSubset<T, AdminUserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AdminUser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserFindFirstArgs} args - Arguments to find a AdminUser
     * @example
     * // Get one AdminUser
     * const adminUser = await prisma.adminUser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdminUserFindFirstArgs>(args?: SelectSubset<T, AdminUserFindFirstArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AdminUser that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserFindFirstOrThrowArgs} args - Arguments to find a AdminUser
     * @example
     * // Get one AdminUser
     * const adminUser = await prisma.adminUser.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdminUserFindFirstOrThrowArgs>(args?: SelectSubset<T, AdminUserFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AdminUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AdminUsers
     * const adminUsers = await prisma.adminUser.findMany()
     * 
     * // Get first 10 AdminUsers
     * const adminUsers = await prisma.adminUser.findMany({ take: 10 })
     * 
     * // Only select the `admin_user_id`
     * const adminUserWithAdmin_user_idOnly = await prisma.adminUser.findMany({ select: { admin_user_id: true } })
     * 
     */
    findMany<T extends AdminUserFindManyArgs>(args?: SelectSubset<T, AdminUserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AdminUser.
     * @param {AdminUserCreateArgs} args - Arguments to create a AdminUser.
     * @example
     * // Create one AdminUser
     * const AdminUser = await prisma.adminUser.create({
     *   data: {
     *     // ... data to create a AdminUser
     *   }
     * })
     * 
     */
    create<T extends AdminUserCreateArgs>(args: SelectSubset<T, AdminUserCreateArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AdminUsers.
     * @param {AdminUserCreateManyArgs} args - Arguments to create many AdminUsers.
     * @example
     * // Create many AdminUsers
     * const adminUser = await prisma.adminUser.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdminUserCreateManyArgs>(args?: SelectSubset<T, AdminUserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a AdminUser.
     * @param {AdminUserDeleteArgs} args - Arguments to delete one AdminUser.
     * @example
     * // Delete one AdminUser
     * const AdminUser = await prisma.adminUser.delete({
     *   where: {
     *     // ... filter to delete one AdminUser
     *   }
     * })
     * 
     */
    delete<T extends AdminUserDeleteArgs>(args: SelectSubset<T, AdminUserDeleteArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AdminUser.
     * @param {AdminUserUpdateArgs} args - Arguments to update one AdminUser.
     * @example
     * // Update one AdminUser
     * const adminUser = await prisma.adminUser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdminUserUpdateArgs>(args: SelectSubset<T, AdminUserUpdateArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AdminUsers.
     * @param {AdminUserDeleteManyArgs} args - Arguments to filter AdminUsers to delete.
     * @example
     * // Delete a few AdminUsers
     * const { count } = await prisma.adminUser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdminUserDeleteManyArgs>(args?: SelectSubset<T, AdminUserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AdminUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AdminUsers
     * const adminUser = await prisma.adminUser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdminUserUpdateManyArgs>(args: SelectSubset<T, AdminUserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AdminUser.
     * @param {AdminUserUpsertArgs} args - Arguments to update or create a AdminUser.
     * @example
     * // Update or create a AdminUser
     * const adminUser = await prisma.adminUser.upsert({
     *   create: {
     *     // ... data to create a AdminUser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AdminUser we want to update
     *   }
     * })
     */
    upsert<T extends AdminUserUpsertArgs>(args: SelectSubset<T, AdminUserUpsertArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AdminUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserCountArgs} args - Arguments to filter AdminUsers to count.
     * @example
     * // Count the number of AdminUsers
     * const count = await prisma.adminUser.count({
     *   where: {
     *     // ... the filter for the AdminUsers we want to count
     *   }
     * })
    **/
    count<T extends AdminUserCountArgs>(
      args?: Subset<T, AdminUserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminUserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AdminUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AdminUserAggregateArgs>(args: Subset<T, AdminUserAggregateArgs>): Prisma.PrismaPromise<GetAdminUserAggregateType<T>>

    /**
     * Group by AdminUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AdminUserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminUserGroupByArgs['orderBy'] }
        : { orderBy?: AdminUserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AdminUserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AdminUser model
   */
  readonly fields: AdminUserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AdminUser.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdminUserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    approved_status_updates<T extends AdminUser$approved_status_updatesArgs<ExtArgs> = {}>(args?: Subset<T, AdminUser$approved_status_updatesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StatusUpdateRequestsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AdminUser model
   */
  interface AdminUserFieldRefs {
    readonly admin_user_id: FieldRef<"AdminUser", 'Int'>
    readonly first_name: FieldRef<"AdminUser", 'String'>
    readonly last_name: FieldRef<"AdminUser", 'String'>
    readonly email: FieldRef<"AdminUser", 'String'>
    readonly role: FieldRef<"AdminUser", 'Role'>
    readonly password_hash: FieldRef<"AdminUser", 'String'>
    readonly created_at: FieldRef<"AdminUser", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AdminUser findUnique
   */
  export type AdminUserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminUserInclude<ExtArgs> | null
    /**
     * Filter, which AdminUser to fetch.
     */
    where: AdminUserWhereUniqueInput
  }

  /**
   * AdminUser findUniqueOrThrow
   */
  export type AdminUserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminUserInclude<ExtArgs> | null
    /**
     * Filter, which AdminUser to fetch.
     */
    where: AdminUserWhereUniqueInput
  }

  /**
   * AdminUser findFirst
   */
  export type AdminUserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminUserInclude<ExtArgs> | null
    /**
     * Filter, which AdminUser to fetch.
     */
    where?: AdminUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminUsers to fetch.
     */
    orderBy?: AdminUserOrderByWithRelationInput | AdminUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AdminUsers.
     */
    cursor?: AdminUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdminUsers.
     */
    distinct?: AdminUserScalarFieldEnum | AdminUserScalarFieldEnum[]
  }

  /**
   * AdminUser findFirstOrThrow
   */
  export type AdminUserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminUserInclude<ExtArgs> | null
    /**
     * Filter, which AdminUser to fetch.
     */
    where?: AdminUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminUsers to fetch.
     */
    orderBy?: AdminUserOrderByWithRelationInput | AdminUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AdminUsers.
     */
    cursor?: AdminUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdminUsers.
     */
    distinct?: AdminUserScalarFieldEnum | AdminUserScalarFieldEnum[]
  }

  /**
   * AdminUser findMany
   */
  export type AdminUserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminUserInclude<ExtArgs> | null
    /**
     * Filter, which AdminUsers to fetch.
     */
    where?: AdminUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminUsers to fetch.
     */
    orderBy?: AdminUserOrderByWithRelationInput | AdminUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AdminUsers.
     */
    cursor?: AdminUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminUsers.
     */
    skip?: number
    distinct?: AdminUserScalarFieldEnum | AdminUserScalarFieldEnum[]
  }

  /**
   * AdminUser create
   */
  export type AdminUserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminUserInclude<ExtArgs> | null
    /**
     * The data needed to create a AdminUser.
     */
    data: XOR<AdminUserCreateInput, AdminUserUncheckedCreateInput>
  }

  /**
   * AdminUser createMany
   */
  export type AdminUserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AdminUsers.
     */
    data: AdminUserCreateManyInput | AdminUserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AdminUser update
   */
  export type AdminUserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminUserInclude<ExtArgs> | null
    /**
     * The data needed to update a AdminUser.
     */
    data: XOR<AdminUserUpdateInput, AdminUserUncheckedUpdateInput>
    /**
     * Choose, which AdminUser to update.
     */
    where: AdminUserWhereUniqueInput
  }

  /**
   * AdminUser updateMany
   */
  export type AdminUserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AdminUsers.
     */
    data: XOR<AdminUserUpdateManyMutationInput, AdminUserUncheckedUpdateManyInput>
    /**
     * Filter which AdminUsers to update
     */
    where?: AdminUserWhereInput
    /**
     * Limit how many AdminUsers to update.
     */
    limit?: number
  }

  /**
   * AdminUser upsert
   */
  export type AdminUserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminUserInclude<ExtArgs> | null
    /**
     * The filter to search for the AdminUser to update in case it exists.
     */
    where: AdminUserWhereUniqueInput
    /**
     * In case the AdminUser found by the `where` argument doesn't exist, create a new AdminUser with this data.
     */
    create: XOR<AdminUserCreateInput, AdminUserUncheckedCreateInput>
    /**
     * In case the AdminUser was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminUserUpdateInput, AdminUserUncheckedUpdateInput>
  }

  /**
   * AdminUser delete
   */
  export type AdminUserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminUserInclude<ExtArgs> | null
    /**
     * Filter which AdminUser to delete.
     */
    where: AdminUserWhereUniqueInput
  }

  /**
   * AdminUser deleteMany
   */
  export type AdminUserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AdminUsers to delete
     */
    where?: AdminUserWhereInput
    /**
     * Limit how many AdminUsers to delete.
     */
    limit?: number
  }

  /**
   * AdminUser.approved_status_updates
   */
  export type AdminUser$approved_status_updatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusUpdateRequests
     */
    select?: StatusUpdateRequestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StatusUpdateRequests
     */
    omit?: StatusUpdateRequestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusUpdateRequestsInclude<ExtArgs> | null
    where?: StatusUpdateRequestsWhereInput
    orderBy?: StatusUpdateRequestsOrderByWithRelationInput | StatusUpdateRequestsOrderByWithRelationInput[]
    cursor?: StatusUpdateRequestsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StatusUpdateRequestsScalarFieldEnum | StatusUpdateRequestsScalarFieldEnum[]
  }

  /**
   * AdminUser without action
   */
  export type AdminUserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminUserInclude<ExtArgs> | null
  }


  /**
   * Model Candidate
   */

  export type AggregateCandidate = {
    _count: CandidateCountAggregateOutputType | null
    _avg: CandidateAvgAggregateOutputType | null
    _sum: CandidateSumAggregateOutputType | null
    _min: CandidateMinAggregateOutputType | null
    _max: CandidateMaxAggregateOutputType | null
  }

  export type CandidateAvgAggregateOutputType = {
    candidate_id: number | null
    age: number | null
    experience_salary: number | null
    expected_salary: number | null
  }

  export type CandidateSumAggregateOutputType = {
    candidate_id: number | null
    age: number | null
    experience_salary: number | null
    expected_salary: number | null
  }

  export type CandidateMinAggregateOutputType = {
    candidate_id: number | null
    first_name: string | null
    last_name: string | null
    email: string | null
    phone: string | null
    gender: string | null
    age: number | null
    experience_salary: number | null
    expected_salary: number | null
    stack: string | null
    id_card: string | null
  }

  export type CandidateMaxAggregateOutputType = {
    candidate_id: number | null
    first_name: string | null
    last_name: string | null
    email: string | null
    phone: string | null
    gender: string | null
    age: number | null
    experience_salary: number | null
    expected_salary: number | null
    stack: string | null
    id_card: string | null
  }

  export type CandidateCountAggregateOutputType = {
    candidate_id: number
    first_name: number
    last_name: number
    email: number
    phone: number
    gender: number
    age: number
    experience_salary: number
    expected_salary: number
    stack: number
    id_card: number
    _all: number
  }


  export type CandidateAvgAggregateInputType = {
    candidate_id?: true
    age?: true
    experience_salary?: true
    expected_salary?: true
  }

  export type CandidateSumAggregateInputType = {
    candidate_id?: true
    age?: true
    experience_salary?: true
    expected_salary?: true
  }

  export type CandidateMinAggregateInputType = {
    candidate_id?: true
    first_name?: true
    last_name?: true
    email?: true
    phone?: true
    gender?: true
    age?: true
    experience_salary?: true
    expected_salary?: true
    stack?: true
    id_card?: true
  }

  export type CandidateMaxAggregateInputType = {
    candidate_id?: true
    first_name?: true
    last_name?: true
    email?: true
    phone?: true
    gender?: true
    age?: true
    experience_salary?: true
    expected_salary?: true
    stack?: true
    id_card?: true
  }

  export type CandidateCountAggregateInputType = {
    candidate_id?: true
    first_name?: true
    last_name?: true
    email?: true
    phone?: true
    gender?: true
    age?: true
    experience_salary?: true
    expected_salary?: true
    stack?: true
    id_card?: true
    _all?: true
  }

  export type CandidateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Candidate to aggregate.
     */
    where?: CandidateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Candidates to fetch.
     */
    orderBy?: CandidateOrderByWithRelationInput | CandidateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CandidateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Candidates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Candidates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Candidates
    **/
    _count?: true | CandidateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CandidateAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CandidateSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CandidateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CandidateMaxAggregateInputType
  }

  export type GetCandidateAggregateType<T extends CandidateAggregateArgs> = {
        [P in keyof T & keyof AggregateCandidate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCandidate[P]>
      : GetScalarType<T[P], AggregateCandidate[P]>
  }




  export type CandidateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CandidateWhereInput
    orderBy?: CandidateOrderByWithAggregationInput | CandidateOrderByWithAggregationInput[]
    by: CandidateScalarFieldEnum[] | CandidateScalarFieldEnum
    having?: CandidateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CandidateCountAggregateInputType | true
    _avg?: CandidateAvgAggregateInputType
    _sum?: CandidateSumAggregateInputType
    _min?: CandidateMinAggregateInputType
    _max?: CandidateMaxAggregateInputType
  }

  export type CandidateGroupByOutputType = {
    candidate_id: number
    first_name: string
    last_name: string
    email: string
    phone: string | null
    gender: string | null
    age: number | null
    experience_salary: number | null
    expected_salary: number | null
    stack: string | null
    id_card: string | null
    _count: CandidateCountAggregateOutputType | null
    _avg: CandidateAvgAggregateOutputType | null
    _sum: CandidateSumAggregateOutputType | null
    _min: CandidateMinAggregateOutputType | null
    _max: CandidateMaxAggregateOutputType | null
  }

  type GetCandidateGroupByPayload<T extends CandidateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CandidateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CandidateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CandidateGroupByOutputType[P]>
            : GetScalarType<T[P], CandidateGroupByOutputType[P]>
        }
      >
    >


  export type CandidateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    candidate_id?: boolean
    first_name?: boolean
    last_name?: boolean
    email?: boolean
    phone?: boolean
    gender?: boolean
    age?: boolean
    experience_salary?: boolean
    expected_salary?: boolean
    stack?: boolean
    id_card?: boolean
    tests?: boolean | Candidate$testsArgs<ExtArgs>
    candidate_statuses?: boolean | Candidate$candidate_statusesArgs<ExtArgs>
    documents?: boolean | Candidate$documentsArgs<ExtArgs>
    addresses?: boolean | Candidate$addressesArgs<ExtArgs>
    _count?: boolean | CandidateCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["candidate"]>



  export type CandidateSelectScalar = {
    candidate_id?: boolean
    first_name?: boolean
    last_name?: boolean
    email?: boolean
    phone?: boolean
    gender?: boolean
    age?: boolean
    experience_salary?: boolean
    expected_salary?: boolean
    stack?: boolean
    id_card?: boolean
  }

  export type CandidateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"candidate_id" | "first_name" | "last_name" | "email" | "phone" | "gender" | "age" | "experience_salary" | "expected_salary" | "stack" | "id_card", ExtArgs["result"]["candidate"]>
  export type CandidateInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tests?: boolean | Candidate$testsArgs<ExtArgs>
    candidate_statuses?: boolean | Candidate$candidate_statusesArgs<ExtArgs>
    documents?: boolean | Candidate$documentsArgs<ExtArgs>
    addresses?: boolean | Candidate$addressesArgs<ExtArgs>
    _count?: boolean | CandidateCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $CandidatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Candidate"
    objects: {
      tests: Prisma.$TestPayload<ExtArgs>[]
      candidate_statuses: Prisma.$CandidateStatusPayload<ExtArgs>[]
      documents: Prisma.$DocumentPayload<ExtArgs>[]
      addresses: Prisma.$AddressPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      candidate_id: number
      first_name: string
      last_name: string
      email: string
      phone: string | null
      gender: string | null
      age: number | null
      experience_salary: number | null
      expected_salary: number | null
      stack: string | null
      id_card: string | null
    }, ExtArgs["result"]["candidate"]>
    composites: {}
  }

  type CandidateGetPayload<S extends boolean | null | undefined | CandidateDefaultArgs> = $Result.GetResult<Prisma.$CandidatePayload, S>

  type CandidateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CandidateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CandidateCountAggregateInputType | true
    }

  export interface CandidateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Candidate'], meta: { name: 'Candidate' } }
    /**
     * Find zero or one Candidate that matches the filter.
     * @param {CandidateFindUniqueArgs} args - Arguments to find a Candidate
     * @example
     * // Get one Candidate
     * const candidate = await prisma.candidate.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CandidateFindUniqueArgs>(args: SelectSubset<T, CandidateFindUniqueArgs<ExtArgs>>): Prisma__CandidateClient<$Result.GetResult<Prisma.$CandidatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Candidate that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CandidateFindUniqueOrThrowArgs} args - Arguments to find a Candidate
     * @example
     * // Get one Candidate
     * const candidate = await prisma.candidate.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CandidateFindUniqueOrThrowArgs>(args: SelectSubset<T, CandidateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CandidateClient<$Result.GetResult<Prisma.$CandidatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Candidate that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidateFindFirstArgs} args - Arguments to find a Candidate
     * @example
     * // Get one Candidate
     * const candidate = await prisma.candidate.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CandidateFindFirstArgs>(args?: SelectSubset<T, CandidateFindFirstArgs<ExtArgs>>): Prisma__CandidateClient<$Result.GetResult<Prisma.$CandidatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Candidate that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidateFindFirstOrThrowArgs} args - Arguments to find a Candidate
     * @example
     * // Get one Candidate
     * const candidate = await prisma.candidate.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CandidateFindFirstOrThrowArgs>(args?: SelectSubset<T, CandidateFindFirstOrThrowArgs<ExtArgs>>): Prisma__CandidateClient<$Result.GetResult<Prisma.$CandidatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Candidates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Candidates
     * const candidates = await prisma.candidate.findMany()
     * 
     * // Get first 10 Candidates
     * const candidates = await prisma.candidate.findMany({ take: 10 })
     * 
     * // Only select the `candidate_id`
     * const candidateWithCandidate_idOnly = await prisma.candidate.findMany({ select: { candidate_id: true } })
     * 
     */
    findMany<T extends CandidateFindManyArgs>(args?: SelectSubset<T, CandidateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CandidatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Candidate.
     * @param {CandidateCreateArgs} args - Arguments to create a Candidate.
     * @example
     * // Create one Candidate
     * const Candidate = await prisma.candidate.create({
     *   data: {
     *     // ... data to create a Candidate
     *   }
     * })
     * 
     */
    create<T extends CandidateCreateArgs>(args: SelectSubset<T, CandidateCreateArgs<ExtArgs>>): Prisma__CandidateClient<$Result.GetResult<Prisma.$CandidatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Candidates.
     * @param {CandidateCreateManyArgs} args - Arguments to create many Candidates.
     * @example
     * // Create many Candidates
     * const candidate = await prisma.candidate.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CandidateCreateManyArgs>(args?: SelectSubset<T, CandidateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Candidate.
     * @param {CandidateDeleteArgs} args - Arguments to delete one Candidate.
     * @example
     * // Delete one Candidate
     * const Candidate = await prisma.candidate.delete({
     *   where: {
     *     // ... filter to delete one Candidate
     *   }
     * })
     * 
     */
    delete<T extends CandidateDeleteArgs>(args: SelectSubset<T, CandidateDeleteArgs<ExtArgs>>): Prisma__CandidateClient<$Result.GetResult<Prisma.$CandidatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Candidate.
     * @param {CandidateUpdateArgs} args - Arguments to update one Candidate.
     * @example
     * // Update one Candidate
     * const candidate = await prisma.candidate.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CandidateUpdateArgs>(args: SelectSubset<T, CandidateUpdateArgs<ExtArgs>>): Prisma__CandidateClient<$Result.GetResult<Prisma.$CandidatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Candidates.
     * @param {CandidateDeleteManyArgs} args - Arguments to filter Candidates to delete.
     * @example
     * // Delete a few Candidates
     * const { count } = await prisma.candidate.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CandidateDeleteManyArgs>(args?: SelectSubset<T, CandidateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Candidates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Candidates
     * const candidate = await prisma.candidate.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CandidateUpdateManyArgs>(args: SelectSubset<T, CandidateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Candidate.
     * @param {CandidateUpsertArgs} args - Arguments to update or create a Candidate.
     * @example
     * // Update or create a Candidate
     * const candidate = await prisma.candidate.upsert({
     *   create: {
     *     // ... data to create a Candidate
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Candidate we want to update
     *   }
     * })
     */
    upsert<T extends CandidateUpsertArgs>(args: SelectSubset<T, CandidateUpsertArgs<ExtArgs>>): Prisma__CandidateClient<$Result.GetResult<Prisma.$CandidatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Candidates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidateCountArgs} args - Arguments to filter Candidates to count.
     * @example
     * // Count the number of Candidates
     * const count = await prisma.candidate.count({
     *   where: {
     *     // ... the filter for the Candidates we want to count
     *   }
     * })
    **/
    count<T extends CandidateCountArgs>(
      args?: Subset<T, CandidateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CandidateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Candidate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CandidateAggregateArgs>(args: Subset<T, CandidateAggregateArgs>): Prisma.PrismaPromise<GetCandidateAggregateType<T>>

    /**
     * Group by Candidate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidateGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CandidateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CandidateGroupByArgs['orderBy'] }
        : { orderBy?: CandidateGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CandidateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCandidateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Candidate model
   */
  readonly fields: CandidateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Candidate.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CandidateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tests<T extends Candidate$testsArgs<ExtArgs> = {}>(args?: Subset<T, Candidate$testsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    candidate_statuses<T extends Candidate$candidate_statusesArgs<ExtArgs> = {}>(args?: Subset<T, Candidate$candidate_statusesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CandidateStatusPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    documents<T extends Candidate$documentsArgs<ExtArgs> = {}>(args?: Subset<T, Candidate$documentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    addresses<T extends Candidate$addressesArgs<ExtArgs> = {}>(args?: Subset<T, Candidate$addressesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Candidate model
   */
  interface CandidateFieldRefs {
    readonly candidate_id: FieldRef<"Candidate", 'Int'>
    readonly first_name: FieldRef<"Candidate", 'String'>
    readonly last_name: FieldRef<"Candidate", 'String'>
    readonly email: FieldRef<"Candidate", 'String'>
    readonly phone: FieldRef<"Candidate", 'String'>
    readonly gender: FieldRef<"Candidate", 'String'>
    readonly age: FieldRef<"Candidate", 'Int'>
    readonly experience_salary: FieldRef<"Candidate", 'Int'>
    readonly expected_salary: FieldRef<"Candidate", 'Int'>
    readonly stack: FieldRef<"Candidate", 'String'>
    readonly id_card: FieldRef<"Candidate", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Candidate findUnique
   */
  export type CandidateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidate
     */
    select?: CandidateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Candidate
     */
    omit?: CandidateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateInclude<ExtArgs> | null
    /**
     * Filter, which Candidate to fetch.
     */
    where: CandidateWhereUniqueInput
  }

  /**
   * Candidate findUniqueOrThrow
   */
  export type CandidateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidate
     */
    select?: CandidateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Candidate
     */
    omit?: CandidateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateInclude<ExtArgs> | null
    /**
     * Filter, which Candidate to fetch.
     */
    where: CandidateWhereUniqueInput
  }

  /**
   * Candidate findFirst
   */
  export type CandidateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidate
     */
    select?: CandidateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Candidate
     */
    omit?: CandidateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateInclude<ExtArgs> | null
    /**
     * Filter, which Candidate to fetch.
     */
    where?: CandidateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Candidates to fetch.
     */
    orderBy?: CandidateOrderByWithRelationInput | CandidateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Candidates.
     */
    cursor?: CandidateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Candidates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Candidates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Candidates.
     */
    distinct?: CandidateScalarFieldEnum | CandidateScalarFieldEnum[]
  }

  /**
   * Candidate findFirstOrThrow
   */
  export type CandidateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidate
     */
    select?: CandidateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Candidate
     */
    omit?: CandidateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateInclude<ExtArgs> | null
    /**
     * Filter, which Candidate to fetch.
     */
    where?: CandidateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Candidates to fetch.
     */
    orderBy?: CandidateOrderByWithRelationInput | CandidateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Candidates.
     */
    cursor?: CandidateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Candidates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Candidates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Candidates.
     */
    distinct?: CandidateScalarFieldEnum | CandidateScalarFieldEnum[]
  }

  /**
   * Candidate findMany
   */
  export type CandidateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidate
     */
    select?: CandidateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Candidate
     */
    omit?: CandidateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateInclude<ExtArgs> | null
    /**
     * Filter, which Candidates to fetch.
     */
    where?: CandidateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Candidates to fetch.
     */
    orderBy?: CandidateOrderByWithRelationInput | CandidateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Candidates.
     */
    cursor?: CandidateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Candidates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Candidates.
     */
    skip?: number
    distinct?: CandidateScalarFieldEnum | CandidateScalarFieldEnum[]
  }

  /**
   * Candidate create
   */
  export type CandidateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidate
     */
    select?: CandidateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Candidate
     */
    omit?: CandidateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateInclude<ExtArgs> | null
    /**
     * The data needed to create a Candidate.
     */
    data: XOR<CandidateCreateInput, CandidateUncheckedCreateInput>
  }

  /**
   * Candidate createMany
   */
  export type CandidateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Candidates.
     */
    data: CandidateCreateManyInput | CandidateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Candidate update
   */
  export type CandidateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidate
     */
    select?: CandidateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Candidate
     */
    omit?: CandidateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateInclude<ExtArgs> | null
    /**
     * The data needed to update a Candidate.
     */
    data: XOR<CandidateUpdateInput, CandidateUncheckedUpdateInput>
    /**
     * Choose, which Candidate to update.
     */
    where: CandidateWhereUniqueInput
  }

  /**
   * Candidate updateMany
   */
  export type CandidateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Candidates.
     */
    data: XOR<CandidateUpdateManyMutationInput, CandidateUncheckedUpdateManyInput>
    /**
     * Filter which Candidates to update
     */
    where?: CandidateWhereInput
    /**
     * Limit how many Candidates to update.
     */
    limit?: number
  }

  /**
   * Candidate upsert
   */
  export type CandidateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidate
     */
    select?: CandidateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Candidate
     */
    omit?: CandidateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateInclude<ExtArgs> | null
    /**
     * The filter to search for the Candidate to update in case it exists.
     */
    where: CandidateWhereUniqueInput
    /**
     * In case the Candidate found by the `where` argument doesn't exist, create a new Candidate with this data.
     */
    create: XOR<CandidateCreateInput, CandidateUncheckedCreateInput>
    /**
     * In case the Candidate was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CandidateUpdateInput, CandidateUncheckedUpdateInput>
  }

  /**
   * Candidate delete
   */
  export type CandidateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidate
     */
    select?: CandidateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Candidate
     */
    omit?: CandidateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateInclude<ExtArgs> | null
    /**
     * Filter which Candidate to delete.
     */
    where: CandidateWhereUniqueInput
  }

  /**
   * Candidate deleteMany
   */
  export type CandidateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Candidates to delete
     */
    where?: CandidateWhereInput
    /**
     * Limit how many Candidates to delete.
     */
    limit?: number
  }

  /**
   * Candidate.tests
   */
  export type Candidate$testsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Test
     */
    omit?: TestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestInclude<ExtArgs> | null
    where?: TestWhereInput
    orderBy?: TestOrderByWithRelationInput | TestOrderByWithRelationInput[]
    cursor?: TestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TestScalarFieldEnum | TestScalarFieldEnum[]
  }

  /**
   * Candidate.candidate_statuses
   */
  export type Candidate$candidate_statusesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateStatus
     */
    select?: CandidateStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CandidateStatus
     */
    omit?: CandidateStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateStatusInclude<ExtArgs> | null
    where?: CandidateStatusWhereInput
    orderBy?: CandidateStatusOrderByWithRelationInput | CandidateStatusOrderByWithRelationInput[]
    cursor?: CandidateStatusWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CandidateStatusScalarFieldEnum | CandidateStatusScalarFieldEnum[]
  }

  /**
   * Candidate.documents
   */
  export type Candidate$documentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    where?: DocumentWhereInput
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    cursor?: DocumentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * Candidate.addresses
   */
  export type Candidate$addressesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    where?: AddressWhereInput
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    cursor?: AddressWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }

  /**
   * Candidate without action
   */
  export type CandidateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidate
     */
    select?: CandidateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Candidate
     */
    omit?: CandidateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateInclude<ExtArgs> | null
  }


  /**
   * Model Address
   */

  export type AggregateAddress = {
    _count: AddressCountAggregateOutputType | null
    _avg: AddressAvgAggregateOutputType | null
    _sum: AddressSumAggregateOutputType | null
    _min: AddressMinAggregateOutputType | null
    _max: AddressMaxAggregateOutputType | null
  }

  export type AddressAvgAggregateOutputType = {
    address_id: number | null
    candidate_id: number | null
  }

  export type AddressSumAggregateOutputType = {
    address_id: number | null
    candidate_id: number | null
  }

  export type AddressMinAggregateOutputType = {
    address_id: number | null
    candidate_id: number | null
    address_line1: string | null
    address_line2: string | null
    city: string | null
    state: string | null
    postal_code: string | null
    country: string | null
    address_type: $Enums.AddressType | null
    is_current: boolean | null
  }

  export type AddressMaxAggregateOutputType = {
    address_id: number | null
    candidate_id: number | null
    address_line1: string | null
    address_line2: string | null
    city: string | null
    state: string | null
    postal_code: string | null
    country: string | null
    address_type: $Enums.AddressType | null
    is_current: boolean | null
  }

  export type AddressCountAggregateOutputType = {
    address_id: number
    candidate_id: number
    address_line1: number
    address_line2: number
    city: number
    state: number
    postal_code: number
    country: number
    address_type: number
    is_current: number
    _all: number
  }


  export type AddressAvgAggregateInputType = {
    address_id?: true
    candidate_id?: true
  }

  export type AddressSumAggregateInputType = {
    address_id?: true
    candidate_id?: true
  }

  export type AddressMinAggregateInputType = {
    address_id?: true
    candidate_id?: true
    address_line1?: true
    address_line2?: true
    city?: true
    state?: true
    postal_code?: true
    country?: true
    address_type?: true
    is_current?: true
  }

  export type AddressMaxAggregateInputType = {
    address_id?: true
    candidate_id?: true
    address_line1?: true
    address_line2?: true
    city?: true
    state?: true
    postal_code?: true
    country?: true
    address_type?: true
    is_current?: true
  }

  export type AddressCountAggregateInputType = {
    address_id?: true
    candidate_id?: true
    address_line1?: true
    address_line2?: true
    city?: true
    state?: true
    postal_code?: true
    country?: true
    address_type?: true
    is_current?: true
    _all?: true
  }

  export type AddressAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Address to aggregate.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Addresses
    **/
    _count?: true | AddressCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AddressAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AddressSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AddressMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AddressMaxAggregateInputType
  }

  export type GetAddressAggregateType<T extends AddressAggregateArgs> = {
        [P in keyof T & keyof AggregateAddress]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAddress[P]>
      : GetScalarType<T[P], AggregateAddress[P]>
  }




  export type AddressGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AddressWhereInput
    orderBy?: AddressOrderByWithAggregationInput | AddressOrderByWithAggregationInput[]
    by: AddressScalarFieldEnum[] | AddressScalarFieldEnum
    having?: AddressScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AddressCountAggregateInputType | true
    _avg?: AddressAvgAggregateInputType
    _sum?: AddressSumAggregateInputType
    _min?: AddressMinAggregateInputType
    _max?: AddressMaxAggregateInputType
  }

  export type AddressGroupByOutputType = {
    address_id: number
    candidate_id: number
    address_line1: string
    address_line2: string | null
    city: string
    state: string | null
    postal_code: string
    country: string
    address_type: $Enums.AddressType
    is_current: boolean
    _count: AddressCountAggregateOutputType | null
    _avg: AddressAvgAggregateOutputType | null
    _sum: AddressSumAggregateOutputType | null
    _min: AddressMinAggregateOutputType | null
    _max: AddressMaxAggregateOutputType | null
  }

  type GetAddressGroupByPayload<T extends AddressGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AddressGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AddressGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AddressGroupByOutputType[P]>
            : GetScalarType<T[P], AddressGroupByOutputType[P]>
        }
      >
    >


  export type AddressSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    address_id?: boolean
    candidate_id?: boolean
    address_line1?: boolean
    address_line2?: boolean
    city?: boolean
    state?: boolean
    postal_code?: boolean
    country?: boolean
    address_type?: boolean
    is_current?: boolean
    candidate?: boolean | CandidateDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["address"]>



  export type AddressSelectScalar = {
    address_id?: boolean
    candidate_id?: boolean
    address_line1?: boolean
    address_line2?: boolean
    city?: boolean
    state?: boolean
    postal_code?: boolean
    country?: boolean
    address_type?: boolean
    is_current?: boolean
  }

  export type AddressOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"address_id" | "candidate_id" | "address_line1" | "address_line2" | "city" | "state" | "postal_code" | "country" | "address_type" | "is_current", ExtArgs["result"]["address"]>
  export type AddressInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    candidate?: boolean | CandidateDefaultArgs<ExtArgs>
  }

  export type $AddressPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Address"
    objects: {
      candidate: Prisma.$CandidatePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      address_id: number
      candidate_id: number
      address_line1: string
      address_line2: string | null
      city: string
      state: string | null
      postal_code: string
      country: string
      address_type: $Enums.AddressType
      is_current: boolean
    }, ExtArgs["result"]["address"]>
    composites: {}
  }

  type AddressGetPayload<S extends boolean | null | undefined | AddressDefaultArgs> = $Result.GetResult<Prisma.$AddressPayload, S>

  type AddressCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AddressFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AddressCountAggregateInputType | true
    }

  export interface AddressDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Address'], meta: { name: 'Address' } }
    /**
     * Find zero or one Address that matches the filter.
     * @param {AddressFindUniqueArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AddressFindUniqueArgs>(args: SelectSubset<T, AddressFindUniqueArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Address that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AddressFindUniqueOrThrowArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AddressFindUniqueOrThrowArgs>(args: SelectSubset<T, AddressFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Address that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressFindFirstArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AddressFindFirstArgs>(args?: SelectSubset<T, AddressFindFirstArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Address that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressFindFirstOrThrowArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AddressFindFirstOrThrowArgs>(args?: SelectSubset<T, AddressFindFirstOrThrowArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Addresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Addresses
     * const addresses = await prisma.address.findMany()
     * 
     * // Get first 10 Addresses
     * const addresses = await prisma.address.findMany({ take: 10 })
     * 
     * // Only select the `address_id`
     * const addressWithAddress_idOnly = await prisma.address.findMany({ select: { address_id: true } })
     * 
     */
    findMany<T extends AddressFindManyArgs>(args?: SelectSubset<T, AddressFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Address.
     * @param {AddressCreateArgs} args - Arguments to create a Address.
     * @example
     * // Create one Address
     * const Address = await prisma.address.create({
     *   data: {
     *     // ... data to create a Address
     *   }
     * })
     * 
     */
    create<T extends AddressCreateArgs>(args: SelectSubset<T, AddressCreateArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Addresses.
     * @param {AddressCreateManyArgs} args - Arguments to create many Addresses.
     * @example
     * // Create many Addresses
     * const address = await prisma.address.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AddressCreateManyArgs>(args?: SelectSubset<T, AddressCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Address.
     * @param {AddressDeleteArgs} args - Arguments to delete one Address.
     * @example
     * // Delete one Address
     * const Address = await prisma.address.delete({
     *   where: {
     *     // ... filter to delete one Address
     *   }
     * })
     * 
     */
    delete<T extends AddressDeleteArgs>(args: SelectSubset<T, AddressDeleteArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Address.
     * @param {AddressUpdateArgs} args - Arguments to update one Address.
     * @example
     * // Update one Address
     * const address = await prisma.address.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AddressUpdateArgs>(args: SelectSubset<T, AddressUpdateArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Addresses.
     * @param {AddressDeleteManyArgs} args - Arguments to filter Addresses to delete.
     * @example
     * // Delete a few Addresses
     * const { count } = await prisma.address.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AddressDeleteManyArgs>(args?: SelectSubset<T, AddressDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Addresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Addresses
     * const address = await prisma.address.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AddressUpdateManyArgs>(args: SelectSubset<T, AddressUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Address.
     * @param {AddressUpsertArgs} args - Arguments to update or create a Address.
     * @example
     * // Update or create a Address
     * const address = await prisma.address.upsert({
     *   create: {
     *     // ... data to create a Address
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Address we want to update
     *   }
     * })
     */
    upsert<T extends AddressUpsertArgs>(args: SelectSubset<T, AddressUpsertArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Addresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressCountArgs} args - Arguments to filter Addresses to count.
     * @example
     * // Count the number of Addresses
     * const count = await prisma.address.count({
     *   where: {
     *     // ... the filter for the Addresses we want to count
     *   }
     * })
    **/
    count<T extends AddressCountArgs>(
      args?: Subset<T, AddressCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AddressCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Address.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AddressAggregateArgs>(args: Subset<T, AddressAggregateArgs>): Prisma.PrismaPromise<GetAddressAggregateType<T>>

    /**
     * Group by Address.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AddressGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AddressGroupByArgs['orderBy'] }
        : { orderBy?: AddressGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AddressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAddressGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Address model
   */
  readonly fields: AddressFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Address.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AddressClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    candidate<T extends CandidateDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CandidateDefaultArgs<ExtArgs>>): Prisma__CandidateClient<$Result.GetResult<Prisma.$CandidatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Address model
   */
  interface AddressFieldRefs {
    readonly address_id: FieldRef<"Address", 'Int'>
    readonly candidate_id: FieldRef<"Address", 'Int'>
    readonly address_line1: FieldRef<"Address", 'String'>
    readonly address_line2: FieldRef<"Address", 'String'>
    readonly city: FieldRef<"Address", 'String'>
    readonly state: FieldRef<"Address", 'String'>
    readonly postal_code: FieldRef<"Address", 'String'>
    readonly country: FieldRef<"Address", 'String'>
    readonly address_type: FieldRef<"Address", 'AddressType'>
    readonly is_current: FieldRef<"Address", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Address findUnique
   */
  export type AddressFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address findUniqueOrThrow
   */
  export type AddressFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address findFirst
   */
  export type AddressFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Addresses.
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Addresses.
     */
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }

  /**
   * Address findFirstOrThrow
   */
  export type AddressFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Addresses.
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Addresses.
     */
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }

  /**
   * Address findMany
   */
  export type AddressFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Addresses to fetch.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Addresses.
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }

  /**
   * Address create
   */
  export type AddressCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * The data needed to create a Address.
     */
    data: XOR<AddressCreateInput, AddressUncheckedCreateInput>
  }

  /**
   * Address createMany
   */
  export type AddressCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Addresses.
     */
    data: AddressCreateManyInput | AddressCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Address update
   */
  export type AddressUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * The data needed to update a Address.
     */
    data: XOR<AddressUpdateInput, AddressUncheckedUpdateInput>
    /**
     * Choose, which Address to update.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address updateMany
   */
  export type AddressUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Addresses.
     */
    data: XOR<AddressUpdateManyMutationInput, AddressUncheckedUpdateManyInput>
    /**
     * Filter which Addresses to update
     */
    where?: AddressWhereInput
    /**
     * Limit how many Addresses to update.
     */
    limit?: number
  }

  /**
   * Address upsert
   */
  export type AddressUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * The filter to search for the Address to update in case it exists.
     */
    where: AddressWhereUniqueInput
    /**
     * In case the Address found by the `where` argument doesn't exist, create a new Address with this data.
     */
    create: XOR<AddressCreateInput, AddressUncheckedCreateInput>
    /**
     * In case the Address was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AddressUpdateInput, AddressUncheckedUpdateInput>
  }

  /**
   * Address delete
   */
  export type AddressDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter which Address to delete.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address deleteMany
   */
  export type AddressDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Addresses to delete
     */
    where?: AddressWhereInput
    /**
     * Limit how many Addresses to delete.
     */
    limit?: number
  }

  /**
   * Address without action
   */
  export type AddressDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
  }


  /**
   * Model CandidateStatus
   */

  export type AggregateCandidateStatus = {
    _count: CandidateStatusCountAggregateOutputType | null
    _avg: CandidateStatusAvgAggregateOutputType | null
    _sum: CandidateStatusSumAggregateOutputType | null
    _min: CandidateStatusMinAggregateOutputType | null
    _max: CandidateStatusMaxAggregateOutputType | null
  }

  export type CandidateStatusAvgAggregateOutputType = {
    candidate_status_id: number | null
    candidate_id: number | null
    updated_by: number | null
  }

  export type CandidateStatusSumAggregateOutputType = {
    candidate_status_id: number | null
    candidate_id: number | null
    updated_by: number | null
  }

  export type CandidateStatusMinAggregateOutputType = {
    candidate_status_id: number | null
    candidate_id: number | null
    status: $Enums.CandidateStatusEnum | null
    updated_by: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type CandidateStatusMaxAggregateOutputType = {
    candidate_status_id: number | null
    candidate_id: number | null
    status: $Enums.CandidateStatusEnum | null
    updated_by: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type CandidateStatusCountAggregateOutputType = {
    candidate_status_id: number
    candidate_id: number
    status: number
    updated_by: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type CandidateStatusAvgAggregateInputType = {
    candidate_status_id?: true
    candidate_id?: true
    updated_by?: true
  }

  export type CandidateStatusSumAggregateInputType = {
    candidate_status_id?: true
    candidate_id?: true
    updated_by?: true
  }

  export type CandidateStatusMinAggregateInputType = {
    candidate_status_id?: true
    candidate_id?: true
    status?: true
    updated_by?: true
    created_at?: true
    updated_at?: true
  }

  export type CandidateStatusMaxAggregateInputType = {
    candidate_status_id?: true
    candidate_id?: true
    status?: true
    updated_by?: true
    created_at?: true
    updated_at?: true
  }

  export type CandidateStatusCountAggregateInputType = {
    candidate_status_id?: true
    candidate_id?: true
    status?: true
    updated_by?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type CandidateStatusAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CandidateStatus to aggregate.
     */
    where?: CandidateStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CandidateStatuses to fetch.
     */
    orderBy?: CandidateStatusOrderByWithRelationInput | CandidateStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CandidateStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CandidateStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CandidateStatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CandidateStatuses
    **/
    _count?: true | CandidateStatusCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CandidateStatusAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CandidateStatusSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CandidateStatusMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CandidateStatusMaxAggregateInputType
  }

  export type GetCandidateStatusAggregateType<T extends CandidateStatusAggregateArgs> = {
        [P in keyof T & keyof AggregateCandidateStatus]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCandidateStatus[P]>
      : GetScalarType<T[P], AggregateCandidateStatus[P]>
  }




  export type CandidateStatusGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CandidateStatusWhereInput
    orderBy?: CandidateStatusOrderByWithAggregationInput | CandidateStatusOrderByWithAggregationInput[]
    by: CandidateStatusScalarFieldEnum[] | CandidateStatusScalarFieldEnum
    having?: CandidateStatusScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CandidateStatusCountAggregateInputType | true
    _avg?: CandidateStatusAvgAggregateInputType
    _sum?: CandidateStatusSumAggregateInputType
    _min?: CandidateStatusMinAggregateInputType
    _max?: CandidateStatusMaxAggregateInputType
  }

  export type CandidateStatusGroupByOutputType = {
    candidate_status_id: number
    candidate_id: number
    status: $Enums.CandidateStatusEnum
    updated_by: number | null
    created_at: Date
    updated_at: Date
    _count: CandidateStatusCountAggregateOutputType | null
    _avg: CandidateStatusAvgAggregateOutputType | null
    _sum: CandidateStatusSumAggregateOutputType | null
    _min: CandidateStatusMinAggregateOutputType | null
    _max: CandidateStatusMaxAggregateOutputType | null
  }

  type GetCandidateStatusGroupByPayload<T extends CandidateStatusGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CandidateStatusGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CandidateStatusGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CandidateStatusGroupByOutputType[P]>
            : GetScalarType<T[P], CandidateStatusGroupByOutputType[P]>
        }
      >
    >


  export type CandidateStatusSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    candidate_status_id?: boolean
    candidate_id?: boolean
    status?: boolean
    updated_by?: boolean
    created_at?: boolean
    updated_at?: boolean
    candidate?: boolean | CandidateDefaultArgs<ExtArgs>
    status_update_requests?: boolean | CandidateStatus$status_update_requestsArgs<ExtArgs>
    _count?: boolean | CandidateStatusCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["candidateStatus"]>



  export type CandidateStatusSelectScalar = {
    candidate_status_id?: boolean
    candidate_id?: boolean
    status?: boolean
    updated_by?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type CandidateStatusOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"candidate_status_id" | "candidate_id" | "status" | "updated_by" | "created_at" | "updated_at", ExtArgs["result"]["candidateStatus"]>
  export type CandidateStatusInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    candidate?: boolean | CandidateDefaultArgs<ExtArgs>
    status_update_requests?: boolean | CandidateStatus$status_update_requestsArgs<ExtArgs>
    _count?: boolean | CandidateStatusCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $CandidateStatusPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CandidateStatus"
    objects: {
      candidate: Prisma.$CandidatePayload<ExtArgs>
      status_update_requests: Prisma.$StatusUpdateRequestsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      candidate_status_id: number
      candidate_id: number
      status: $Enums.CandidateStatusEnum
      updated_by: number | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["candidateStatus"]>
    composites: {}
  }

  type CandidateStatusGetPayload<S extends boolean | null | undefined | CandidateStatusDefaultArgs> = $Result.GetResult<Prisma.$CandidateStatusPayload, S>

  type CandidateStatusCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CandidateStatusFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CandidateStatusCountAggregateInputType | true
    }

  export interface CandidateStatusDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CandidateStatus'], meta: { name: 'CandidateStatus' } }
    /**
     * Find zero or one CandidateStatus that matches the filter.
     * @param {CandidateStatusFindUniqueArgs} args - Arguments to find a CandidateStatus
     * @example
     * // Get one CandidateStatus
     * const candidateStatus = await prisma.candidateStatus.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CandidateStatusFindUniqueArgs>(args: SelectSubset<T, CandidateStatusFindUniqueArgs<ExtArgs>>): Prisma__CandidateStatusClient<$Result.GetResult<Prisma.$CandidateStatusPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CandidateStatus that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CandidateStatusFindUniqueOrThrowArgs} args - Arguments to find a CandidateStatus
     * @example
     * // Get one CandidateStatus
     * const candidateStatus = await prisma.candidateStatus.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CandidateStatusFindUniqueOrThrowArgs>(args: SelectSubset<T, CandidateStatusFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CandidateStatusClient<$Result.GetResult<Prisma.$CandidateStatusPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CandidateStatus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidateStatusFindFirstArgs} args - Arguments to find a CandidateStatus
     * @example
     * // Get one CandidateStatus
     * const candidateStatus = await prisma.candidateStatus.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CandidateStatusFindFirstArgs>(args?: SelectSubset<T, CandidateStatusFindFirstArgs<ExtArgs>>): Prisma__CandidateStatusClient<$Result.GetResult<Prisma.$CandidateStatusPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CandidateStatus that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidateStatusFindFirstOrThrowArgs} args - Arguments to find a CandidateStatus
     * @example
     * // Get one CandidateStatus
     * const candidateStatus = await prisma.candidateStatus.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CandidateStatusFindFirstOrThrowArgs>(args?: SelectSubset<T, CandidateStatusFindFirstOrThrowArgs<ExtArgs>>): Prisma__CandidateStatusClient<$Result.GetResult<Prisma.$CandidateStatusPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CandidateStatuses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidateStatusFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CandidateStatuses
     * const candidateStatuses = await prisma.candidateStatus.findMany()
     * 
     * // Get first 10 CandidateStatuses
     * const candidateStatuses = await prisma.candidateStatus.findMany({ take: 10 })
     * 
     * // Only select the `candidate_status_id`
     * const candidateStatusWithCandidate_status_idOnly = await prisma.candidateStatus.findMany({ select: { candidate_status_id: true } })
     * 
     */
    findMany<T extends CandidateStatusFindManyArgs>(args?: SelectSubset<T, CandidateStatusFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CandidateStatusPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CandidateStatus.
     * @param {CandidateStatusCreateArgs} args - Arguments to create a CandidateStatus.
     * @example
     * // Create one CandidateStatus
     * const CandidateStatus = await prisma.candidateStatus.create({
     *   data: {
     *     // ... data to create a CandidateStatus
     *   }
     * })
     * 
     */
    create<T extends CandidateStatusCreateArgs>(args: SelectSubset<T, CandidateStatusCreateArgs<ExtArgs>>): Prisma__CandidateStatusClient<$Result.GetResult<Prisma.$CandidateStatusPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CandidateStatuses.
     * @param {CandidateStatusCreateManyArgs} args - Arguments to create many CandidateStatuses.
     * @example
     * // Create many CandidateStatuses
     * const candidateStatus = await prisma.candidateStatus.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CandidateStatusCreateManyArgs>(args?: SelectSubset<T, CandidateStatusCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a CandidateStatus.
     * @param {CandidateStatusDeleteArgs} args - Arguments to delete one CandidateStatus.
     * @example
     * // Delete one CandidateStatus
     * const CandidateStatus = await prisma.candidateStatus.delete({
     *   where: {
     *     // ... filter to delete one CandidateStatus
     *   }
     * })
     * 
     */
    delete<T extends CandidateStatusDeleteArgs>(args: SelectSubset<T, CandidateStatusDeleteArgs<ExtArgs>>): Prisma__CandidateStatusClient<$Result.GetResult<Prisma.$CandidateStatusPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CandidateStatus.
     * @param {CandidateStatusUpdateArgs} args - Arguments to update one CandidateStatus.
     * @example
     * // Update one CandidateStatus
     * const candidateStatus = await prisma.candidateStatus.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CandidateStatusUpdateArgs>(args: SelectSubset<T, CandidateStatusUpdateArgs<ExtArgs>>): Prisma__CandidateStatusClient<$Result.GetResult<Prisma.$CandidateStatusPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CandidateStatuses.
     * @param {CandidateStatusDeleteManyArgs} args - Arguments to filter CandidateStatuses to delete.
     * @example
     * // Delete a few CandidateStatuses
     * const { count } = await prisma.candidateStatus.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CandidateStatusDeleteManyArgs>(args?: SelectSubset<T, CandidateStatusDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CandidateStatuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidateStatusUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CandidateStatuses
     * const candidateStatus = await prisma.candidateStatus.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CandidateStatusUpdateManyArgs>(args: SelectSubset<T, CandidateStatusUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CandidateStatus.
     * @param {CandidateStatusUpsertArgs} args - Arguments to update or create a CandidateStatus.
     * @example
     * // Update or create a CandidateStatus
     * const candidateStatus = await prisma.candidateStatus.upsert({
     *   create: {
     *     // ... data to create a CandidateStatus
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CandidateStatus we want to update
     *   }
     * })
     */
    upsert<T extends CandidateStatusUpsertArgs>(args: SelectSubset<T, CandidateStatusUpsertArgs<ExtArgs>>): Prisma__CandidateStatusClient<$Result.GetResult<Prisma.$CandidateStatusPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CandidateStatuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidateStatusCountArgs} args - Arguments to filter CandidateStatuses to count.
     * @example
     * // Count the number of CandidateStatuses
     * const count = await prisma.candidateStatus.count({
     *   where: {
     *     // ... the filter for the CandidateStatuses we want to count
     *   }
     * })
    **/
    count<T extends CandidateStatusCountArgs>(
      args?: Subset<T, CandidateStatusCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CandidateStatusCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CandidateStatus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidateStatusAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CandidateStatusAggregateArgs>(args: Subset<T, CandidateStatusAggregateArgs>): Prisma.PrismaPromise<GetCandidateStatusAggregateType<T>>

    /**
     * Group by CandidateStatus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidateStatusGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CandidateStatusGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CandidateStatusGroupByArgs['orderBy'] }
        : { orderBy?: CandidateStatusGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CandidateStatusGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCandidateStatusGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CandidateStatus model
   */
  readonly fields: CandidateStatusFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CandidateStatus.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CandidateStatusClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    candidate<T extends CandidateDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CandidateDefaultArgs<ExtArgs>>): Prisma__CandidateClient<$Result.GetResult<Prisma.$CandidatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    status_update_requests<T extends CandidateStatus$status_update_requestsArgs<ExtArgs> = {}>(args?: Subset<T, CandidateStatus$status_update_requestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StatusUpdateRequestsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CandidateStatus model
   */
  interface CandidateStatusFieldRefs {
    readonly candidate_status_id: FieldRef<"CandidateStatus", 'Int'>
    readonly candidate_id: FieldRef<"CandidateStatus", 'Int'>
    readonly status: FieldRef<"CandidateStatus", 'CandidateStatusEnum'>
    readonly updated_by: FieldRef<"CandidateStatus", 'Int'>
    readonly created_at: FieldRef<"CandidateStatus", 'DateTime'>
    readonly updated_at: FieldRef<"CandidateStatus", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CandidateStatus findUnique
   */
  export type CandidateStatusFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateStatus
     */
    select?: CandidateStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CandidateStatus
     */
    omit?: CandidateStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateStatusInclude<ExtArgs> | null
    /**
     * Filter, which CandidateStatus to fetch.
     */
    where: CandidateStatusWhereUniqueInput
  }

  /**
   * CandidateStatus findUniqueOrThrow
   */
  export type CandidateStatusFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateStatus
     */
    select?: CandidateStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CandidateStatus
     */
    omit?: CandidateStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateStatusInclude<ExtArgs> | null
    /**
     * Filter, which CandidateStatus to fetch.
     */
    where: CandidateStatusWhereUniqueInput
  }

  /**
   * CandidateStatus findFirst
   */
  export type CandidateStatusFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateStatus
     */
    select?: CandidateStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CandidateStatus
     */
    omit?: CandidateStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateStatusInclude<ExtArgs> | null
    /**
     * Filter, which CandidateStatus to fetch.
     */
    where?: CandidateStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CandidateStatuses to fetch.
     */
    orderBy?: CandidateStatusOrderByWithRelationInput | CandidateStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CandidateStatuses.
     */
    cursor?: CandidateStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CandidateStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CandidateStatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CandidateStatuses.
     */
    distinct?: CandidateStatusScalarFieldEnum | CandidateStatusScalarFieldEnum[]
  }

  /**
   * CandidateStatus findFirstOrThrow
   */
  export type CandidateStatusFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateStatus
     */
    select?: CandidateStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CandidateStatus
     */
    omit?: CandidateStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateStatusInclude<ExtArgs> | null
    /**
     * Filter, which CandidateStatus to fetch.
     */
    where?: CandidateStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CandidateStatuses to fetch.
     */
    orderBy?: CandidateStatusOrderByWithRelationInput | CandidateStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CandidateStatuses.
     */
    cursor?: CandidateStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CandidateStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CandidateStatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CandidateStatuses.
     */
    distinct?: CandidateStatusScalarFieldEnum | CandidateStatusScalarFieldEnum[]
  }

  /**
   * CandidateStatus findMany
   */
  export type CandidateStatusFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateStatus
     */
    select?: CandidateStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CandidateStatus
     */
    omit?: CandidateStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateStatusInclude<ExtArgs> | null
    /**
     * Filter, which CandidateStatuses to fetch.
     */
    where?: CandidateStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CandidateStatuses to fetch.
     */
    orderBy?: CandidateStatusOrderByWithRelationInput | CandidateStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CandidateStatuses.
     */
    cursor?: CandidateStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CandidateStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CandidateStatuses.
     */
    skip?: number
    distinct?: CandidateStatusScalarFieldEnum | CandidateStatusScalarFieldEnum[]
  }

  /**
   * CandidateStatus create
   */
  export type CandidateStatusCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateStatus
     */
    select?: CandidateStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CandidateStatus
     */
    omit?: CandidateStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateStatusInclude<ExtArgs> | null
    /**
     * The data needed to create a CandidateStatus.
     */
    data: XOR<CandidateStatusCreateInput, CandidateStatusUncheckedCreateInput>
  }

  /**
   * CandidateStatus createMany
   */
  export type CandidateStatusCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CandidateStatuses.
     */
    data: CandidateStatusCreateManyInput | CandidateStatusCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CandidateStatus update
   */
  export type CandidateStatusUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateStatus
     */
    select?: CandidateStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CandidateStatus
     */
    omit?: CandidateStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateStatusInclude<ExtArgs> | null
    /**
     * The data needed to update a CandidateStatus.
     */
    data: XOR<CandidateStatusUpdateInput, CandidateStatusUncheckedUpdateInput>
    /**
     * Choose, which CandidateStatus to update.
     */
    where: CandidateStatusWhereUniqueInput
  }

  /**
   * CandidateStatus updateMany
   */
  export type CandidateStatusUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CandidateStatuses.
     */
    data: XOR<CandidateStatusUpdateManyMutationInput, CandidateStatusUncheckedUpdateManyInput>
    /**
     * Filter which CandidateStatuses to update
     */
    where?: CandidateStatusWhereInput
    /**
     * Limit how many CandidateStatuses to update.
     */
    limit?: number
  }

  /**
   * CandidateStatus upsert
   */
  export type CandidateStatusUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateStatus
     */
    select?: CandidateStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CandidateStatus
     */
    omit?: CandidateStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateStatusInclude<ExtArgs> | null
    /**
     * The filter to search for the CandidateStatus to update in case it exists.
     */
    where: CandidateStatusWhereUniqueInput
    /**
     * In case the CandidateStatus found by the `where` argument doesn't exist, create a new CandidateStatus with this data.
     */
    create: XOR<CandidateStatusCreateInput, CandidateStatusUncheckedCreateInput>
    /**
     * In case the CandidateStatus was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CandidateStatusUpdateInput, CandidateStatusUncheckedUpdateInput>
  }

  /**
   * CandidateStatus delete
   */
  export type CandidateStatusDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateStatus
     */
    select?: CandidateStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CandidateStatus
     */
    omit?: CandidateStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateStatusInclude<ExtArgs> | null
    /**
     * Filter which CandidateStatus to delete.
     */
    where: CandidateStatusWhereUniqueInput
  }

  /**
   * CandidateStatus deleteMany
   */
  export type CandidateStatusDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CandidateStatuses to delete
     */
    where?: CandidateStatusWhereInput
    /**
     * Limit how many CandidateStatuses to delete.
     */
    limit?: number
  }

  /**
   * CandidateStatus.status_update_requests
   */
  export type CandidateStatus$status_update_requestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusUpdateRequests
     */
    select?: StatusUpdateRequestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StatusUpdateRequests
     */
    omit?: StatusUpdateRequestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusUpdateRequestsInclude<ExtArgs> | null
    where?: StatusUpdateRequestsWhereInput
    orderBy?: StatusUpdateRequestsOrderByWithRelationInput | StatusUpdateRequestsOrderByWithRelationInput[]
    cursor?: StatusUpdateRequestsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StatusUpdateRequestsScalarFieldEnum | StatusUpdateRequestsScalarFieldEnum[]
  }

  /**
   * CandidateStatus without action
   */
  export type CandidateStatusDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateStatus
     */
    select?: CandidateStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CandidateStatus
     */
    omit?: CandidateStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateStatusInclude<ExtArgs> | null
  }


  /**
   * Model StatusUpdateRequests
   */

  export type AggregateStatusUpdateRequests = {
    _count: StatusUpdateRequestsCountAggregateOutputType | null
    _avg: StatusUpdateRequestsAvgAggregateOutputType | null
    _sum: StatusUpdateRequestsSumAggregateOutputType | null
    _min: StatusUpdateRequestsMinAggregateOutputType | null
    _max: StatusUpdateRequestsMaxAggregateOutputType | null
  }

  export type StatusUpdateRequestsAvgAggregateOutputType = {
    status_update_request_id: number | null
    candidate_status_id: number | null
    request_by: number | null
    approve_by: number | null
  }

  export type StatusUpdateRequestsSumAggregateOutputType = {
    status_update_request_id: number | null
    candidate_status_id: number | null
    request_by: number | null
    approve_by: number | null
  }

  export type StatusUpdateRequestsMinAggregateOutputType = {
    status_update_request_id: number | null
    candidate_status_id: number | null
    requested_status: $Enums.StatusEnum | null
    request_by: number | null
    approve_by: number | null
    status: $Enums.StatusEnum | null
    created_at: Date | null
    approved_at: Date | null
  }

  export type StatusUpdateRequestsMaxAggregateOutputType = {
    status_update_request_id: number | null
    candidate_status_id: number | null
    requested_status: $Enums.StatusEnum | null
    request_by: number | null
    approve_by: number | null
    status: $Enums.StatusEnum | null
    created_at: Date | null
    approved_at: Date | null
  }

  export type StatusUpdateRequestsCountAggregateOutputType = {
    status_update_request_id: number
    candidate_status_id: number
    requested_status: number
    request_by: number
    approve_by: number
    status: number
    created_at: number
    approved_at: number
    _all: number
  }


  export type StatusUpdateRequestsAvgAggregateInputType = {
    status_update_request_id?: true
    candidate_status_id?: true
    request_by?: true
    approve_by?: true
  }

  export type StatusUpdateRequestsSumAggregateInputType = {
    status_update_request_id?: true
    candidate_status_id?: true
    request_by?: true
    approve_by?: true
  }

  export type StatusUpdateRequestsMinAggregateInputType = {
    status_update_request_id?: true
    candidate_status_id?: true
    requested_status?: true
    request_by?: true
    approve_by?: true
    status?: true
    created_at?: true
    approved_at?: true
  }

  export type StatusUpdateRequestsMaxAggregateInputType = {
    status_update_request_id?: true
    candidate_status_id?: true
    requested_status?: true
    request_by?: true
    approve_by?: true
    status?: true
    created_at?: true
    approved_at?: true
  }

  export type StatusUpdateRequestsCountAggregateInputType = {
    status_update_request_id?: true
    candidate_status_id?: true
    requested_status?: true
    request_by?: true
    approve_by?: true
    status?: true
    created_at?: true
    approved_at?: true
    _all?: true
  }

  export type StatusUpdateRequestsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StatusUpdateRequests to aggregate.
     */
    where?: StatusUpdateRequestsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StatusUpdateRequests to fetch.
     */
    orderBy?: StatusUpdateRequestsOrderByWithRelationInput | StatusUpdateRequestsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StatusUpdateRequestsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StatusUpdateRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StatusUpdateRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StatusUpdateRequests
    **/
    _count?: true | StatusUpdateRequestsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StatusUpdateRequestsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StatusUpdateRequestsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StatusUpdateRequestsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StatusUpdateRequestsMaxAggregateInputType
  }

  export type GetStatusUpdateRequestsAggregateType<T extends StatusUpdateRequestsAggregateArgs> = {
        [P in keyof T & keyof AggregateStatusUpdateRequests]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStatusUpdateRequests[P]>
      : GetScalarType<T[P], AggregateStatusUpdateRequests[P]>
  }




  export type StatusUpdateRequestsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StatusUpdateRequestsWhereInput
    orderBy?: StatusUpdateRequestsOrderByWithAggregationInput | StatusUpdateRequestsOrderByWithAggregationInput[]
    by: StatusUpdateRequestsScalarFieldEnum[] | StatusUpdateRequestsScalarFieldEnum
    having?: StatusUpdateRequestsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StatusUpdateRequestsCountAggregateInputType | true
    _avg?: StatusUpdateRequestsAvgAggregateInputType
    _sum?: StatusUpdateRequestsSumAggregateInputType
    _min?: StatusUpdateRequestsMinAggregateInputType
    _max?: StatusUpdateRequestsMaxAggregateInputType
  }

  export type StatusUpdateRequestsGroupByOutputType = {
    status_update_request_id: number
    candidate_status_id: number
    requested_status: $Enums.StatusEnum
    request_by: number | null
    approve_by: number | null
    status: $Enums.StatusEnum
    created_at: Date
    approved_at: Date | null
    _count: StatusUpdateRequestsCountAggregateOutputType | null
    _avg: StatusUpdateRequestsAvgAggregateOutputType | null
    _sum: StatusUpdateRequestsSumAggregateOutputType | null
    _min: StatusUpdateRequestsMinAggregateOutputType | null
    _max: StatusUpdateRequestsMaxAggregateOutputType | null
  }

  type GetStatusUpdateRequestsGroupByPayload<T extends StatusUpdateRequestsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StatusUpdateRequestsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StatusUpdateRequestsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StatusUpdateRequestsGroupByOutputType[P]>
            : GetScalarType<T[P], StatusUpdateRequestsGroupByOutputType[P]>
        }
      >
    >


  export type StatusUpdateRequestsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    status_update_request_id?: boolean
    candidate_status_id?: boolean
    requested_status?: boolean
    request_by?: boolean
    approve_by?: boolean
    status?: boolean
    created_at?: boolean
    approved_at?: boolean
    candidate_status?: boolean | CandidateStatusDefaultArgs<ExtArgs>
    approver?: boolean | StatusUpdateRequests$approverArgs<ExtArgs>
  }, ExtArgs["result"]["statusUpdateRequests"]>



  export type StatusUpdateRequestsSelectScalar = {
    status_update_request_id?: boolean
    candidate_status_id?: boolean
    requested_status?: boolean
    request_by?: boolean
    approve_by?: boolean
    status?: boolean
    created_at?: boolean
    approved_at?: boolean
  }

  export type StatusUpdateRequestsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"status_update_request_id" | "candidate_status_id" | "requested_status" | "request_by" | "approve_by" | "status" | "created_at" | "approved_at", ExtArgs["result"]["statusUpdateRequests"]>
  export type StatusUpdateRequestsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    candidate_status?: boolean | CandidateStatusDefaultArgs<ExtArgs>
    approver?: boolean | StatusUpdateRequests$approverArgs<ExtArgs>
  }

  export type $StatusUpdateRequestsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StatusUpdateRequests"
    objects: {
      candidate_status: Prisma.$CandidateStatusPayload<ExtArgs>
      approver: Prisma.$AdminUserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      status_update_request_id: number
      candidate_status_id: number
      requested_status: $Enums.StatusEnum
      request_by: number | null
      approve_by: number | null
      status: $Enums.StatusEnum
      created_at: Date
      approved_at: Date | null
    }, ExtArgs["result"]["statusUpdateRequests"]>
    composites: {}
  }

  type StatusUpdateRequestsGetPayload<S extends boolean | null | undefined | StatusUpdateRequestsDefaultArgs> = $Result.GetResult<Prisma.$StatusUpdateRequestsPayload, S>

  type StatusUpdateRequestsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StatusUpdateRequestsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StatusUpdateRequestsCountAggregateInputType | true
    }

  export interface StatusUpdateRequestsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StatusUpdateRequests'], meta: { name: 'StatusUpdateRequests' } }
    /**
     * Find zero or one StatusUpdateRequests that matches the filter.
     * @param {StatusUpdateRequestsFindUniqueArgs} args - Arguments to find a StatusUpdateRequests
     * @example
     * // Get one StatusUpdateRequests
     * const statusUpdateRequests = await prisma.statusUpdateRequests.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StatusUpdateRequestsFindUniqueArgs>(args: SelectSubset<T, StatusUpdateRequestsFindUniqueArgs<ExtArgs>>): Prisma__StatusUpdateRequestsClient<$Result.GetResult<Prisma.$StatusUpdateRequestsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StatusUpdateRequests that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StatusUpdateRequestsFindUniqueOrThrowArgs} args - Arguments to find a StatusUpdateRequests
     * @example
     * // Get one StatusUpdateRequests
     * const statusUpdateRequests = await prisma.statusUpdateRequests.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StatusUpdateRequestsFindUniqueOrThrowArgs>(args: SelectSubset<T, StatusUpdateRequestsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StatusUpdateRequestsClient<$Result.GetResult<Prisma.$StatusUpdateRequestsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StatusUpdateRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusUpdateRequestsFindFirstArgs} args - Arguments to find a StatusUpdateRequests
     * @example
     * // Get one StatusUpdateRequests
     * const statusUpdateRequests = await prisma.statusUpdateRequests.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StatusUpdateRequestsFindFirstArgs>(args?: SelectSubset<T, StatusUpdateRequestsFindFirstArgs<ExtArgs>>): Prisma__StatusUpdateRequestsClient<$Result.GetResult<Prisma.$StatusUpdateRequestsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StatusUpdateRequests that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusUpdateRequestsFindFirstOrThrowArgs} args - Arguments to find a StatusUpdateRequests
     * @example
     * // Get one StatusUpdateRequests
     * const statusUpdateRequests = await prisma.statusUpdateRequests.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StatusUpdateRequestsFindFirstOrThrowArgs>(args?: SelectSubset<T, StatusUpdateRequestsFindFirstOrThrowArgs<ExtArgs>>): Prisma__StatusUpdateRequestsClient<$Result.GetResult<Prisma.$StatusUpdateRequestsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StatusUpdateRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusUpdateRequestsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StatusUpdateRequests
     * const statusUpdateRequests = await prisma.statusUpdateRequests.findMany()
     * 
     * // Get first 10 StatusUpdateRequests
     * const statusUpdateRequests = await prisma.statusUpdateRequests.findMany({ take: 10 })
     * 
     * // Only select the `status_update_request_id`
     * const statusUpdateRequestsWithStatus_update_request_idOnly = await prisma.statusUpdateRequests.findMany({ select: { status_update_request_id: true } })
     * 
     */
    findMany<T extends StatusUpdateRequestsFindManyArgs>(args?: SelectSubset<T, StatusUpdateRequestsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StatusUpdateRequestsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StatusUpdateRequests.
     * @param {StatusUpdateRequestsCreateArgs} args - Arguments to create a StatusUpdateRequests.
     * @example
     * // Create one StatusUpdateRequests
     * const StatusUpdateRequests = await prisma.statusUpdateRequests.create({
     *   data: {
     *     // ... data to create a StatusUpdateRequests
     *   }
     * })
     * 
     */
    create<T extends StatusUpdateRequestsCreateArgs>(args: SelectSubset<T, StatusUpdateRequestsCreateArgs<ExtArgs>>): Prisma__StatusUpdateRequestsClient<$Result.GetResult<Prisma.$StatusUpdateRequestsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StatusUpdateRequests.
     * @param {StatusUpdateRequestsCreateManyArgs} args - Arguments to create many StatusUpdateRequests.
     * @example
     * // Create many StatusUpdateRequests
     * const statusUpdateRequests = await prisma.statusUpdateRequests.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StatusUpdateRequestsCreateManyArgs>(args?: SelectSubset<T, StatusUpdateRequestsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a StatusUpdateRequests.
     * @param {StatusUpdateRequestsDeleteArgs} args - Arguments to delete one StatusUpdateRequests.
     * @example
     * // Delete one StatusUpdateRequests
     * const StatusUpdateRequests = await prisma.statusUpdateRequests.delete({
     *   where: {
     *     // ... filter to delete one StatusUpdateRequests
     *   }
     * })
     * 
     */
    delete<T extends StatusUpdateRequestsDeleteArgs>(args: SelectSubset<T, StatusUpdateRequestsDeleteArgs<ExtArgs>>): Prisma__StatusUpdateRequestsClient<$Result.GetResult<Prisma.$StatusUpdateRequestsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StatusUpdateRequests.
     * @param {StatusUpdateRequestsUpdateArgs} args - Arguments to update one StatusUpdateRequests.
     * @example
     * // Update one StatusUpdateRequests
     * const statusUpdateRequests = await prisma.statusUpdateRequests.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StatusUpdateRequestsUpdateArgs>(args: SelectSubset<T, StatusUpdateRequestsUpdateArgs<ExtArgs>>): Prisma__StatusUpdateRequestsClient<$Result.GetResult<Prisma.$StatusUpdateRequestsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StatusUpdateRequests.
     * @param {StatusUpdateRequestsDeleteManyArgs} args - Arguments to filter StatusUpdateRequests to delete.
     * @example
     * // Delete a few StatusUpdateRequests
     * const { count } = await prisma.statusUpdateRequests.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StatusUpdateRequestsDeleteManyArgs>(args?: SelectSubset<T, StatusUpdateRequestsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StatusUpdateRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusUpdateRequestsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StatusUpdateRequests
     * const statusUpdateRequests = await prisma.statusUpdateRequests.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StatusUpdateRequestsUpdateManyArgs>(args: SelectSubset<T, StatusUpdateRequestsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one StatusUpdateRequests.
     * @param {StatusUpdateRequestsUpsertArgs} args - Arguments to update or create a StatusUpdateRequests.
     * @example
     * // Update or create a StatusUpdateRequests
     * const statusUpdateRequests = await prisma.statusUpdateRequests.upsert({
     *   create: {
     *     // ... data to create a StatusUpdateRequests
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StatusUpdateRequests we want to update
     *   }
     * })
     */
    upsert<T extends StatusUpdateRequestsUpsertArgs>(args: SelectSubset<T, StatusUpdateRequestsUpsertArgs<ExtArgs>>): Prisma__StatusUpdateRequestsClient<$Result.GetResult<Prisma.$StatusUpdateRequestsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StatusUpdateRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusUpdateRequestsCountArgs} args - Arguments to filter StatusUpdateRequests to count.
     * @example
     * // Count the number of StatusUpdateRequests
     * const count = await prisma.statusUpdateRequests.count({
     *   where: {
     *     // ... the filter for the StatusUpdateRequests we want to count
     *   }
     * })
    **/
    count<T extends StatusUpdateRequestsCountArgs>(
      args?: Subset<T, StatusUpdateRequestsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StatusUpdateRequestsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StatusUpdateRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusUpdateRequestsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StatusUpdateRequestsAggregateArgs>(args: Subset<T, StatusUpdateRequestsAggregateArgs>): Prisma.PrismaPromise<GetStatusUpdateRequestsAggregateType<T>>

    /**
     * Group by StatusUpdateRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusUpdateRequestsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StatusUpdateRequestsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StatusUpdateRequestsGroupByArgs['orderBy'] }
        : { orderBy?: StatusUpdateRequestsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StatusUpdateRequestsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStatusUpdateRequestsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StatusUpdateRequests model
   */
  readonly fields: StatusUpdateRequestsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StatusUpdateRequests.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StatusUpdateRequestsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    candidate_status<T extends CandidateStatusDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CandidateStatusDefaultArgs<ExtArgs>>): Prisma__CandidateStatusClient<$Result.GetResult<Prisma.$CandidateStatusPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    approver<T extends StatusUpdateRequests$approverArgs<ExtArgs> = {}>(args?: Subset<T, StatusUpdateRequests$approverArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the StatusUpdateRequests model
   */
  interface StatusUpdateRequestsFieldRefs {
    readonly status_update_request_id: FieldRef<"StatusUpdateRequests", 'Int'>
    readonly candidate_status_id: FieldRef<"StatusUpdateRequests", 'Int'>
    readonly requested_status: FieldRef<"StatusUpdateRequests", 'StatusEnum'>
    readonly request_by: FieldRef<"StatusUpdateRequests", 'Int'>
    readonly approve_by: FieldRef<"StatusUpdateRequests", 'Int'>
    readonly status: FieldRef<"StatusUpdateRequests", 'StatusEnum'>
    readonly created_at: FieldRef<"StatusUpdateRequests", 'DateTime'>
    readonly approved_at: FieldRef<"StatusUpdateRequests", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * StatusUpdateRequests findUnique
   */
  export type StatusUpdateRequestsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusUpdateRequests
     */
    select?: StatusUpdateRequestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StatusUpdateRequests
     */
    omit?: StatusUpdateRequestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusUpdateRequestsInclude<ExtArgs> | null
    /**
     * Filter, which StatusUpdateRequests to fetch.
     */
    where: StatusUpdateRequestsWhereUniqueInput
  }

  /**
   * StatusUpdateRequests findUniqueOrThrow
   */
  export type StatusUpdateRequestsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusUpdateRequests
     */
    select?: StatusUpdateRequestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StatusUpdateRequests
     */
    omit?: StatusUpdateRequestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusUpdateRequestsInclude<ExtArgs> | null
    /**
     * Filter, which StatusUpdateRequests to fetch.
     */
    where: StatusUpdateRequestsWhereUniqueInput
  }

  /**
   * StatusUpdateRequests findFirst
   */
  export type StatusUpdateRequestsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusUpdateRequests
     */
    select?: StatusUpdateRequestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StatusUpdateRequests
     */
    omit?: StatusUpdateRequestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusUpdateRequestsInclude<ExtArgs> | null
    /**
     * Filter, which StatusUpdateRequests to fetch.
     */
    where?: StatusUpdateRequestsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StatusUpdateRequests to fetch.
     */
    orderBy?: StatusUpdateRequestsOrderByWithRelationInput | StatusUpdateRequestsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StatusUpdateRequests.
     */
    cursor?: StatusUpdateRequestsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StatusUpdateRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StatusUpdateRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StatusUpdateRequests.
     */
    distinct?: StatusUpdateRequestsScalarFieldEnum | StatusUpdateRequestsScalarFieldEnum[]
  }

  /**
   * StatusUpdateRequests findFirstOrThrow
   */
  export type StatusUpdateRequestsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusUpdateRequests
     */
    select?: StatusUpdateRequestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StatusUpdateRequests
     */
    omit?: StatusUpdateRequestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusUpdateRequestsInclude<ExtArgs> | null
    /**
     * Filter, which StatusUpdateRequests to fetch.
     */
    where?: StatusUpdateRequestsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StatusUpdateRequests to fetch.
     */
    orderBy?: StatusUpdateRequestsOrderByWithRelationInput | StatusUpdateRequestsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StatusUpdateRequests.
     */
    cursor?: StatusUpdateRequestsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StatusUpdateRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StatusUpdateRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StatusUpdateRequests.
     */
    distinct?: StatusUpdateRequestsScalarFieldEnum | StatusUpdateRequestsScalarFieldEnum[]
  }

  /**
   * StatusUpdateRequests findMany
   */
  export type StatusUpdateRequestsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusUpdateRequests
     */
    select?: StatusUpdateRequestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StatusUpdateRequests
     */
    omit?: StatusUpdateRequestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusUpdateRequestsInclude<ExtArgs> | null
    /**
     * Filter, which StatusUpdateRequests to fetch.
     */
    where?: StatusUpdateRequestsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StatusUpdateRequests to fetch.
     */
    orderBy?: StatusUpdateRequestsOrderByWithRelationInput | StatusUpdateRequestsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StatusUpdateRequests.
     */
    cursor?: StatusUpdateRequestsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StatusUpdateRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StatusUpdateRequests.
     */
    skip?: number
    distinct?: StatusUpdateRequestsScalarFieldEnum | StatusUpdateRequestsScalarFieldEnum[]
  }

  /**
   * StatusUpdateRequests create
   */
  export type StatusUpdateRequestsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusUpdateRequests
     */
    select?: StatusUpdateRequestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StatusUpdateRequests
     */
    omit?: StatusUpdateRequestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusUpdateRequestsInclude<ExtArgs> | null
    /**
     * The data needed to create a StatusUpdateRequests.
     */
    data: XOR<StatusUpdateRequestsCreateInput, StatusUpdateRequestsUncheckedCreateInput>
  }

  /**
   * StatusUpdateRequests createMany
   */
  export type StatusUpdateRequestsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StatusUpdateRequests.
     */
    data: StatusUpdateRequestsCreateManyInput | StatusUpdateRequestsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StatusUpdateRequests update
   */
  export type StatusUpdateRequestsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusUpdateRequests
     */
    select?: StatusUpdateRequestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StatusUpdateRequests
     */
    omit?: StatusUpdateRequestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusUpdateRequestsInclude<ExtArgs> | null
    /**
     * The data needed to update a StatusUpdateRequests.
     */
    data: XOR<StatusUpdateRequestsUpdateInput, StatusUpdateRequestsUncheckedUpdateInput>
    /**
     * Choose, which StatusUpdateRequests to update.
     */
    where: StatusUpdateRequestsWhereUniqueInput
  }

  /**
   * StatusUpdateRequests updateMany
   */
  export type StatusUpdateRequestsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StatusUpdateRequests.
     */
    data: XOR<StatusUpdateRequestsUpdateManyMutationInput, StatusUpdateRequestsUncheckedUpdateManyInput>
    /**
     * Filter which StatusUpdateRequests to update
     */
    where?: StatusUpdateRequestsWhereInput
    /**
     * Limit how many StatusUpdateRequests to update.
     */
    limit?: number
  }

  /**
   * StatusUpdateRequests upsert
   */
  export type StatusUpdateRequestsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusUpdateRequests
     */
    select?: StatusUpdateRequestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StatusUpdateRequests
     */
    omit?: StatusUpdateRequestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusUpdateRequestsInclude<ExtArgs> | null
    /**
     * The filter to search for the StatusUpdateRequests to update in case it exists.
     */
    where: StatusUpdateRequestsWhereUniqueInput
    /**
     * In case the StatusUpdateRequests found by the `where` argument doesn't exist, create a new StatusUpdateRequests with this data.
     */
    create: XOR<StatusUpdateRequestsCreateInput, StatusUpdateRequestsUncheckedCreateInput>
    /**
     * In case the StatusUpdateRequests was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StatusUpdateRequestsUpdateInput, StatusUpdateRequestsUncheckedUpdateInput>
  }

  /**
   * StatusUpdateRequests delete
   */
  export type StatusUpdateRequestsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusUpdateRequests
     */
    select?: StatusUpdateRequestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StatusUpdateRequests
     */
    omit?: StatusUpdateRequestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusUpdateRequestsInclude<ExtArgs> | null
    /**
     * Filter which StatusUpdateRequests to delete.
     */
    where: StatusUpdateRequestsWhereUniqueInput
  }

  /**
   * StatusUpdateRequests deleteMany
   */
  export type StatusUpdateRequestsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StatusUpdateRequests to delete
     */
    where?: StatusUpdateRequestsWhereInput
    /**
     * Limit how many StatusUpdateRequests to delete.
     */
    limit?: number
  }

  /**
   * StatusUpdateRequests.approver
   */
  export type StatusUpdateRequests$approverArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminUserInclude<ExtArgs> | null
    where?: AdminUserWhereInput
  }

  /**
   * StatusUpdateRequests without action
   */
  export type StatusUpdateRequestsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusUpdateRequests
     */
    select?: StatusUpdateRequestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StatusUpdateRequests
     */
    omit?: StatusUpdateRequestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusUpdateRequestsInclude<ExtArgs> | null
  }


  /**
   * Model Document
   */

  export type AggregateDocument = {
    _count: DocumentCountAggregateOutputType | null
    _avg: DocumentAvgAggregateOutputType | null
    _sum: DocumentSumAggregateOutputType | null
    _min: DocumentMinAggregateOutputType | null
    _max: DocumentMaxAggregateOutputType | null
  }

  export type DocumentAvgAggregateOutputType = {
    document_id: number | null
    candidate_id: number | null
  }

  export type DocumentSumAggregateOutputType = {
    document_id: number | null
    candidate_id: number | null
  }

  export type DocumentMinAggregateOutputType = {
    document_id: number | null
    candidate_id: number | null
    file_url: string | null
    file_type: string | null
    doc_type: $Enums.DocTypeEnum | null
    uploaded_at: Date | null
  }

  export type DocumentMaxAggregateOutputType = {
    document_id: number | null
    candidate_id: number | null
    file_url: string | null
    file_type: string | null
    doc_type: $Enums.DocTypeEnum | null
    uploaded_at: Date | null
  }

  export type DocumentCountAggregateOutputType = {
    document_id: number
    candidate_id: number
    file_url: number
    file_type: number
    doc_type: number
    uploaded_at: number
    _all: number
  }


  export type DocumentAvgAggregateInputType = {
    document_id?: true
    candidate_id?: true
  }

  export type DocumentSumAggregateInputType = {
    document_id?: true
    candidate_id?: true
  }

  export type DocumentMinAggregateInputType = {
    document_id?: true
    candidate_id?: true
    file_url?: true
    file_type?: true
    doc_type?: true
    uploaded_at?: true
  }

  export type DocumentMaxAggregateInputType = {
    document_id?: true
    candidate_id?: true
    file_url?: true
    file_type?: true
    doc_type?: true
    uploaded_at?: true
  }

  export type DocumentCountAggregateInputType = {
    document_id?: true
    candidate_id?: true
    file_url?: true
    file_type?: true
    doc_type?: true
    uploaded_at?: true
    _all?: true
  }

  export type DocumentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Document to aggregate.
     */
    where?: DocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Documents
    **/
    _count?: true | DocumentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DocumentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DocumentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DocumentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DocumentMaxAggregateInputType
  }

  export type GetDocumentAggregateType<T extends DocumentAggregateArgs> = {
        [P in keyof T & keyof AggregateDocument]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDocument[P]>
      : GetScalarType<T[P], AggregateDocument[P]>
  }




  export type DocumentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentWhereInput
    orderBy?: DocumentOrderByWithAggregationInput | DocumentOrderByWithAggregationInput[]
    by: DocumentScalarFieldEnum[] | DocumentScalarFieldEnum
    having?: DocumentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DocumentCountAggregateInputType | true
    _avg?: DocumentAvgAggregateInputType
    _sum?: DocumentSumAggregateInputType
    _min?: DocumentMinAggregateInputType
    _max?: DocumentMaxAggregateInputType
  }

  export type DocumentGroupByOutputType = {
    document_id: number
    candidate_id: number
    file_url: string
    file_type: string
    doc_type: $Enums.DocTypeEnum
    uploaded_at: Date
    _count: DocumentCountAggregateOutputType | null
    _avg: DocumentAvgAggregateOutputType | null
    _sum: DocumentSumAggregateOutputType | null
    _min: DocumentMinAggregateOutputType | null
    _max: DocumentMaxAggregateOutputType | null
  }

  type GetDocumentGroupByPayload<T extends DocumentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DocumentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DocumentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DocumentGroupByOutputType[P]>
            : GetScalarType<T[P], DocumentGroupByOutputType[P]>
        }
      >
    >


  export type DocumentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    document_id?: boolean
    candidate_id?: boolean
    file_url?: boolean
    file_type?: boolean
    doc_type?: boolean
    uploaded_at?: boolean
    candidate?: boolean | CandidateDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["document"]>



  export type DocumentSelectScalar = {
    document_id?: boolean
    candidate_id?: boolean
    file_url?: boolean
    file_type?: boolean
    doc_type?: boolean
    uploaded_at?: boolean
  }

  export type DocumentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"document_id" | "candidate_id" | "file_url" | "file_type" | "doc_type" | "uploaded_at", ExtArgs["result"]["document"]>
  export type DocumentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    candidate?: boolean | CandidateDefaultArgs<ExtArgs>
  }

  export type $DocumentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Document"
    objects: {
      candidate: Prisma.$CandidatePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      document_id: number
      candidate_id: number
      file_url: string
      file_type: string
      doc_type: $Enums.DocTypeEnum
      uploaded_at: Date
    }, ExtArgs["result"]["document"]>
    composites: {}
  }

  type DocumentGetPayload<S extends boolean | null | undefined | DocumentDefaultArgs> = $Result.GetResult<Prisma.$DocumentPayload, S>

  type DocumentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DocumentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DocumentCountAggregateInputType | true
    }

  export interface DocumentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Document'], meta: { name: 'Document' } }
    /**
     * Find zero or one Document that matches the filter.
     * @param {DocumentFindUniqueArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DocumentFindUniqueArgs>(args: SelectSubset<T, DocumentFindUniqueArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Document that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DocumentFindUniqueOrThrowArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DocumentFindUniqueOrThrowArgs>(args: SelectSubset<T, DocumentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Document that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentFindFirstArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DocumentFindFirstArgs>(args?: SelectSubset<T, DocumentFindFirstArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Document that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentFindFirstOrThrowArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DocumentFindFirstOrThrowArgs>(args?: SelectSubset<T, DocumentFindFirstOrThrowArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Documents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Documents
     * const documents = await prisma.document.findMany()
     * 
     * // Get first 10 Documents
     * const documents = await prisma.document.findMany({ take: 10 })
     * 
     * // Only select the `document_id`
     * const documentWithDocument_idOnly = await prisma.document.findMany({ select: { document_id: true } })
     * 
     */
    findMany<T extends DocumentFindManyArgs>(args?: SelectSubset<T, DocumentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Document.
     * @param {DocumentCreateArgs} args - Arguments to create a Document.
     * @example
     * // Create one Document
     * const Document = await prisma.document.create({
     *   data: {
     *     // ... data to create a Document
     *   }
     * })
     * 
     */
    create<T extends DocumentCreateArgs>(args: SelectSubset<T, DocumentCreateArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Documents.
     * @param {DocumentCreateManyArgs} args - Arguments to create many Documents.
     * @example
     * // Create many Documents
     * const document = await prisma.document.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DocumentCreateManyArgs>(args?: SelectSubset<T, DocumentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Document.
     * @param {DocumentDeleteArgs} args - Arguments to delete one Document.
     * @example
     * // Delete one Document
     * const Document = await prisma.document.delete({
     *   where: {
     *     // ... filter to delete one Document
     *   }
     * })
     * 
     */
    delete<T extends DocumentDeleteArgs>(args: SelectSubset<T, DocumentDeleteArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Document.
     * @param {DocumentUpdateArgs} args - Arguments to update one Document.
     * @example
     * // Update one Document
     * const document = await prisma.document.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DocumentUpdateArgs>(args: SelectSubset<T, DocumentUpdateArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Documents.
     * @param {DocumentDeleteManyArgs} args - Arguments to filter Documents to delete.
     * @example
     * // Delete a few Documents
     * const { count } = await prisma.document.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DocumentDeleteManyArgs>(args?: SelectSubset<T, DocumentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Documents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Documents
     * const document = await prisma.document.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DocumentUpdateManyArgs>(args: SelectSubset<T, DocumentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Document.
     * @param {DocumentUpsertArgs} args - Arguments to update or create a Document.
     * @example
     * // Update or create a Document
     * const document = await prisma.document.upsert({
     *   create: {
     *     // ... data to create a Document
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Document we want to update
     *   }
     * })
     */
    upsert<T extends DocumentUpsertArgs>(args: SelectSubset<T, DocumentUpsertArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Documents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentCountArgs} args - Arguments to filter Documents to count.
     * @example
     * // Count the number of Documents
     * const count = await prisma.document.count({
     *   where: {
     *     // ... the filter for the Documents we want to count
     *   }
     * })
    **/
    count<T extends DocumentCountArgs>(
      args?: Subset<T, DocumentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DocumentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Document.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DocumentAggregateArgs>(args: Subset<T, DocumentAggregateArgs>): Prisma.PrismaPromise<GetDocumentAggregateType<T>>

    /**
     * Group by Document.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DocumentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DocumentGroupByArgs['orderBy'] }
        : { orderBy?: DocumentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DocumentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDocumentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Document model
   */
  readonly fields: DocumentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Document.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DocumentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    candidate<T extends CandidateDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CandidateDefaultArgs<ExtArgs>>): Prisma__CandidateClient<$Result.GetResult<Prisma.$CandidatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Document model
   */
  interface DocumentFieldRefs {
    readonly document_id: FieldRef<"Document", 'Int'>
    readonly candidate_id: FieldRef<"Document", 'Int'>
    readonly file_url: FieldRef<"Document", 'String'>
    readonly file_type: FieldRef<"Document", 'String'>
    readonly doc_type: FieldRef<"Document", 'DocTypeEnum'>
    readonly uploaded_at: FieldRef<"Document", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Document findUnique
   */
  export type DocumentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Document to fetch.
     */
    where: DocumentWhereUniqueInput
  }

  /**
   * Document findUniqueOrThrow
   */
  export type DocumentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Document to fetch.
     */
    where: DocumentWhereUniqueInput
  }

  /**
   * Document findFirst
   */
  export type DocumentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Document to fetch.
     */
    where?: DocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Documents.
     */
    cursor?: DocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Documents.
     */
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * Document findFirstOrThrow
   */
  export type DocumentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Document to fetch.
     */
    where?: DocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Documents.
     */
    cursor?: DocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Documents.
     */
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * Document findMany
   */
  export type DocumentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Documents to fetch.
     */
    where?: DocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Documents.
     */
    cursor?: DocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * Document create
   */
  export type DocumentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * The data needed to create a Document.
     */
    data: XOR<DocumentCreateInput, DocumentUncheckedCreateInput>
  }

  /**
   * Document createMany
   */
  export type DocumentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Documents.
     */
    data: DocumentCreateManyInput | DocumentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Document update
   */
  export type DocumentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * The data needed to update a Document.
     */
    data: XOR<DocumentUpdateInput, DocumentUncheckedUpdateInput>
    /**
     * Choose, which Document to update.
     */
    where: DocumentWhereUniqueInput
  }

  /**
   * Document updateMany
   */
  export type DocumentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Documents.
     */
    data: XOR<DocumentUpdateManyMutationInput, DocumentUncheckedUpdateManyInput>
    /**
     * Filter which Documents to update
     */
    where?: DocumentWhereInput
    /**
     * Limit how many Documents to update.
     */
    limit?: number
  }

  /**
   * Document upsert
   */
  export type DocumentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * The filter to search for the Document to update in case it exists.
     */
    where: DocumentWhereUniqueInput
    /**
     * In case the Document found by the `where` argument doesn't exist, create a new Document with this data.
     */
    create: XOR<DocumentCreateInput, DocumentUncheckedCreateInput>
    /**
     * In case the Document was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DocumentUpdateInput, DocumentUncheckedUpdateInput>
  }

  /**
   * Document delete
   */
  export type DocumentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter which Document to delete.
     */
    where: DocumentWhereUniqueInput
  }

  /**
   * Document deleteMany
   */
  export type DocumentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Documents to delete
     */
    where?: DocumentWhereInput
    /**
     * Limit how many Documents to delete.
     */
    limit?: number
  }

  /**
   * Document without action
   */
  export type DocumentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
  }


  /**
   * Model Question
   */

  export type AggregateQuestion = {
    _count: QuestionCountAggregateOutputType | null
    _avg: QuestionAvgAggregateOutputType | null
    _sum: QuestionSumAggregateOutputType | null
    _min: QuestionMinAggregateOutputType | null
    _max: QuestionMaxAggregateOutputType | null
  }

  export type QuestionAvgAggregateOutputType = {
    question_id: number | null
  }

  export type QuestionSumAggregateOutputType = {
    question_id: number | null
  }

  export type QuestionMinAggregateOutputType = {
    question_id: number | null
    question_text: string | null
    mcq: boolean | null
    difficulty: $Enums.Difficulty | null
    created_at: Date | null
  }

  export type QuestionMaxAggregateOutputType = {
    question_id: number | null
    question_text: string | null
    mcq: boolean | null
    difficulty: $Enums.Difficulty | null
    created_at: Date | null
  }

  export type QuestionCountAggregateOutputType = {
    question_id: number
    question_text: number
    mcq: number
    difficulty: number
    created_at: number
    _all: number
  }


  export type QuestionAvgAggregateInputType = {
    question_id?: true
  }

  export type QuestionSumAggregateInputType = {
    question_id?: true
  }

  export type QuestionMinAggregateInputType = {
    question_id?: true
    question_text?: true
    mcq?: true
    difficulty?: true
    created_at?: true
  }

  export type QuestionMaxAggregateInputType = {
    question_id?: true
    question_text?: true
    mcq?: true
    difficulty?: true
    created_at?: true
  }

  export type QuestionCountAggregateInputType = {
    question_id?: true
    question_text?: true
    mcq?: true
    difficulty?: true
    created_at?: true
    _all?: true
  }

  export type QuestionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Question to aggregate.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Questions
    **/
    _count?: true | QuestionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QuestionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QuestionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuestionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuestionMaxAggregateInputType
  }

  export type GetQuestionAggregateType<T extends QuestionAggregateArgs> = {
        [P in keyof T & keyof AggregateQuestion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuestion[P]>
      : GetScalarType<T[P], AggregateQuestion[P]>
  }




  export type QuestionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionWhereInput
    orderBy?: QuestionOrderByWithAggregationInput | QuestionOrderByWithAggregationInput[]
    by: QuestionScalarFieldEnum[] | QuestionScalarFieldEnum
    having?: QuestionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuestionCountAggregateInputType | true
    _avg?: QuestionAvgAggregateInputType
    _sum?: QuestionSumAggregateInputType
    _min?: QuestionMinAggregateInputType
    _max?: QuestionMaxAggregateInputType
  }

  export type QuestionGroupByOutputType = {
    question_id: number
    question_text: string
    mcq: boolean
    difficulty: $Enums.Difficulty
    created_at: Date
    _count: QuestionCountAggregateOutputType | null
    _avg: QuestionAvgAggregateOutputType | null
    _sum: QuestionSumAggregateOutputType | null
    _min: QuestionMinAggregateOutputType | null
    _max: QuestionMaxAggregateOutputType | null
  }

  type GetQuestionGroupByPayload<T extends QuestionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuestionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuestionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuestionGroupByOutputType[P]>
            : GetScalarType<T[P], QuestionGroupByOutputType[P]>
        }
      >
    >


  export type QuestionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    question_id?: boolean
    question_text?: boolean
    mcq?: boolean
    difficulty?: boolean
    created_at?: boolean
    choices?: boolean | Question$choicesArgs<ExtArgs>
    test_questions?: boolean | Question$test_questionsArgs<ExtArgs>
    testAnswers?: boolean | Question$testAnswersArgs<ExtArgs>
    _count?: boolean | QuestionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["question"]>



  export type QuestionSelectScalar = {
    question_id?: boolean
    question_text?: boolean
    mcq?: boolean
    difficulty?: boolean
    created_at?: boolean
  }

  export type QuestionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"question_id" | "question_text" | "mcq" | "difficulty" | "created_at", ExtArgs["result"]["question"]>
  export type QuestionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    choices?: boolean | Question$choicesArgs<ExtArgs>
    test_questions?: boolean | Question$test_questionsArgs<ExtArgs>
    testAnswers?: boolean | Question$testAnswersArgs<ExtArgs>
    _count?: boolean | QuestionCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $QuestionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Question"
    objects: {
      choices: Prisma.$ChoicePayload<ExtArgs>[]
      test_questions: Prisma.$TestQuestionPayload<ExtArgs>[]
      testAnswers: Prisma.$TestAnswerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      question_id: number
      question_text: string
      mcq: boolean
      difficulty: $Enums.Difficulty
      created_at: Date
    }, ExtArgs["result"]["question"]>
    composites: {}
  }

  type QuestionGetPayload<S extends boolean | null | undefined | QuestionDefaultArgs> = $Result.GetResult<Prisma.$QuestionPayload, S>

  type QuestionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QuestionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuestionCountAggregateInputType | true
    }

  export interface QuestionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Question'], meta: { name: 'Question' } }
    /**
     * Find zero or one Question that matches the filter.
     * @param {QuestionFindUniqueArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuestionFindUniqueArgs>(args: SelectSubset<T, QuestionFindUniqueArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Question that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QuestionFindUniqueOrThrowArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuestionFindUniqueOrThrowArgs>(args: SelectSubset<T, QuestionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Question that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindFirstArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuestionFindFirstArgs>(args?: SelectSubset<T, QuestionFindFirstArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Question that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindFirstOrThrowArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuestionFindFirstOrThrowArgs>(args?: SelectSubset<T, QuestionFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Questions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Questions
     * const questions = await prisma.question.findMany()
     * 
     * // Get first 10 Questions
     * const questions = await prisma.question.findMany({ take: 10 })
     * 
     * // Only select the `question_id`
     * const questionWithQuestion_idOnly = await prisma.question.findMany({ select: { question_id: true } })
     * 
     */
    findMany<T extends QuestionFindManyArgs>(args?: SelectSubset<T, QuestionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Question.
     * @param {QuestionCreateArgs} args - Arguments to create a Question.
     * @example
     * // Create one Question
     * const Question = await prisma.question.create({
     *   data: {
     *     // ... data to create a Question
     *   }
     * })
     * 
     */
    create<T extends QuestionCreateArgs>(args: SelectSubset<T, QuestionCreateArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Questions.
     * @param {QuestionCreateManyArgs} args - Arguments to create many Questions.
     * @example
     * // Create many Questions
     * const question = await prisma.question.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuestionCreateManyArgs>(args?: SelectSubset<T, QuestionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Question.
     * @param {QuestionDeleteArgs} args - Arguments to delete one Question.
     * @example
     * // Delete one Question
     * const Question = await prisma.question.delete({
     *   where: {
     *     // ... filter to delete one Question
     *   }
     * })
     * 
     */
    delete<T extends QuestionDeleteArgs>(args: SelectSubset<T, QuestionDeleteArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Question.
     * @param {QuestionUpdateArgs} args - Arguments to update one Question.
     * @example
     * // Update one Question
     * const question = await prisma.question.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuestionUpdateArgs>(args: SelectSubset<T, QuestionUpdateArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Questions.
     * @param {QuestionDeleteManyArgs} args - Arguments to filter Questions to delete.
     * @example
     * // Delete a few Questions
     * const { count } = await prisma.question.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuestionDeleteManyArgs>(args?: SelectSubset<T, QuestionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Questions
     * const question = await prisma.question.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuestionUpdateManyArgs>(args: SelectSubset<T, QuestionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Question.
     * @param {QuestionUpsertArgs} args - Arguments to update or create a Question.
     * @example
     * // Update or create a Question
     * const question = await prisma.question.upsert({
     *   create: {
     *     // ... data to create a Question
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Question we want to update
     *   }
     * })
     */
    upsert<T extends QuestionUpsertArgs>(args: SelectSubset<T, QuestionUpsertArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionCountArgs} args - Arguments to filter Questions to count.
     * @example
     * // Count the number of Questions
     * const count = await prisma.question.count({
     *   where: {
     *     // ... the filter for the Questions we want to count
     *   }
     * })
    **/
    count<T extends QuestionCountArgs>(
      args?: Subset<T, QuestionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuestionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Question.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends QuestionAggregateArgs>(args: Subset<T, QuestionAggregateArgs>): Prisma.PrismaPromise<GetQuestionAggregateType<T>>

    /**
     * Group by Question.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends QuestionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuestionGroupByArgs['orderBy'] }
        : { orderBy?: QuestionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, QuestionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuestionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Question model
   */
  readonly fields: QuestionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Question.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuestionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    choices<T extends Question$choicesArgs<ExtArgs> = {}>(args?: Subset<T, Question$choicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChoicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    test_questions<T extends Question$test_questionsArgs<ExtArgs> = {}>(args?: Subset<T, Question$test_questionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestQuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    testAnswers<T extends Question$testAnswersArgs<ExtArgs> = {}>(args?: Subset<T, Question$testAnswersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestAnswerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Question model
   */
  interface QuestionFieldRefs {
    readonly question_id: FieldRef<"Question", 'Int'>
    readonly question_text: FieldRef<"Question", 'String'>
    readonly mcq: FieldRef<"Question", 'Boolean'>
    readonly difficulty: FieldRef<"Question", 'Difficulty'>
    readonly created_at: FieldRef<"Question", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Question findUnique
   */
  export type QuestionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question findUniqueOrThrow
   */
  export type QuestionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question findFirst
   */
  export type QuestionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Questions.
     */
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Question findFirstOrThrow
   */
  export type QuestionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Questions.
     */
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Question findMany
   */
  export type QuestionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Questions to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Question create
   */
  export type QuestionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * The data needed to create a Question.
     */
    data: XOR<QuestionCreateInput, QuestionUncheckedCreateInput>
  }

  /**
   * Question createMany
   */
  export type QuestionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Questions.
     */
    data: QuestionCreateManyInput | QuestionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Question update
   */
  export type QuestionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * The data needed to update a Question.
     */
    data: XOR<QuestionUpdateInput, QuestionUncheckedUpdateInput>
    /**
     * Choose, which Question to update.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question updateMany
   */
  export type QuestionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Questions.
     */
    data: XOR<QuestionUpdateManyMutationInput, QuestionUncheckedUpdateManyInput>
    /**
     * Filter which Questions to update
     */
    where?: QuestionWhereInput
    /**
     * Limit how many Questions to update.
     */
    limit?: number
  }

  /**
   * Question upsert
   */
  export type QuestionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * The filter to search for the Question to update in case it exists.
     */
    where: QuestionWhereUniqueInput
    /**
     * In case the Question found by the `where` argument doesn't exist, create a new Question with this data.
     */
    create: XOR<QuestionCreateInput, QuestionUncheckedCreateInput>
    /**
     * In case the Question was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuestionUpdateInput, QuestionUncheckedUpdateInput>
  }

  /**
   * Question delete
   */
  export type QuestionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter which Question to delete.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question deleteMany
   */
  export type QuestionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Questions to delete
     */
    where?: QuestionWhereInput
    /**
     * Limit how many Questions to delete.
     */
    limit?: number
  }

  /**
   * Question.choices
   */
  export type Question$choicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Choice
     */
    select?: ChoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Choice
     */
    omit?: ChoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoiceInclude<ExtArgs> | null
    where?: ChoiceWhereInput
    orderBy?: ChoiceOrderByWithRelationInput | ChoiceOrderByWithRelationInput[]
    cursor?: ChoiceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChoiceScalarFieldEnum | ChoiceScalarFieldEnum[]
  }

  /**
   * Question.test_questions
   */
  export type Question$test_questionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestQuestion
     */
    select?: TestQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestQuestion
     */
    omit?: TestQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestQuestionInclude<ExtArgs> | null
    where?: TestQuestionWhereInput
    orderBy?: TestQuestionOrderByWithRelationInput | TestQuestionOrderByWithRelationInput[]
    cursor?: TestQuestionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TestQuestionScalarFieldEnum | TestQuestionScalarFieldEnum[]
  }

  /**
   * Question.testAnswers
   */
  export type Question$testAnswersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestAnswer
     */
    select?: TestAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestAnswer
     */
    omit?: TestAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestAnswerInclude<ExtArgs> | null
    where?: TestAnswerWhereInput
    orderBy?: TestAnswerOrderByWithRelationInput | TestAnswerOrderByWithRelationInput[]
    cursor?: TestAnswerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TestAnswerScalarFieldEnum | TestAnswerScalarFieldEnum[]
  }

  /**
   * Question without action
   */
  export type QuestionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
  }


  /**
   * Model Choice
   */

  export type AggregateChoice = {
    _count: ChoiceCountAggregateOutputType | null
    _avg: ChoiceAvgAggregateOutputType | null
    _sum: ChoiceSumAggregateOutputType | null
    _min: ChoiceMinAggregateOutputType | null
    _max: ChoiceMaxAggregateOutputType | null
  }

  export type ChoiceAvgAggregateOutputType = {
    choice_id: number | null
    question_id: number | null
  }

  export type ChoiceSumAggregateOutputType = {
    choice_id: number | null
    question_id: number | null
  }

  export type ChoiceMinAggregateOutputType = {
    choice_id: number | null
    question_id: number | null
    choice_text: string | null
    is_correct: boolean | null
  }

  export type ChoiceMaxAggregateOutputType = {
    choice_id: number | null
    question_id: number | null
    choice_text: string | null
    is_correct: boolean | null
  }

  export type ChoiceCountAggregateOutputType = {
    choice_id: number
    question_id: number
    choice_text: number
    is_correct: number
    _all: number
  }


  export type ChoiceAvgAggregateInputType = {
    choice_id?: true
    question_id?: true
  }

  export type ChoiceSumAggregateInputType = {
    choice_id?: true
    question_id?: true
  }

  export type ChoiceMinAggregateInputType = {
    choice_id?: true
    question_id?: true
    choice_text?: true
    is_correct?: true
  }

  export type ChoiceMaxAggregateInputType = {
    choice_id?: true
    question_id?: true
    choice_text?: true
    is_correct?: true
  }

  export type ChoiceCountAggregateInputType = {
    choice_id?: true
    question_id?: true
    choice_text?: true
    is_correct?: true
    _all?: true
  }

  export type ChoiceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Choice to aggregate.
     */
    where?: ChoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Choices to fetch.
     */
    orderBy?: ChoiceOrderByWithRelationInput | ChoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Choices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Choices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Choices
    **/
    _count?: true | ChoiceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChoiceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChoiceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChoiceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChoiceMaxAggregateInputType
  }

  export type GetChoiceAggregateType<T extends ChoiceAggregateArgs> = {
        [P in keyof T & keyof AggregateChoice]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChoice[P]>
      : GetScalarType<T[P], AggregateChoice[P]>
  }




  export type ChoiceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChoiceWhereInput
    orderBy?: ChoiceOrderByWithAggregationInput | ChoiceOrderByWithAggregationInput[]
    by: ChoiceScalarFieldEnum[] | ChoiceScalarFieldEnum
    having?: ChoiceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChoiceCountAggregateInputType | true
    _avg?: ChoiceAvgAggregateInputType
    _sum?: ChoiceSumAggregateInputType
    _min?: ChoiceMinAggregateInputType
    _max?: ChoiceMaxAggregateInputType
  }

  export type ChoiceGroupByOutputType = {
    choice_id: number
    question_id: number
    choice_text: string
    is_correct: boolean
    _count: ChoiceCountAggregateOutputType | null
    _avg: ChoiceAvgAggregateOutputType | null
    _sum: ChoiceSumAggregateOutputType | null
    _min: ChoiceMinAggregateOutputType | null
    _max: ChoiceMaxAggregateOutputType | null
  }

  type GetChoiceGroupByPayload<T extends ChoiceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChoiceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChoiceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChoiceGroupByOutputType[P]>
            : GetScalarType<T[P], ChoiceGroupByOutputType[P]>
        }
      >
    >


  export type ChoiceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    choice_id?: boolean
    question_id?: boolean
    choice_text?: boolean
    is_correct?: boolean
    question?: boolean | QuestionDefaultArgs<ExtArgs>
    selected_answers?: boolean | Choice$selected_answersArgs<ExtArgs>
    _count?: boolean | ChoiceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["choice"]>



  export type ChoiceSelectScalar = {
    choice_id?: boolean
    question_id?: boolean
    choice_text?: boolean
    is_correct?: boolean
  }

  export type ChoiceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"choice_id" | "question_id" | "choice_text" | "is_correct", ExtArgs["result"]["choice"]>
  export type ChoiceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    question?: boolean | QuestionDefaultArgs<ExtArgs>
    selected_answers?: boolean | Choice$selected_answersArgs<ExtArgs>
    _count?: boolean | ChoiceCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ChoicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Choice"
    objects: {
      question: Prisma.$QuestionPayload<ExtArgs>
      selected_answers: Prisma.$TestAnswerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      choice_id: number
      question_id: number
      choice_text: string
      is_correct: boolean
    }, ExtArgs["result"]["choice"]>
    composites: {}
  }

  type ChoiceGetPayload<S extends boolean | null | undefined | ChoiceDefaultArgs> = $Result.GetResult<Prisma.$ChoicePayload, S>

  type ChoiceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChoiceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChoiceCountAggregateInputType | true
    }

  export interface ChoiceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Choice'], meta: { name: 'Choice' } }
    /**
     * Find zero or one Choice that matches the filter.
     * @param {ChoiceFindUniqueArgs} args - Arguments to find a Choice
     * @example
     * // Get one Choice
     * const choice = await prisma.choice.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChoiceFindUniqueArgs>(args: SelectSubset<T, ChoiceFindUniqueArgs<ExtArgs>>): Prisma__ChoiceClient<$Result.GetResult<Prisma.$ChoicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Choice that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChoiceFindUniqueOrThrowArgs} args - Arguments to find a Choice
     * @example
     * // Get one Choice
     * const choice = await prisma.choice.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChoiceFindUniqueOrThrowArgs>(args: SelectSubset<T, ChoiceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChoiceClient<$Result.GetResult<Prisma.$ChoicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Choice that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChoiceFindFirstArgs} args - Arguments to find a Choice
     * @example
     * // Get one Choice
     * const choice = await prisma.choice.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChoiceFindFirstArgs>(args?: SelectSubset<T, ChoiceFindFirstArgs<ExtArgs>>): Prisma__ChoiceClient<$Result.GetResult<Prisma.$ChoicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Choice that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChoiceFindFirstOrThrowArgs} args - Arguments to find a Choice
     * @example
     * // Get one Choice
     * const choice = await prisma.choice.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChoiceFindFirstOrThrowArgs>(args?: SelectSubset<T, ChoiceFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChoiceClient<$Result.GetResult<Prisma.$ChoicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Choices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChoiceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Choices
     * const choices = await prisma.choice.findMany()
     * 
     * // Get first 10 Choices
     * const choices = await prisma.choice.findMany({ take: 10 })
     * 
     * // Only select the `choice_id`
     * const choiceWithChoice_idOnly = await prisma.choice.findMany({ select: { choice_id: true } })
     * 
     */
    findMany<T extends ChoiceFindManyArgs>(args?: SelectSubset<T, ChoiceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChoicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Choice.
     * @param {ChoiceCreateArgs} args - Arguments to create a Choice.
     * @example
     * // Create one Choice
     * const Choice = await prisma.choice.create({
     *   data: {
     *     // ... data to create a Choice
     *   }
     * })
     * 
     */
    create<T extends ChoiceCreateArgs>(args: SelectSubset<T, ChoiceCreateArgs<ExtArgs>>): Prisma__ChoiceClient<$Result.GetResult<Prisma.$ChoicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Choices.
     * @param {ChoiceCreateManyArgs} args - Arguments to create many Choices.
     * @example
     * // Create many Choices
     * const choice = await prisma.choice.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChoiceCreateManyArgs>(args?: SelectSubset<T, ChoiceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Choice.
     * @param {ChoiceDeleteArgs} args - Arguments to delete one Choice.
     * @example
     * // Delete one Choice
     * const Choice = await prisma.choice.delete({
     *   where: {
     *     // ... filter to delete one Choice
     *   }
     * })
     * 
     */
    delete<T extends ChoiceDeleteArgs>(args: SelectSubset<T, ChoiceDeleteArgs<ExtArgs>>): Prisma__ChoiceClient<$Result.GetResult<Prisma.$ChoicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Choice.
     * @param {ChoiceUpdateArgs} args - Arguments to update one Choice.
     * @example
     * // Update one Choice
     * const choice = await prisma.choice.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChoiceUpdateArgs>(args: SelectSubset<T, ChoiceUpdateArgs<ExtArgs>>): Prisma__ChoiceClient<$Result.GetResult<Prisma.$ChoicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Choices.
     * @param {ChoiceDeleteManyArgs} args - Arguments to filter Choices to delete.
     * @example
     * // Delete a few Choices
     * const { count } = await prisma.choice.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChoiceDeleteManyArgs>(args?: SelectSubset<T, ChoiceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Choices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChoiceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Choices
     * const choice = await prisma.choice.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChoiceUpdateManyArgs>(args: SelectSubset<T, ChoiceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Choice.
     * @param {ChoiceUpsertArgs} args - Arguments to update or create a Choice.
     * @example
     * // Update or create a Choice
     * const choice = await prisma.choice.upsert({
     *   create: {
     *     // ... data to create a Choice
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Choice we want to update
     *   }
     * })
     */
    upsert<T extends ChoiceUpsertArgs>(args: SelectSubset<T, ChoiceUpsertArgs<ExtArgs>>): Prisma__ChoiceClient<$Result.GetResult<Prisma.$ChoicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Choices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChoiceCountArgs} args - Arguments to filter Choices to count.
     * @example
     * // Count the number of Choices
     * const count = await prisma.choice.count({
     *   where: {
     *     // ... the filter for the Choices we want to count
     *   }
     * })
    **/
    count<T extends ChoiceCountArgs>(
      args?: Subset<T, ChoiceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChoiceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Choice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChoiceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ChoiceAggregateArgs>(args: Subset<T, ChoiceAggregateArgs>): Prisma.PrismaPromise<GetChoiceAggregateType<T>>

    /**
     * Group by Choice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChoiceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ChoiceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChoiceGroupByArgs['orderBy'] }
        : { orderBy?: ChoiceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ChoiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChoiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Choice model
   */
  readonly fields: ChoiceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Choice.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChoiceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    question<T extends QuestionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuestionDefaultArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    selected_answers<T extends Choice$selected_answersArgs<ExtArgs> = {}>(args?: Subset<T, Choice$selected_answersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestAnswerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Choice model
   */
  interface ChoiceFieldRefs {
    readonly choice_id: FieldRef<"Choice", 'Int'>
    readonly question_id: FieldRef<"Choice", 'Int'>
    readonly choice_text: FieldRef<"Choice", 'String'>
    readonly is_correct: FieldRef<"Choice", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Choice findUnique
   */
  export type ChoiceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Choice
     */
    select?: ChoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Choice
     */
    omit?: ChoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoiceInclude<ExtArgs> | null
    /**
     * Filter, which Choice to fetch.
     */
    where: ChoiceWhereUniqueInput
  }

  /**
   * Choice findUniqueOrThrow
   */
  export type ChoiceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Choice
     */
    select?: ChoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Choice
     */
    omit?: ChoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoiceInclude<ExtArgs> | null
    /**
     * Filter, which Choice to fetch.
     */
    where: ChoiceWhereUniqueInput
  }

  /**
   * Choice findFirst
   */
  export type ChoiceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Choice
     */
    select?: ChoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Choice
     */
    omit?: ChoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoiceInclude<ExtArgs> | null
    /**
     * Filter, which Choice to fetch.
     */
    where?: ChoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Choices to fetch.
     */
    orderBy?: ChoiceOrderByWithRelationInput | ChoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Choices.
     */
    cursor?: ChoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Choices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Choices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Choices.
     */
    distinct?: ChoiceScalarFieldEnum | ChoiceScalarFieldEnum[]
  }

  /**
   * Choice findFirstOrThrow
   */
  export type ChoiceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Choice
     */
    select?: ChoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Choice
     */
    omit?: ChoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoiceInclude<ExtArgs> | null
    /**
     * Filter, which Choice to fetch.
     */
    where?: ChoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Choices to fetch.
     */
    orderBy?: ChoiceOrderByWithRelationInput | ChoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Choices.
     */
    cursor?: ChoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Choices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Choices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Choices.
     */
    distinct?: ChoiceScalarFieldEnum | ChoiceScalarFieldEnum[]
  }

  /**
   * Choice findMany
   */
  export type ChoiceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Choice
     */
    select?: ChoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Choice
     */
    omit?: ChoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoiceInclude<ExtArgs> | null
    /**
     * Filter, which Choices to fetch.
     */
    where?: ChoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Choices to fetch.
     */
    orderBy?: ChoiceOrderByWithRelationInput | ChoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Choices.
     */
    cursor?: ChoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Choices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Choices.
     */
    skip?: number
    distinct?: ChoiceScalarFieldEnum | ChoiceScalarFieldEnum[]
  }

  /**
   * Choice create
   */
  export type ChoiceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Choice
     */
    select?: ChoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Choice
     */
    omit?: ChoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoiceInclude<ExtArgs> | null
    /**
     * The data needed to create a Choice.
     */
    data: XOR<ChoiceCreateInput, ChoiceUncheckedCreateInput>
  }

  /**
   * Choice createMany
   */
  export type ChoiceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Choices.
     */
    data: ChoiceCreateManyInput | ChoiceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Choice update
   */
  export type ChoiceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Choice
     */
    select?: ChoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Choice
     */
    omit?: ChoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoiceInclude<ExtArgs> | null
    /**
     * The data needed to update a Choice.
     */
    data: XOR<ChoiceUpdateInput, ChoiceUncheckedUpdateInput>
    /**
     * Choose, which Choice to update.
     */
    where: ChoiceWhereUniqueInput
  }

  /**
   * Choice updateMany
   */
  export type ChoiceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Choices.
     */
    data: XOR<ChoiceUpdateManyMutationInput, ChoiceUncheckedUpdateManyInput>
    /**
     * Filter which Choices to update
     */
    where?: ChoiceWhereInput
    /**
     * Limit how many Choices to update.
     */
    limit?: number
  }

  /**
   * Choice upsert
   */
  export type ChoiceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Choice
     */
    select?: ChoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Choice
     */
    omit?: ChoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoiceInclude<ExtArgs> | null
    /**
     * The filter to search for the Choice to update in case it exists.
     */
    where: ChoiceWhereUniqueInput
    /**
     * In case the Choice found by the `where` argument doesn't exist, create a new Choice with this data.
     */
    create: XOR<ChoiceCreateInput, ChoiceUncheckedCreateInput>
    /**
     * In case the Choice was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChoiceUpdateInput, ChoiceUncheckedUpdateInput>
  }

  /**
   * Choice delete
   */
  export type ChoiceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Choice
     */
    select?: ChoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Choice
     */
    omit?: ChoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoiceInclude<ExtArgs> | null
    /**
     * Filter which Choice to delete.
     */
    where: ChoiceWhereUniqueInput
  }

  /**
   * Choice deleteMany
   */
  export type ChoiceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Choices to delete
     */
    where?: ChoiceWhereInput
    /**
     * Limit how many Choices to delete.
     */
    limit?: number
  }

  /**
   * Choice.selected_answers
   */
  export type Choice$selected_answersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestAnswer
     */
    select?: TestAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestAnswer
     */
    omit?: TestAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestAnswerInclude<ExtArgs> | null
    where?: TestAnswerWhereInput
    orderBy?: TestAnswerOrderByWithRelationInput | TestAnswerOrderByWithRelationInput[]
    cursor?: TestAnswerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TestAnswerScalarFieldEnum | TestAnswerScalarFieldEnum[]
  }

  /**
   * Choice without action
   */
  export type ChoiceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Choice
     */
    select?: ChoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Choice
     */
    omit?: ChoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoiceInclude<ExtArgs> | null
  }


  /**
   * Model Test
   */

  export type AggregateTest = {
    _count: TestCountAggregateOutputType | null
    _avg: TestAvgAggregateOutputType | null
    _sum: TestSumAggregateOutputType | null
    _min: TestMinAggregateOutputType | null
    _max: TestMaxAggregateOutputType | null
  }

  export type TestAvgAggregateOutputType = {
    test_id: number | null
    candidate_id: number | null
    total_score: number | null
  }

  export type TestSumAggregateOutputType = {
    test_id: number | null
    candidate_id: number | null
    total_score: number | null
  }

  export type TestMinAggregateOutputType = {
    test_id: number | null
    candidate_id: number | null
    total_score: number | null
    created_at: Date | null
    completed_at: Date | null
  }

  export type TestMaxAggregateOutputType = {
    test_id: number | null
    candidate_id: number | null
    total_score: number | null
    created_at: Date | null
    completed_at: Date | null
  }

  export type TestCountAggregateOutputType = {
    test_id: number
    candidate_id: number
    total_score: number
    created_at: number
    completed_at: number
    _all: number
  }


  export type TestAvgAggregateInputType = {
    test_id?: true
    candidate_id?: true
    total_score?: true
  }

  export type TestSumAggregateInputType = {
    test_id?: true
    candidate_id?: true
    total_score?: true
  }

  export type TestMinAggregateInputType = {
    test_id?: true
    candidate_id?: true
    total_score?: true
    created_at?: true
    completed_at?: true
  }

  export type TestMaxAggregateInputType = {
    test_id?: true
    candidate_id?: true
    total_score?: true
    created_at?: true
    completed_at?: true
  }

  export type TestCountAggregateInputType = {
    test_id?: true
    candidate_id?: true
    total_score?: true
    created_at?: true
    completed_at?: true
    _all?: true
  }

  export type TestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Test to aggregate.
     */
    where?: TestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tests to fetch.
     */
    orderBy?: TestOrderByWithRelationInput | TestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tests
    **/
    _count?: true | TestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TestAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TestSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TestMaxAggregateInputType
  }

  export type GetTestAggregateType<T extends TestAggregateArgs> = {
        [P in keyof T & keyof AggregateTest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTest[P]>
      : GetScalarType<T[P], AggregateTest[P]>
  }




  export type TestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TestWhereInput
    orderBy?: TestOrderByWithAggregationInput | TestOrderByWithAggregationInput[]
    by: TestScalarFieldEnum[] | TestScalarFieldEnum
    having?: TestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TestCountAggregateInputType | true
    _avg?: TestAvgAggregateInputType
    _sum?: TestSumAggregateInputType
    _min?: TestMinAggregateInputType
    _max?: TestMaxAggregateInputType
  }

  export type TestGroupByOutputType = {
    test_id: number
    candidate_id: number
    total_score: number | null
    created_at: Date
    completed_at: Date | null
    _count: TestCountAggregateOutputType | null
    _avg: TestAvgAggregateOutputType | null
    _sum: TestSumAggregateOutputType | null
    _min: TestMinAggregateOutputType | null
    _max: TestMaxAggregateOutputType | null
  }

  type GetTestGroupByPayload<T extends TestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TestGroupByOutputType[P]>
            : GetScalarType<T[P], TestGroupByOutputType[P]>
        }
      >
    >


  export type TestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    test_id?: boolean
    candidate_id?: boolean
    total_score?: boolean
    created_at?: boolean
    completed_at?: boolean
    candidate?: boolean | CandidateDefaultArgs<ExtArgs>
    test_questions?: boolean | Test$test_questionsArgs<ExtArgs>
    test_answers?: boolean | Test$test_answersArgs<ExtArgs>
    _count?: boolean | TestCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["test"]>



  export type TestSelectScalar = {
    test_id?: boolean
    candidate_id?: boolean
    total_score?: boolean
    created_at?: boolean
    completed_at?: boolean
  }

  export type TestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"test_id" | "candidate_id" | "total_score" | "created_at" | "completed_at", ExtArgs["result"]["test"]>
  export type TestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    candidate?: boolean | CandidateDefaultArgs<ExtArgs>
    test_questions?: boolean | Test$test_questionsArgs<ExtArgs>
    test_answers?: boolean | Test$test_answersArgs<ExtArgs>
    _count?: boolean | TestCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $TestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Test"
    objects: {
      candidate: Prisma.$CandidatePayload<ExtArgs>
      test_questions: Prisma.$TestQuestionPayload<ExtArgs>[]
      test_answers: Prisma.$TestAnswerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      test_id: number
      candidate_id: number
      total_score: number | null
      created_at: Date
      completed_at: Date | null
    }, ExtArgs["result"]["test"]>
    composites: {}
  }

  type TestGetPayload<S extends boolean | null | undefined | TestDefaultArgs> = $Result.GetResult<Prisma.$TestPayload, S>

  type TestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TestCountAggregateInputType | true
    }

  export interface TestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Test'], meta: { name: 'Test' } }
    /**
     * Find zero or one Test that matches the filter.
     * @param {TestFindUniqueArgs} args - Arguments to find a Test
     * @example
     * // Get one Test
     * const test = await prisma.test.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TestFindUniqueArgs>(args: SelectSubset<T, TestFindUniqueArgs<ExtArgs>>): Prisma__TestClient<$Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Test that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TestFindUniqueOrThrowArgs} args - Arguments to find a Test
     * @example
     * // Get one Test
     * const test = await prisma.test.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TestFindUniqueOrThrowArgs>(args: SelectSubset<T, TestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TestClient<$Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Test that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestFindFirstArgs} args - Arguments to find a Test
     * @example
     * // Get one Test
     * const test = await prisma.test.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TestFindFirstArgs>(args?: SelectSubset<T, TestFindFirstArgs<ExtArgs>>): Prisma__TestClient<$Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Test that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestFindFirstOrThrowArgs} args - Arguments to find a Test
     * @example
     * // Get one Test
     * const test = await prisma.test.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TestFindFirstOrThrowArgs>(args?: SelectSubset<T, TestFindFirstOrThrowArgs<ExtArgs>>): Prisma__TestClient<$Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tests
     * const tests = await prisma.test.findMany()
     * 
     * // Get first 10 Tests
     * const tests = await prisma.test.findMany({ take: 10 })
     * 
     * // Only select the `test_id`
     * const testWithTest_idOnly = await prisma.test.findMany({ select: { test_id: true } })
     * 
     */
    findMany<T extends TestFindManyArgs>(args?: SelectSubset<T, TestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Test.
     * @param {TestCreateArgs} args - Arguments to create a Test.
     * @example
     * // Create one Test
     * const Test = await prisma.test.create({
     *   data: {
     *     // ... data to create a Test
     *   }
     * })
     * 
     */
    create<T extends TestCreateArgs>(args: SelectSubset<T, TestCreateArgs<ExtArgs>>): Prisma__TestClient<$Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tests.
     * @param {TestCreateManyArgs} args - Arguments to create many Tests.
     * @example
     * // Create many Tests
     * const test = await prisma.test.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TestCreateManyArgs>(args?: SelectSubset<T, TestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Test.
     * @param {TestDeleteArgs} args - Arguments to delete one Test.
     * @example
     * // Delete one Test
     * const Test = await prisma.test.delete({
     *   where: {
     *     // ... filter to delete one Test
     *   }
     * })
     * 
     */
    delete<T extends TestDeleteArgs>(args: SelectSubset<T, TestDeleteArgs<ExtArgs>>): Prisma__TestClient<$Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Test.
     * @param {TestUpdateArgs} args - Arguments to update one Test.
     * @example
     * // Update one Test
     * const test = await prisma.test.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TestUpdateArgs>(args: SelectSubset<T, TestUpdateArgs<ExtArgs>>): Prisma__TestClient<$Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tests.
     * @param {TestDeleteManyArgs} args - Arguments to filter Tests to delete.
     * @example
     * // Delete a few Tests
     * const { count } = await prisma.test.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TestDeleteManyArgs>(args?: SelectSubset<T, TestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tests
     * const test = await prisma.test.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TestUpdateManyArgs>(args: SelectSubset<T, TestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Test.
     * @param {TestUpsertArgs} args - Arguments to update or create a Test.
     * @example
     * // Update or create a Test
     * const test = await prisma.test.upsert({
     *   create: {
     *     // ... data to create a Test
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Test we want to update
     *   }
     * })
     */
    upsert<T extends TestUpsertArgs>(args: SelectSubset<T, TestUpsertArgs<ExtArgs>>): Prisma__TestClient<$Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestCountArgs} args - Arguments to filter Tests to count.
     * @example
     * // Count the number of Tests
     * const count = await prisma.test.count({
     *   where: {
     *     // ... the filter for the Tests we want to count
     *   }
     * })
    **/
    count<T extends TestCountArgs>(
      args?: Subset<T, TestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Test.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TestAggregateArgs>(args: Subset<T, TestAggregateArgs>): Prisma.PrismaPromise<GetTestAggregateType<T>>

    /**
     * Group by Test.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TestGroupByArgs['orderBy'] }
        : { orderBy?: TestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Test model
   */
  readonly fields: TestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Test.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    candidate<T extends CandidateDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CandidateDefaultArgs<ExtArgs>>): Prisma__CandidateClient<$Result.GetResult<Prisma.$CandidatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    test_questions<T extends Test$test_questionsArgs<ExtArgs> = {}>(args?: Subset<T, Test$test_questionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestQuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    test_answers<T extends Test$test_answersArgs<ExtArgs> = {}>(args?: Subset<T, Test$test_answersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestAnswerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Test model
   */
  interface TestFieldRefs {
    readonly test_id: FieldRef<"Test", 'Int'>
    readonly candidate_id: FieldRef<"Test", 'Int'>
    readonly total_score: FieldRef<"Test", 'Int'>
    readonly created_at: FieldRef<"Test", 'DateTime'>
    readonly completed_at: FieldRef<"Test", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Test findUnique
   */
  export type TestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Test
     */
    omit?: TestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestInclude<ExtArgs> | null
    /**
     * Filter, which Test to fetch.
     */
    where: TestWhereUniqueInput
  }

  /**
   * Test findUniqueOrThrow
   */
  export type TestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Test
     */
    omit?: TestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestInclude<ExtArgs> | null
    /**
     * Filter, which Test to fetch.
     */
    where: TestWhereUniqueInput
  }

  /**
   * Test findFirst
   */
  export type TestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Test
     */
    omit?: TestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestInclude<ExtArgs> | null
    /**
     * Filter, which Test to fetch.
     */
    where?: TestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tests to fetch.
     */
    orderBy?: TestOrderByWithRelationInput | TestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tests.
     */
    cursor?: TestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tests.
     */
    distinct?: TestScalarFieldEnum | TestScalarFieldEnum[]
  }

  /**
   * Test findFirstOrThrow
   */
  export type TestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Test
     */
    omit?: TestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestInclude<ExtArgs> | null
    /**
     * Filter, which Test to fetch.
     */
    where?: TestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tests to fetch.
     */
    orderBy?: TestOrderByWithRelationInput | TestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tests.
     */
    cursor?: TestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tests.
     */
    distinct?: TestScalarFieldEnum | TestScalarFieldEnum[]
  }

  /**
   * Test findMany
   */
  export type TestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Test
     */
    omit?: TestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestInclude<ExtArgs> | null
    /**
     * Filter, which Tests to fetch.
     */
    where?: TestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tests to fetch.
     */
    orderBy?: TestOrderByWithRelationInput | TestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tests.
     */
    cursor?: TestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tests.
     */
    skip?: number
    distinct?: TestScalarFieldEnum | TestScalarFieldEnum[]
  }

  /**
   * Test create
   */
  export type TestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Test
     */
    omit?: TestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestInclude<ExtArgs> | null
    /**
     * The data needed to create a Test.
     */
    data: XOR<TestCreateInput, TestUncheckedCreateInput>
  }

  /**
   * Test createMany
   */
  export type TestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tests.
     */
    data: TestCreateManyInput | TestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Test update
   */
  export type TestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Test
     */
    omit?: TestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestInclude<ExtArgs> | null
    /**
     * The data needed to update a Test.
     */
    data: XOR<TestUpdateInput, TestUncheckedUpdateInput>
    /**
     * Choose, which Test to update.
     */
    where: TestWhereUniqueInput
  }

  /**
   * Test updateMany
   */
  export type TestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tests.
     */
    data: XOR<TestUpdateManyMutationInput, TestUncheckedUpdateManyInput>
    /**
     * Filter which Tests to update
     */
    where?: TestWhereInput
    /**
     * Limit how many Tests to update.
     */
    limit?: number
  }

  /**
   * Test upsert
   */
  export type TestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Test
     */
    omit?: TestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestInclude<ExtArgs> | null
    /**
     * The filter to search for the Test to update in case it exists.
     */
    where: TestWhereUniqueInput
    /**
     * In case the Test found by the `where` argument doesn't exist, create a new Test with this data.
     */
    create: XOR<TestCreateInput, TestUncheckedCreateInput>
    /**
     * In case the Test was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TestUpdateInput, TestUncheckedUpdateInput>
  }

  /**
   * Test delete
   */
  export type TestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Test
     */
    omit?: TestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestInclude<ExtArgs> | null
    /**
     * Filter which Test to delete.
     */
    where: TestWhereUniqueInput
  }

  /**
   * Test deleteMany
   */
  export type TestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tests to delete
     */
    where?: TestWhereInput
    /**
     * Limit how many Tests to delete.
     */
    limit?: number
  }

  /**
   * Test.test_questions
   */
  export type Test$test_questionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestQuestion
     */
    select?: TestQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestQuestion
     */
    omit?: TestQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestQuestionInclude<ExtArgs> | null
    where?: TestQuestionWhereInput
    orderBy?: TestQuestionOrderByWithRelationInput | TestQuestionOrderByWithRelationInput[]
    cursor?: TestQuestionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TestQuestionScalarFieldEnum | TestQuestionScalarFieldEnum[]
  }

  /**
   * Test.test_answers
   */
  export type Test$test_answersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestAnswer
     */
    select?: TestAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestAnswer
     */
    omit?: TestAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestAnswerInclude<ExtArgs> | null
    where?: TestAnswerWhereInput
    orderBy?: TestAnswerOrderByWithRelationInput | TestAnswerOrderByWithRelationInput[]
    cursor?: TestAnswerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TestAnswerScalarFieldEnum | TestAnswerScalarFieldEnum[]
  }

  /**
   * Test without action
   */
  export type TestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Test
     */
    omit?: TestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestInclude<ExtArgs> | null
  }


  /**
   * Model TestQuestion
   */

  export type AggregateTestQuestion = {
    _count: TestQuestionCountAggregateOutputType | null
    _avg: TestQuestionAvgAggregateOutputType | null
    _sum: TestQuestionSumAggregateOutputType | null
    _min: TestQuestionMinAggregateOutputType | null
    _max: TestQuestionMaxAggregateOutputType | null
  }

  export type TestQuestionAvgAggregateOutputType = {
    test_question_id: number | null
    test_id: number | null
    question_id: number | null
  }

  export type TestQuestionSumAggregateOutputType = {
    test_question_id: number | null
    test_id: number | null
    question_id: number | null
  }

  export type TestQuestionMinAggregateOutputType = {
    test_question_id: number | null
    test_id: number | null
    question_id: number | null
  }

  export type TestQuestionMaxAggregateOutputType = {
    test_question_id: number | null
    test_id: number | null
    question_id: number | null
  }

  export type TestQuestionCountAggregateOutputType = {
    test_question_id: number
    test_id: number
    question_id: number
    _all: number
  }


  export type TestQuestionAvgAggregateInputType = {
    test_question_id?: true
    test_id?: true
    question_id?: true
  }

  export type TestQuestionSumAggregateInputType = {
    test_question_id?: true
    test_id?: true
    question_id?: true
  }

  export type TestQuestionMinAggregateInputType = {
    test_question_id?: true
    test_id?: true
    question_id?: true
  }

  export type TestQuestionMaxAggregateInputType = {
    test_question_id?: true
    test_id?: true
    question_id?: true
  }

  export type TestQuestionCountAggregateInputType = {
    test_question_id?: true
    test_id?: true
    question_id?: true
    _all?: true
  }

  export type TestQuestionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TestQuestion to aggregate.
     */
    where?: TestQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestQuestions to fetch.
     */
    orderBy?: TestQuestionOrderByWithRelationInput | TestQuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TestQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestQuestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TestQuestions
    **/
    _count?: true | TestQuestionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TestQuestionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TestQuestionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TestQuestionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TestQuestionMaxAggregateInputType
  }

  export type GetTestQuestionAggregateType<T extends TestQuestionAggregateArgs> = {
        [P in keyof T & keyof AggregateTestQuestion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTestQuestion[P]>
      : GetScalarType<T[P], AggregateTestQuestion[P]>
  }




  export type TestQuestionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TestQuestionWhereInput
    orderBy?: TestQuestionOrderByWithAggregationInput | TestQuestionOrderByWithAggregationInput[]
    by: TestQuestionScalarFieldEnum[] | TestQuestionScalarFieldEnum
    having?: TestQuestionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TestQuestionCountAggregateInputType | true
    _avg?: TestQuestionAvgAggregateInputType
    _sum?: TestQuestionSumAggregateInputType
    _min?: TestQuestionMinAggregateInputType
    _max?: TestQuestionMaxAggregateInputType
  }

  export type TestQuestionGroupByOutputType = {
    test_question_id: number
    test_id: number
    question_id: number
    _count: TestQuestionCountAggregateOutputType | null
    _avg: TestQuestionAvgAggregateOutputType | null
    _sum: TestQuestionSumAggregateOutputType | null
    _min: TestQuestionMinAggregateOutputType | null
    _max: TestQuestionMaxAggregateOutputType | null
  }

  type GetTestQuestionGroupByPayload<T extends TestQuestionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TestQuestionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TestQuestionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TestQuestionGroupByOutputType[P]>
            : GetScalarType<T[P], TestQuestionGroupByOutputType[P]>
        }
      >
    >


  export type TestQuestionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    test_question_id?: boolean
    test_id?: boolean
    question_id?: boolean
    test?: boolean | TestDefaultArgs<ExtArgs>
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["testQuestion"]>



  export type TestQuestionSelectScalar = {
    test_question_id?: boolean
    test_id?: boolean
    question_id?: boolean
  }

  export type TestQuestionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"test_question_id" | "test_id" | "question_id", ExtArgs["result"]["testQuestion"]>
  export type TestQuestionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    test?: boolean | TestDefaultArgs<ExtArgs>
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }

  export type $TestQuestionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TestQuestion"
    objects: {
      test: Prisma.$TestPayload<ExtArgs>
      question: Prisma.$QuestionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      test_question_id: number
      test_id: number
      question_id: number
    }, ExtArgs["result"]["testQuestion"]>
    composites: {}
  }

  type TestQuestionGetPayload<S extends boolean | null | undefined | TestQuestionDefaultArgs> = $Result.GetResult<Prisma.$TestQuestionPayload, S>

  type TestQuestionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TestQuestionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TestQuestionCountAggregateInputType | true
    }

  export interface TestQuestionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TestQuestion'], meta: { name: 'TestQuestion' } }
    /**
     * Find zero or one TestQuestion that matches the filter.
     * @param {TestQuestionFindUniqueArgs} args - Arguments to find a TestQuestion
     * @example
     * // Get one TestQuestion
     * const testQuestion = await prisma.testQuestion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TestQuestionFindUniqueArgs>(args: SelectSubset<T, TestQuestionFindUniqueArgs<ExtArgs>>): Prisma__TestQuestionClient<$Result.GetResult<Prisma.$TestQuestionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TestQuestion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TestQuestionFindUniqueOrThrowArgs} args - Arguments to find a TestQuestion
     * @example
     * // Get one TestQuestion
     * const testQuestion = await prisma.testQuestion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TestQuestionFindUniqueOrThrowArgs>(args: SelectSubset<T, TestQuestionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TestQuestionClient<$Result.GetResult<Prisma.$TestQuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TestQuestion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestQuestionFindFirstArgs} args - Arguments to find a TestQuestion
     * @example
     * // Get one TestQuestion
     * const testQuestion = await prisma.testQuestion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TestQuestionFindFirstArgs>(args?: SelectSubset<T, TestQuestionFindFirstArgs<ExtArgs>>): Prisma__TestQuestionClient<$Result.GetResult<Prisma.$TestQuestionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TestQuestion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestQuestionFindFirstOrThrowArgs} args - Arguments to find a TestQuestion
     * @example
     * // Get one TestQuestion
     * const testQuestion = await prisma.testQuestion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TestQuestionFindFirstOrThrowArgs>(args?: SelectSubset<T, TestQuestionFindFirstOrThrowArgs<ExtArgs>>): Prisma__TestQuestionClient<$Result.GetResult<Prisma.$TestQuestionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TestQuestions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestQuestionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TestQuestions
     * const testQuestions = await prisma.testQuestion.findMany()
     * 
     * // Get first 10 TestQuestions
     * const testQuestions = await prisma.testQuestion.findMany({ take: 10 })
     * 
     * // Only select the `test_question_id`
     * const testQuestionWithTest_question_idOnly = await prisma.testQuestion.findMany({ select: { test_question_id: true } })
     * 
     */
    findMany<T extends TestQuestionFindManyArgs>(args?: SelectSubset<T, TestQuestionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestQuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TestQuestion.
     * @param {TestQuestionCreateArgs} args - Arguments to create a TestQuestion.
     * @example
     * // Create one TestQuestion
     * const TestQuestion = await prisma.testQuestion.create({
     *   data: {
     *     // ... data to create a TestQuestion
     *   }
     * })
     * 
     */
    create<T extends TestQuestionCreateArgs>(args: SelectSubset<T, TestQuestionCreateArgs<ExtArgs>>): Prisma__TestQuestionClient<$Result.GetResult<Prisma.$TestQuestionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TestQuestions.
     * @param {TestQuestionCreateManyArgs} args - Arguments to create many TestQuestions.
     * @example
     * // Create many TestQuestions
     * const testQuestion = await prisma.testQuestion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TestQuestionCreateManyArgs>(args?: SelectSubset<T, TestQuestionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TestQuestion.
     * @param {TestQuestionDeleteArgs} args - Arguments to delete one TestQuestion.
     * @example
     * // Delete one TestQuestion
     * const TestQuestion = await prisma.testQuestion.delete({
     *   where: {
     *     // ... filter to delete one TestQuestion
     *   }
     * })
     * 
     */
    delete<T extends TestQuestionDeleteArgs>(args: SelectSubset<T, TestQuestionDeleteArgs<ExtArgs>>): Prisma__TestQuestionClient<$Result.GetResult<Prisma.$TestQuestionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TestQuestion.
     * @param {TestQuestionUpdateArgs} args - Arguments to update one TestQuestion.
     * @example
     * // Update one TestQuestion
     * const testQuestion = await prisma.testQuestion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TestQuestionUpdateArgs>(args: SelectSubset<T, TestQuestionUpdateArgs<ExtArgs>>): Prisma__TestQuestionClient<$Result.GetResult<Prisma.$TestQuestionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TestQuestions.
     * @param {TestQuestionDeleteManyArgs} args - Arguments to filter TestQuestions to delete.
     * @example
     * // Delete a few TestQuestions
     * const { count } = await prisma.testQuestion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TestQuestionDeleteManyArgs>(args?: SelectSubset<T, TestQuestionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TestQuestions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestQuestionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TestQuestions
     * const testQuestion = await prisma.testQuestion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TestQuestionUpdateManyArgs>(args: SelectSubset<T, TestQuestionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TestQuestion.
     * @param {TestQuestionUpsertArgs} args - Arguments to update or create a TestQuestion.
     * @example
     * // Update or create a TestQuestion
     * const testQuestion = await prisma.testQuestion.upsert({
     *   create: {
     *     // ... data to create a TestQuestion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TestQuestion we want to update
     *   }
     * })
     */
    upsert<T extends TestQuestionUpsertArgs>(args: SelectSubset<T, TestQuestionUpsertArgs<ExtArgs>>): Prisma__TestQuestionClient<$Result.GetResult<Prisma.$TestQuestionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TestQuestions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestQuestionCountArgs} args - Arguments to filter TestQuestions to count.
     * @example
     * // Count the number of TestQuestions
     * const count = await prisma.testQuestion.count({
     *   where: {
     *     // ... the filter for the TestQuestions we want to count
     *   }
     * })
    **/
    count<T extends TestQuestionCountArgs>(
      args?: Subset<T, TestQuestionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TestQuestionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TestQuestion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestQuestionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TestQuestionAggregateArgs>(args: Subset<T, TestQuestionAggregateArgs>): Prisma.PrismaPromise<GetTestQuestionAggregateType<T>>

    /**
     * Group by TestQuestion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestQuestionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TestQuestionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TestQuestionGroupByArgs['orderBy'] }
        : { orderBy?: TestQuestionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TestQuestionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTestQuestionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TestQuestion model
   */
  readonly fields: TestQuestionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TestQuestion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TestQuestionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    test<T extends TestDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TestDefaultArgs<ExtArgs>>): Prisma__TestClient<$Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    question<T extends QuestionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuestionDefaultArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TestQuestion model
   */
  interface TestQuestionFieldRefs {
    readonly test_question_id: FieldRef<"TestQuestion", 'Int'>
    readonly test_id: FieldRef<"TestQuestion", 'Int'>
    readonly question_id: FieldRef<"TestQuestion", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * TestQuestion findUnique
   */
  export type TestQuestionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestQuestion
     */
    select?: TestQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestQuestion
     */
    omit?: TestQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestQuestionInclude<ExtArgs> | null
    /**
     * Filter, which TestQuestion to fetch.
     */
    where: TestQuestionWhereUniqueInput
  }

  /**
   * TestQuestion findUniqueOrThrow
   */
  export type TestQuestionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestQuestion
     */
    select?: TestQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestQuestion
     */
    omit?: TestQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestQuestionInclude<ExtArgs> | null
    /**
     * Filter, which TestQuestion to fetch.
     */
    where: TestQuestionWhereUniqueInput
  }

  /**
   * TestQuestion findFirst
   */
  export type TestQuestionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestQuestion
     */
    select?: TestQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestQuestion
     */
    omit?: TestQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestQuestionInclude<ExtArgs> | null
    /**
     * Filter, which TestQuestion to fetch.
     */
    where?: TestQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestQuestions to fetch.
     */
    orderBy?: TestQuestionOrderByWithRelationInput | TestQuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TestQuestions.
     */
    cursor?: TestQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestQuestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TestQuestions.
     */
    distinct?: TestQuestionScalarFieldEnum | TestQuestionScalarFieldEnum[]
  }

  /**
   * TestQuestion findFirstOrThrow
   */
  export type TestQuestionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestQuestion
     */
    select?: TestQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestQuestion
     */
    omit?: TestQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestQuestionInclude<ExtArgs> | null
    /**
     * Filter, which TestQuestion to fetch.
     */
    where?: TestQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestQuestions to fetch.
     */
    orderBy?: TestQuestionOrderByWithRelationInput | TestQuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TestQuestions.
     */
    cursor?: TestQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestQuestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TestQuestions.
     */
    distinct?: TestQuestionScalarFieldEnum | TestQuestionScalarFieldEnum[]
  }

  /**
   * TestQuestion findMany
   */
  export type TestQuestionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestQuestion
     */
    select?: TestQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestQuestion
     */
    omit?: TestQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestQuestionInclude<ExtArgs> | null
    /**
     * Filter, which TestQuestions to fetch.
     */
    where?: TestQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestQuestions to fetch.
     */
    orderBy?: TestQuestionOrderByWithRelationInput | TestQuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TestQuestions.
     */
    cursor?: TestQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestQuestions.
     */
    skip?: number
    distinct?: TestQuestionScalarFieldEnum | TestQuestionScalarFieldEnum[]
  }

  /**
   * TestQuestion create
   */
  export type TestQuestionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestQuestion
     */
    select?: TestQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestQuestion
     */
    omit?: TestQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestQuestionInclude<ExtArgs> | null
    /**
     * The data needed to create a TestQuestion.
     */
    data: XOR<TestQuestionCreateInput, TestQuestionUncheckedCreateInput>
  }

  /**
   * TestQuestion createMany
   */
  export type TestQuestionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TestQuestions.
     */
    data: TestQuestionCreateManyInput | TestQuestionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TestQuestion update
   */
  export type TestQuestionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestQuestion
     */
    select?: TestQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestQuestion
     */
    omit?: TestQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestQuestionInclude<ExtArgs> | null
    /**
     * The data needed to update a TestQuestion.
     */
    data: XOR<TestQuestionUpdateInput, TestQuestionUncheckedUpdateInput>
    /**
     * Choose, which TestQuestion to update.
     */
    where: TestQuestionWhereUniqueInput
  }

  /**
   * TestQuestion updateMany
   */
  export type TestQuestionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TestQuestions.
     */
    data: XOR<TestQuestionUpdateManyMutationInput, TestQuestionUncheckedUpdateManyInput>
    /**
     * Filter which TestQuestions to update
     */
    where?: TestQuestionWhereInput
    /**
     * Limit how many TestQuestions to update.
     */
    limit?: number
  }

  /**
   * TestQuestion upsert
   */
  export type TestQuestionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestQuestion
     */
    select?: TestQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestQuestion
     */
    omit?: TestQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestQuestionInclude<ExtArgs> | null
    /**
     * The filter to search for the TestQuestion to update in case it exists.
     */
    where: TestQuestionWhereUniqueInput
    /**
     * In case the TestQuestion found by the `where` argument doesn't exist, create a new TestQuestion with this data.
     */
    create: XOR<TestQuestionCreateInput, TestQuestionUncheckedCreateInput>
    /**
     * In case the TestQuestion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TestQuestionUpdateInput, TestQuestionUncheckedUpdateInput>
  }

  /**
   * TestQuestion delete
   */
  export type TestQuestionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestQuestion
     */
    select?: TestQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestQuestion
     */
    omit?: TestQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestQuestionInclude<ExtArgs> | null
    /**
     * Filter which TestQuestion to delete.
     */
    where: TestQuestionWhereUniqueInput
  }

  /**
   * TestQuestion deleteMany
   */
  export type TestQuestionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TestQuestions to delete
     */
    where?: TestQuestionWhereInput
    /**
     * Limit how many TestQuestions to delete.
     */
    limit?: number
  }

  /**
   * TestQuestion without action
   */
  export type TestQuestionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestQuestion
     */
    select?: TestQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestQuestion
     */
    omit?: TestQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestQuestionInclude<ExtArgs> | null
  }


  /**
   * Model TestAnswer
   */

  export type AggregateTestAnswer = {
    _count: TestAnswerCountAggregateOutputType | null
    _avg: TestAnswerAvgAggregateOutputType | null
    _sum: TestAnswerSumAggregateOutputType | null
    _min: TestAnswerMinAggregateOutputType | null
    _max: TestAnswerMaxAggregateOutputType | null
  }

  export type TestAnswerAvgAggregateOutputType = {
    test_answer_id: number | null
    test_id: number | null
    question_id: number | null
    selected_choice_id: number | null
  }

  export type TestAnswerSumAggregateOutputType = {
    test_answer_id: number | null
    test_id: number | null
    question_id: number | null
    selected_choice_id: number | null
  }

  export type TestAnswerMinAggregateOutputType = {
    test_answer_id: number | null
    test_id: number | null
    question_id: number | null
    selected_choice_id: number | null
    is_correct: boolean | null
  }

  export type TestAnswerMaxAggregateOutputType = {
    test_answer_id: number | null
    test_id: number | null
    question_id: number | null
    selected_choice_id: number | null
    is_correct: boolean | null
  }

  export type TestAnswerCountAggregateOutputType = {
    test_answer_id: number
    test_id: number
    question_id: number
    selected_choice_id: number
    is_correct: number
    _all: number
  }


  export type TestAnswerAvgAggregateInputType = {
    test_answer_id?: true
    test_id?: true
    question_id?: true
    selected_choice_id?: true
  }

  export type TestAnswerSumAggregateInputType = {
    test_answer_id?: true
    test_id?: true
    question_id?: true
    selected_choice_id?: true
  }

  export type TestAnswerMinAggregateInputType = {
    test_answer_id?: true
    test_id?: true
    question_id?: true
    selected_choice_id?: true
    is_correct?: true
  }

  export type TestAnswerMaxAggregateInputType = {
    test_answer_id?: true
    test_id?: true
    question_id?: true
    selected_choice_id?: true
    is_correct?: true
  }

  export type TestAnswerCountAggregateInputType = {
    test_answer_id?: true
    test_id?: true
    question_id?: true
    selected_choice_id?: true
    is_correct?: true
    _all?: true
  }

  export type TestAnswerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TestAnswer to aggregate.
     */
    where?: TestAnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestAnswers to fetch.
     */
    orderBy?: TestAnswerOrderByWithRelationInput | TestAnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TestAnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestAnswers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestAnswers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TestAnswers
    **/
    _count?: true | TestAnswerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TestAnswerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TestAnswerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TestAnswerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TestAnswerMaxAggregateInputType
  }

  export type GetTestAnswerAggregateType<T extends TestAnswerAggregateArgs> = {
        [P in keyof T & keyof AggregateTestAnswer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTestAnswer[P]>
      : GetScalarType<T[P], AggregateTestAnswer[P]>
  }




  export type TestAnswerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TestAnswerWhereInput
    orderBy?: TestAnswerOrderByWithAggregationInput | TestAnswerOrderByWithAggregationInput[]
    by: TestAnswerScalarFieldEnum[] | TestAnswerScalarFieldEnum
    having?: TestAnswerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TestAnswerCountAggregateInputType | true
    _avg?: TestAnswerAvgAggregateInputType
    _sum?: TestAnswerSumAggregateInputType
    _min?: TestAnswerMinAggregateInputType
    _max?: TestAnswerMaxAggregateInputType
  }

  export type TestAnswerGroupByOutputType = {
    test_answer_id: number
    test_id: number
    question_id: number
    selected_choice_id: number | null
    is_correct: boolean | null
    _count: TestAnswerCountAggregateOutputType | null
    _avg: TestAnswerAvgAggregateOutputType | null
    _sum: TestAnswerSumAggregateOutputType | null
    _min: TestAnswerMinAggregateOutputType | null
    _max: TestAnswerMaxAggregateOutputType | null
  }

  type GetTestAnswerGroupByPayload<T extends TestAnswerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TestAnswerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TestAnswerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TestAnswerGroupByOutputType[P]>
            : GetScalarType<T[P], TestAnswerGroupByOutputType[P]>
        }
      >
    >


  export type TestAnswerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    test_answer_id?: boolean
    test_id?: boolean
    question_id?: boolean
    selected_choice_id?: boolean
    is_correct?: boolean
    test?: boolean | TestDefaultArgs<ExtArgs>
    question?: boolean | QuestionDefaultArgs<ExtArgs>
    selected_choice?: boolean | TestAnswer$selected_choiceArgs<ExtArgs>
  }, ExtArgs["result"]["testAnswer"]>



  export type TestAnswerSelectScalar = {
    test_answer_id?: boolean
    test_id?: boolean
    question_id?: boolean
    selected_choice_id?: boolean
    is_correct?: boolean
  }

  export type TestAnswerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"test_answer_id" | "test_id" | "question_id" | "selected_choice_id" | "is_correct", ExtArgs["result"]["testAnswer"]>
  export type TestAnswerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    test?: boolean | TestDefaultArgs<ExtArgs>
    question?: boolean | QuestionDefaultArgs<ExtArgs>
    selected_choice?: boolean | TestAnswer$selected_choiceArgs<ExtArgs>
  }

  export type $TestAnswerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TestAnswer"
    objects: {
      test: Prisma.$TestPayload<ExtArgs>
      question: Prisma.$QuestionPayload<ExtArgs>
      selected_choice: Prisma.$ChoicePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      test_answer_id: number
      test_id: number
      question_id: number
      selected_choice_id: number | null
      is_correct: boolean | null
    }, ExtArgs["result"]["testAnswer"]>
    composites: {}
  }

  type TestAnswerGetPayload<S extends boolean | null | undefined | TestAnswerDefaultArgs> = $Result.GetResult<Prisma.$TestAnswerPayload, S>

  type TestAnswerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TestAnswerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TestAnswerCountAggregateInputType | true
    }

  export interface TestAnswerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TestAnswer'], meta: { name: 'TestAnswer' } }
    /**
     * Find zero or one TestAnswer that matches the filter.
     * @param {TestAnswerFindUniqueArgs} args - Arguments to find a TestAnswer
     * @example
     * // Get one TestAnswer
     * const testAnswer = await prisma.testAnswer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TestAnswerFindUniqueArgs>(args: SelectSubset<T, TestAnswerFindUniqueArgs<ExtArgs>>): Prisma__TestAnswerClient<$Result.GetResult<Prisma.$TestAnswerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TestAnswer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TestAnswerFindUniqueOrThrowArgs} args - Arguments to find a TestAnswer
     * @example
     * // Get one TestAnswer
     * const testAnswer = await prisma.testAnswer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TestAnswerFindUniqueOrThrowArgs>(args: SelectSubset<T, TestAnswerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TestAnswerClient<$Result.GetResult<Prisma.$TestAnswerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TestAnswer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestAnswerFindFirstArgs} args - Arguments to find a TestAnswer
     * @example
     * // Get one TestAnswer
     * const testAnswer = await prisma.testAnswer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TestAnswerFindFirstArgs>(args?: SelectSubset<T, TestAnswerFindFirstArgs<ExtArgs>>): Prisma__TestAnswerClient<$Result.GetResult<Prisma.$TestAnswerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TestAnswer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestAnswerFindFirstOrThrowArgs} args - Arguments to find a TestAnswer
     * @example
     * // Get one TestAnswer
     * const testAnswer = await prisma.testAnswer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TestAnswerFindFirstOrThrowArgs>(args?: SelectSubset<T, TestAnswerFindFirstOrThrowArgs<ExtArgs>>): Prisma__TestAnswerClient<$Result.GetResult<Prisma.$TestAnswerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TestAnswers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestAnswerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TestAnswers
     * const testAnswers = await prisma.testAnswer.findMany()
     * 
     * // Get first 10 TestAnswers
     * const testAnswers = await prisma.testAnswer.findMany({ take: 10 })
     * 
     * // Only select the `test_answer_id`
     * const testAnswerWithTest_answer_idOnly = await prisma.testAnswer.findMany({ select: { test_answer_id: true } })
     * 
     */
    findMany<T extends TestAnswerFindManyArgs>(args?: SelectSubset<T, TestAnswerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestAnswerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TestAnswer.
     * @param {TestAnswerCreateArgs} args - Arguments to create a TestAnswer.
     * @example
     * // Create one TestAnswer
     * const TestAnswer = await prisma.testAnswer.create({
     *   data: {
     *     // ... data to create a TestAnswer
     *   }
     * })
     * 
     */
    create<T extends TestAnswerCreateArgs>(args: SelectSubset<T, TestAnswerCreateArgs<ExtArgs>>): Prisma__TestAnswerClient<$Result.GetResult<Prisma.$TestAnswerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TestAnswers.
     * @param {TestAnswerCreateManyArgs} args - Arguments to create many TestAnswers.
     * @example
     * // Create many TestAnswers
     * const testAnswer = await prisma.testAnswer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TestAnswerCreateManyArgs>(args?: SelectSubset<T, TestAnswerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TestAnswer.
     * @param {TestAnswerDeleteArgs} args - Arguments to delete one TestAnswer.
     * @example
     * // Delete one TestAnswer
     * const TestAnswer = await prisma.testAnswer.delete({
     *   where: {
     *     // ... filter to delete one TestAnswer
     *   }
     * })
     * 
     */
    delete<T extends TestAnswerDeleteArgs>(args: SelectSubset<T, TestAnswerDeleteArgs<ExtArgs>>): Prisma__TestAnswerClient<$Result.GetResult<Prisma.$TestAnswerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TestAnswer.
     * @param {TestAnswerUpdateArgs} args - Arguments to update one TestAnswer.
     * @example
     * // Update one TestAnswer
     * const testAnswer = await prisma.testAnswer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TestAnswerUpdateArgs>(args: SelectSubset<T, TestAnswerUpdateArgs<ExtArgs>>): Prisma__TestAnswerClient<$Result.GetResult<Prisma.$TestAnswerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TestAnswers.
     * @param {TestAnswerDeleteManyArgs} args - Arguments to filter TestAnswers to delete.
     * @example
     * // Delete a few TestAnswers
     * const { count } = await prisma.testAnswer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TestAnswerDeleteManyArgs>(args?: SelectSubset<T, TestAnswerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TestAnswers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestAnswerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TestAnswers
     * const testAnswer = await prisma.testAnswer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TestAnswerUpdateManyArgs>(args: SelectSubset<T, TestAnswerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TestAnswer.
     * @param {TestAnswerUpsertArgs} args - Arguments to update or create a TestAnswer.
     * @example
     * // Update or create a TestAnswer
     * const testAnswer = await prisma.testAnswer.upsert({
     *   create: {
     *     // ... data to create a TestAnswer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TestAnswer we want to update
     *   }
     * })
     */
    upsert<T extends TestAnswerUpsertArgs>(args: SelectSubset<T, TestAnswerUpsertArgs<ExtArgs>>): Prisma__TestAnswerClient<$Result.GetResult<Prisma.$TestAnswerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TestAnswers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestAnswerCountArgs} args - Arguments to filter TestAnswers to count.
     * @example
     * // Count the number of TestAnswers
     * const count = await prisma.testAnswer.count({
     *   where: {
     *     // ... the filter for the TestAnswers we want to count
     *   }
     * })
    **/
    count<T extends TestAnswerCountArgs>(
      args?: Subset<T, TestAnswerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TestAnswerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TestAnswer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestAnswerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TestAnswerAggregateArgs>(args: Subset<T, TestAnswerAggregateArgs>): Prisma.PrismaPromise<GetTestAnswerAggregateType<T>>

    /**
     * Group by TestAnswer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestAnswerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TestAnswerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TestAnswerGroupByArgs['orderBy'] }
        : { orderBy?: TestAnswerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TestAnswerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTestAnswerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TestAnswer model
   */
  readonly fields: TestAnswerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TestAnswer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TestAnswerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    test<T extends TestDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TestDefaultArgs<ExtArgs>>): Prisma__TestClient<$Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    question<T extends QuestionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuestionDefaultArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    selected_choice<T extends TestAnswer$selected_choiceArgs<ExtArgs> = {}>(args?: Subset<T, TestAnswer$selected_choiceArgs<ExtArgs>>): Prisma__ChoiceClient<$Result.GetResult<Prisma.$ChoicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TestAnswer model
   */
  interface TestAnswerFieldRefs {
    readonly test_answer_id: FieldRef<"TestAnswer", 'Int'>
    readonly test_id: FieldRef<"TestAnswer", 'Int'>
    readonly question_id: FieldRef<"TestAnswer", 'Int'>
    readonly selected_choice_id: FieldRef<"TestAnswer", 'Int'>
    readonly is_correct: FieldRef<"TestAnswer", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * TestAnswer findUnique
   */
  export type TestAnswerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestAnswer
     */
    select?: TestAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestAnswer
     */
    omit?: TestAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestAnswerInclude<ExtArgs> | null
    /**
     * Filter, which TestAnswer to fetch.
     */
    where: TestAnswerWhereUniqueInput
  }

  /**
   * TestAnswer findUniqueOrThrow
   */
  export type TestAnswerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestAnswer
     */
    select?: TestAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestAnswer
     */
    omit?: TestAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestAnswerInclude<ExtArgs> | null
    /**
     * Filter, which TestAnswer to fetch.
     */
    where: TestAnswerWhereUniqueInput
  }

  /**
   * TestAnswer findFirst
   */
  export type TestAnswerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestAnswer
     */
    select?: TestAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestAnswer
     */
    omit?: TestAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestAnswerInclude<ExtArgs> | null
    /**
     * Filter, which TestAnswer to fetch.
     */
    where?: TestAnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestAnswers to fetch.
     */
    orderBy?: TestAnswerOrderByWithRelationInput | TestAnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TestAnswers.
     */
    cursor?: TestAnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestAnswers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestAnswers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TestAnswers.
     */
    distinct?: TestAnswerScalarFieldEnum | TestAnswerScalarFieldEnum[]
  }

  /**
   * TestAnswer findFirstOrThrow
   */
  export type TestAnswerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestAnswer
     */
    select?: TestAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestAnswer
     */
    omit?: TestAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestAnswerInclude<ExtArgs> | null
    /**
     * Filter, which TestAnswer to fetch.
     */
    where?: TestAnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestAnswers to fetch.
     */
    orderBy?: TestAnswerOrderByWithRelationInput | TestAnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TestAnswers.
     */
    cursor?: TestAnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestAnswers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestAnswers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TestAnswers.
     */
    distinct?: TestAnswerScalarFieldEnum | TestAnswerScalarFieldEnum[]
  }

  /**
   * TestAnswer findMany
   */
  export type TestAnswerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestAnswer
     */
    select?: TestAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestAnswer
     */
    omit?: TestAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestAnswerInclude<ExtArgs> | null
    /**
     * Filter, which TestAnswers to fetch.
     */
    where?: TestAnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestAnswers to fetch.
     */
    orderBy?: TestAnswerOrderByWithRelationInput | TestAnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TestAnswers.
     */
    cursor?: TestAnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestAnswers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestAnswers.
     */
    skip?: number
    distinct?: TestAnswerScalarFieldEnum | TestAnswerScalarFieldEnum[]
  }

  /**
   * TestAnswer create
   */
  export type TestAnswerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestAnswer
     */
    select?: TestAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestAnswer
     */
    omit?: TestAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestAnswerInclude<ExtArgs> | null
    /**
     * The data needed to create a TestAnswer.
     */
    data: XOR<TestAnswerCreateInput, TestAnswerUncheckedCreateInput>
  }

  /**
   * TestAnswer createMany
   */
  export type TestAnswerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TestAnswers.
     */
    data: TestAnswerCreateManyInput | TestAnswerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TestAnswer update
   */
  export type TestAnswerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestAnswer
     */
    select?: TestAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestAnswer
     */
    omit?: TestAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestAnswerInclude<ExtArgs> | null
    /**
     * The data needed to update a TestAnswer.
     */
    data: XOR<TestAnswerUpdateInput, TestAnswerUncheckedUpdateInput>
    /**
     * Choose, which TestAnswer to update.
     */
    where: TestAnswerWhereUniqueInput
  }

  /**
   * TestAnswer updateMany
   */
  export type TestAnswerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TestAnswers.
     */
    data: XOR<TestAnswerUpdateManyMutationInput, TestAnswerUncheckedUpdateManyInput>
    /**
     * Filter which TestAnswers to update
     */
    where?: TestAnswerWhereInput
    /**
     * Limit how many TestAnswers to update.
     */
    limit?: number
  }

  /**
   * TestAnswer upsert
   */
  export type TestAnswerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestAnswer
     */
    select?: TestAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestAnswer
     */
    omit?: TestAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestAnswerInclude<ExtArgs> | null
    /**
     * The filter to search for the TestAnswer to update in case it exists.
     */
    where: TestAnswerWhereUniqueInput
    /**
     * In case the TestAnswer found by the `where` argument doesn't exist, create a new TestAnswer with this data.
     */
    create: XOR<TestAnswerCreateInput, TestAnswerUncheckedCreateInput>
    /**
     * In case the TestAnswer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TestAnswerUpdateInput, TestAnswerUncheckedUpdateInput>
  }

  /**
   * TestAnswer delete
   */
  export type TestAnswerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestAnswer
     */
    select?: TestAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestAnswer
     */
    omit?: TestAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestAnswerInclude<ExtArgs> | null
    /**
     * Filter which TestAnswer to delete.
     */
    where: TestAnswerWhereUniqueInput
  }

  /**
   * TestAnswer deleteMany
   */
  export type TestAnswerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TestAnswers to delete
     */
    where?: TestAnswerWhereInput
    /**
     * Limit how many TestAnswers to delete.
     */
    limit?: number
  }

  /**
   * TestAnswer.selected_choice
   */
  export type TestAnswer$selected_choiceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Choice
     */
    select?: ChoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Choice
     */
    omit?: ChoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoiceInclude<ExtArgs> | null
    where?: ChoiceWhereInput
  }

  /**
   * TestAnswer without action
   */
  export type TestAnswerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestAnswer
     */
    select?: TestAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestAnswer
     */
    omit?: TestAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestAnswerInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AdminUserScalarFieldEnum: {
    admin_user_id: 'admin_user_id',
    first_name: 'first_name',
    last_name: 'last_name',
    email: 'email',
    role: 'role',
    password_hash: 'password_hash',
    created_at: 'created_at'
  };

  export type AdminUserScalarFieldEnum = (typeof AdminUserScalarFieldEnum)[keyof typeof AdminUserScalarFieldEnum]


  export const CandidateScalarFieldEnum: {
    candidate_id: 'candidate_id',
    first_name: 'first_name',
    last_name: 'last_name',
    email: 'email',
    phone: 'phone',
    gender: 'gender',
    age: 'age',
    experience_salary: 'experience_salary',
    expected_salary: 'expected_salary',
    stack: 'stack',
    id_card: 'id_card'
  };

  export type CandidateScalarFieldEnum = (typeof CandidateScalarFieldEnum)[keyof typeof CandidateScalarFieldEnum]


  export const AddressScalarFieldEnum: {
    address_id: 'address_id',
    candidate_id: 'candidate_id',
    address_line1: 'address_line1',
    address_line2: 'address_line2',
    city: 'city',
    state: 'state',
    postal_code: 'postal_code',
    country: 'country',
    address_type: 'address_type',
    is_current: 'is_current'
  };

  export type AddressScalarFieldEnum = (typeof AddressScalarFieldEnum)[keyof typeof AddressScalarFieldEnum]


  export const CandidateStatusScalarFieldEnum: {
    candidate_status_id: 'candidate_status_id',
    candidate_id: 'candidate_id',
    status: 'status',
    updated_by: 'updated_by',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type CandidateStatusScalarFieldEnum = (typeof CandidateStatusScalarFieldEnum)[keyof typeof CandidateStatusScalarFieldEnum]


  export const StatusUpdateRequestsScalarFieldEnum: {
    status_update_request_id: 'status_update_request_id',
    candidate_status_id: 'candidate_status_id',
    requested_status: 'requested_status',
    request_by: 'request_by',
    approve_by: 'approve_by',
    status: 'status',
    created_at: 'created_at',
    approved_at: 'approved_at'
  };

  export type StatusUpdateRequestsScalarFieldEnum = (typeof StatusUpdateRequestsScalarFieldEnum)[keyof typeof StatusUpdateRequestsScalarFieldEnum]


  export const DocumentScalarFieldEnum: {
    document_id: 'document_id',
    candidate_id: 'candidate_id',
    file_url: 'file_url',
    file_type: 'file_type',
    doc_type: 'doc_type',
    uploaded_at: 'uploaded_at'
  };

  export type DocumentScalarFieldEnum = (typeof DocumentScalarFieldEnum)[keyof typeof DocumentScalarFieldEnum]


  export const QuestionScalarFieldEnum: {
    question_id: 'question_id',
    question_text: 'question_text',
    mcq: 'mcq',
    difficulty: 'difficulty',
    created_at: 'created_at'
  };

  export type QuestionScalarFieldEnum = (typeof QuestionScalarFieldEnum)[keyof typeof QuestionScalarFieldEnum]


  export const ChoiceScalarFieldEnum: {
    choice_id: 'choice_id',
    question_id: 'question_id',
    choice_text: 'choice_text',
    is_correct: 'is_correct'
  };

  export type ChoiceScalarFieldEnum = (typeof ChoiceScalarFieldEnum)[keyof typeof ChoiceScalarFieldEnum]


  export const TestScalarFieldEnum: {
    test_id: 'test_id',
    candidate_id: 'candidate_id',
    total_score: 'total_score',
    created_at: 'created_at',
    completed_at: 'completed_at'
  };

  export type TestScalarFieldEnum = (typeof TestScalarFieldEnum)[keyof typeof TestScalarFieldEnum]


  export const TestQuestionScalarFieldEnum: {
    test_question_id: 'test_question_id',
    test_id: 'test_id',
    question_id: 'question_id'
  };

  export type TestQuestionScalarFieldEnum = (typeof TestQuestionScalarFieldEnum)[keyof typeof TestQuestionScalarFieldEnum]


  export const TestAnswerScalarFieldEnum: {
    test_answer_id: 'test_answer_id',
    test_id: 'test_id',
    question_id: 'question_id',
    selected_choice_id: 'selected_choice_id',
    is_correct: 'is_correct'
  };

  export type TestAnswerScalarFieldEnum = (typeof TestAnswerScalarFieldEnum)[keyof typeof TestAnswerScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const AdminUserOrderByRelevanceFieldEnum: {
    first_name: 'first_name',
    last_name: 'last_name',
    email: 'email',
    password_hash: 'password_hash'
  };

  export type AdminUserOrderByRelevanceFieldEnum = (typeof AdminUserOrderByRelevanceFieldEnum)[keyof typeof AdminUserOrderByRelevanceFieldEnum]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const CandidateOrderByRelevanceFieldEnum: {
    first_name: 'first_name',
    last_name: 'last_name',
    email: 'email',
    phone: 'phone',
    gender: 'gender',
    stack: 'stack',
    id_card: 'id_card'
  };

  export type CandidateOrderByRelevanceFieldEnum = (typeof CandidateOrderByRelevanceFieldEnum)[keyof typeof CandidateOrderByRelevanceFieldEnum]


  export const AddressOrderByRelevanceFieldEnum: {
    address_line1: 'address_line1',
    address_line2: 'address_line2',
    city: 'city',
    state: 'state',
    postal_code: 'postal_code',
    country: 'country'
  };

  export type AddressOrderByRelevanceFieldEnum = (typeof AddressOrderByRelevanceFieldEnum)[keyof typeof AddressOrderByRelevanceFieldEnum]


  export const DocumentOrderByRelevanceFieldEnum: {
    file_url: 'file_url',
    file_type: 'file_type'
  };

  export type DocumentOrderByRelevanceFieldEnum = (typeof DocumentOrderByRelevanceFieldEnum)[keyof typeof DocumentOrderByRelevanceFieldEnum]


  export const QuestionOrderByRelevanceFieldEnum: {
    question_text: 'question_text'
  };

  export type QuestionOrderByRelevanceFieldEnum = (typeof QuestionOrderByRelevanceFieldEnum)[keyof typeof QuestionOrderByRelevanceFieldEnum]


  export const ChoiceOrderByRelevanceFieldEnum: {
    choice_text: 'choice_text'
  };

  export type ChoiceOrderByRelevanceFieldEnum = (typeof ChoiceOrderByRelevanceFieldEnum)[keyof typeof ChoiceOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'AddressType'
   */
  export type EnumAddressTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AddressType'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'CandidateStatusEnum'
   */
  export type EnumCandidateStatusEnumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CandidateStatusEnum'>
    


  /**
   * Reference to a field of type 'StatusEnum'
   */
  export type EnumStatusEnumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusEnum'>
    


  /**
   * Reference to a field of type 'DocTypeEnum'
   */
  export type EnumDocTypeEnumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DocTypeEnum'>
    


  /**
   * Reference to a field of type 'Difficulty'
   */
  export type EnumDifficultyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Difficulty'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type AdminUserWhereInput = {
    AND?: AdminUserWhereInput | AdminUserWhereInput[]
    OR?: AdminUserWhereInput[]
    NOT?: AdminUserWhereInput | AdminUserWhereInput[]
    admin_user_id?: IntFilter<"AdminUser"> | number
    first_name?: StringFilter<"AdminUser"> | string
    last_name?: StringFilter<"AdminUser"> | string
    email?: StringFilter<"AdminUser"> | string
    role?: EnumRoleFilter<"AdminUser"> | $Enums.Role
    password_hash?: StringFilter<"AdminUser"> | string
    created_at?: DateTimeFilter<"AdminUser"> | Date | string
    approved_status_updates?: StatusUpdateRequestsListRelationFilter
  }

  export type AdminUserOrderByWithRelationInput = {
    admin_user_id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    role?: SortOrder
    password_hash?: SortOrder
    created_at?: SortOrder
    approved_status_updates?: StatusUpdateRequestsOrderByRelationAggregateInput
    _relevance?: AdminUserOrderByRelevanceInput
  }

  export type AdminUserWhereUniqueInput = Prisma.AtLeast<{
    admin_user_id?: number
    email?: string
    AND?: AdminUserWhereInput | AdminUserWhereInput[]
    OR?: AdminUserWhereInput[]
    NOT?: AdminUserWhereInput | AdminUserWhereInput[]
    first_name?: StringFilter<"AdminUser"> | string
    last_name?: StringFilter<"AdminUser"> | string
    role?: EnumRoleFilter<"AdminUser"> | $Enums.Role
    password_hash?: StringFilter<"AdminUser"> | string
    created_at?: DateTimeFilter<"AdminUser"> | Date | string
    approved_status_updates?: StatusUpdateRequestsListRelationFilter
  }, "admin_user_id" | "email">

  export type AdminUserOrderByWithAggregationInput = {
    admin_user_id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    role?: SortOrder
    password_hash?: SortOrder
    created_at?: SortOrder
    _count?: AdminUserCountOrderByAggregateInput
    _avg?: AdminUserAvgOrderByAggregateInput
    _max?: AdminUserMaxOrderByAggregateInput
    _min?: AdminUserMinOrderByAggregateInput
    _sum?: AdminUserSumOrderByAggregateInput
  }

  export type AdminUserScalarWhereWithAggregatesInput = {
    AND?: AdminUserScalarWhereWithAggregatesInput | AdminUserScalarWhereWithAggregatesInput[]
    OR?: AdminUserScalarWhereWithAggregatesInput[]
    NOT?: AdminUserScalarWhereWithAggregatesInput | AdminUserScalarWhereWithAggregatesInput[]
    admin_user_id?: IntWithAggregatesFilter<"AdminUser"> | number
    first_name?: StringWithAggregatesFilter<"AdminUser"> | string
    last_name?: StringWithAggregatesFilter<"AdminUser"> | string
    email?: StringWithAggregatesFilter<"AdminUser"> | string
    role?: EnumRoleWithAggregatesFilter<"AdminUser"> | $Enums.Role
    password_hash?: StringWithAggregatesFilter<"AdminUser"> | string
    created_at?: DateTimeWithAggregatesFilter<"AdminUser"> | Date | string
  }

  export type CandidateWhereInput = {
    AND?: CandidateWhereInput | CandidateWhereInput[]
    OR?: CandidateWhereInput[]
    NOT?: CandidateWhereInput | CandidateWhereInput[]
    candidate_id?: IntFilter<"Candidate"> | number
    first_name?: StringFilter<"Candidate"> | string
    last_name?: StringFilter<"Candidate"> | string
    email?: StringFilter<"Candidate"> | string
    phone?: StringNullableFilter<"Candidate"> | string | null
    gender?: StringNullableFilter<"Candidate"> | string | null
    age?: IntNullableFilter<"Candidate"> | number | null
    experience_salary?: IntNullableFilter<"Candidate"> | number | null
    expected_salary?: IntNullableFilter<"Candidate"> | number | null
    stack?: StringNullableFilter<"Candidate"> | string | null
    id_card?: StringNullableFilter<"Candidate"> | string | null
    tests?: TestListRelationFilter
    candidate_statuses?: CandidateStatusListRelationFilter
    documents?: DocumentListRelationFilter
    addresses?: AddressListRelationFilter
  }

  export type CandidateOrderByWithRelationInput = {
    candidate_id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    age?: SortOrderInput | SortOrder
    experience_salary?: SortOrderInput | SortOrder
    expected_salary?: SortOrderInput | SortOrder
    stack?: SortOrderInput | SortOrder
    id_card?: SortOrderInput | SortOrder
    tests?: TestOrderByRelationAggregateInput
    candidate_statuses?: CandidateStatusOrderByRelationAggregateInput
    documents?: DocumentOrderByRelationAggregateInput
    addresses?: AddressOrderByRelationAggregateInput
    _relevance?: CandidateOrderByRelevanceInput
  }

  export type CandidateWhereUniqueInput = Prisma.AtLeast<{
    candidate_id?: number
    email?: string
    AND?: CandidateWhereInput | CandidateWhereInput[]
    OR?: CandidateWhereInput[]
    NOT?: CandidateWhereInput | CandidateWhereInput[]
    first_name?: StringFilter<"Candidate"> | string
    last_name?: StringFilter<"Candidate"> | string
    phone?: StringNullableFilter<"Candidate"> | string | null
    gender?: StringNullableFilter<"Candidate"> | string | null
    age?: IntNullableFilter<"Candidate"> | number | null
    experience_salary?: IntNullableFilter<"Candidate"> | number | null
    expected_salary?: IntNullableFilter<"Candidate"> | number | null
    stack?: StringNullableFilter<"Candidate"> | string | null
    id_card?: StringNullableFilter<"Candidate"> | string | null
    tests?: TestListRelationFilter
    candidate_statuses?: CandidateStatusListRelationFilter
    documents?: DocumentListRelationFilter
    addresses?: AddressListRelationFilter
  }, "candidate_id" | "email">

  export type CandidateOrderByWithAggregationInput = {
    candidate_id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    age?: SortOrderInput | SortOrder
    experience_salary?: SortOrderInput | SortOrder
    expected_salary?: SortOrderInput | SortOrder
    stack?: SortOrderInput | SortOrder
    id_card?: SortOrderInput | SortOrder
    _count?: CandidateCountOrderByAggregateInput
    _avg?: CandidateAvgOrderByAggregateInput
    _max?: CandidateMaxOrderByAggregateInput
    _min?: CandidateMinOrderByAggregateInput
    _sum?: CandidateSumOrderByAggregateInput
  }

  export type CandidateScalarWhereWithAggregatesInput = {
    AND?: CandidateScalarWhereWithAggregatesInput | CandidateScalarWhereWithAggregatesInput[]
    OR?: CandidateScalarWhereWithAggregatesInput[]
    NOT?: CandidateScalarWhereWithAggregatesInput | CandidateScalarWhereWithAggregatesInput[]
    candidate_id?: IntWithAggregatesFilter<"Candidate"> | number
    first_name?: StringWithAggregatesFilter<"Candidate"> | string
    last_name?: StringWithAggregatesFilter<"Candidate"> | string
    email?: StringWithAggregatesFilter<"Candidate"> | string
    phone?: StringNullableWithAggregatesFilter<"Candidate"> | string | null
    gender?: StringNullableWithAggregatesFilter<"Candidate"> | string | null
    age?: IntNullableWithAggregatesFilter<"Candidate"> | number | null
    experience_salary?: IntNullableWithAggregatesFilter<"Candidate"> | number | null
    expected_salary?: IntNullableWithAggregatesFilter<"Candidate"> | number | null
    stack?: StringNullableWithAggregatesFilter<"Candidate"> | string | null
    id_card?: StringNullableWithAggregatesFilter<"Candidate"> | string | null
  }

  export type AddressWhereInput = {
    AND?: AddressWhereInput | AddressWhereInput[]
    OR?: AddressWhereInput[]
    NOT?: AddressWhereInput | AddressWhereInput[]
    address_id?: IntFilter<"Address"> | number
    candidate_id?: IntFilter<"Address"> | number
    address_line1?: StringFilter<"Address"> | string
    address_line2?: StringNullableFilter<"Address"> | string | null
    city?: StringFilter<"Address"> | string
    state?: StringNullableFilter<"Address"> | string | null
    postal_code?: StringFilter<"Address"> | string
    country?: StringFilter<"Address"> | string
    address_type?: EnumAddressTypeFilter<"Address"> | $Enums.AddressType
    is_current?: BoolFilter<"Address"> | boolean
    candidate?: XOR<CandidateScalarRelationFilter, CandidateWhereInput>
  }

  export type AddressOrderByWithRelationInput = {
    address_id?: SortOrder
    candidate_id?: SortOrder
    address_line1?: SortOrder
    address_line2?: SortOrderInput | SortOrder
    city?: SortOrder
    state?: SortOrderInput | SortOrder
    postal_code?: SortOrder
    country?: SortOrder
    address_type?: SortOrder
    is_current?: SortOrder
    candidate?: CandidateOrderByWithRelationInput
    _relevance?: AddressOrderByRelevanceInput
  }

  export type AddressWhereUniqueInput = Prisma.AtLeast<{
    address_id?: number
    candidate_id_address_type?: AddressCandidate_idAddress_typeCompoundUniqueInput
    AND?: AddressWhereInput | AddressWhereInput[]
    OR?: AddressWhereInput[]
    NOT?: AddressWhereInput | AddressWhereInput[]
    candidate_id?: IntFilter<"Address"> | number
    address_line1?: StringFilter<"Address"> | string
    address_line2?: StringNullableFilter<"Address"> | string | null
    city?: StringFilter<"Address"> | string
    state?: StringNullableFilter<"Address"> | string | null
    postal_code?: StringFilter<"Address"> | string
    country?: StringFilter<"Address"> | string
    address_type?: EnumAddressTypeFilter<"Address"> | $Enums.AddressType
    is_current?: BoolFilter<"Address"> | boolean
    candidate?: XOR<CandidateScalarRelationFilter, CandidateWhereInput>
  }, "address_id" | "candidate_id_address_type">

  export type AddressOrderByWithAggregationInput = {
    address_id?: SortOrder
    candidate_id?: SortOrder
    address_line1?: SortOrder
    address_line2?: SortOrderInput | SortOrder
    city?: SortOrder
    state?: SortOrderInput | SortOrder
    postal_code?: SortOrder
    country?: SortOrder
    address_type?: SortOrder
    is_current?: SortOrder
    _count?: AddressCountOrderByAggregateInput
    _avg?: AddressAvgOrderByAggregateInput
    _max?: AddressMaxOrderByAggregateInput
    _min?: AddressMinOrderByAggregateInput
    _sum?: AddressSumOrderByAggregateInput
  }

  export type AddressScalarWhereWithAggregatesInput = {
    AND?: AddressScalarWhereWithAggregatesInput | AddressScalarWhereWithAggregatesInput[]
    OR?: AddressScalarWhereWithAggregatesInput[]
    NOT?: AddressScalarWhereWithAggregatesInput | AddressScalarWhereWithAggregatesInput[]
    address_id?: IntWithAggregatesFilter<"Address"> | number
    candidate_id?: IntWithAggregatesFilter<"Address"> | number
    address_line1?: StringWithAggregatesFilter<"Address"> | string
    address_line2?: StringNullableWithAggregatesFilter<"Address"> | string | null
    city?: StringWithAggregatesFilter<"Address"> | string
    state?: StringNullableWithAggregatesFilter<"Address"> | string | null
    postal_code?: StringWithAggregatesFilter<"Address"> | string
    country?: StringWithAggregatesFilter<"Address"> | string
    address_type?: EnumAddressTypeWithAggregatesFilter<"Address"> | $Enums.AddressType
    is_current?: BoolWithAggregatesFilter<"Address"> | boolean
  }

  export type CandidateStatusWhereInput = {
    AND?: CandidateStatusWhereInput | CandidateStatusWhereInput[]
    OR?: CandidateStatusWhereInput[]
    NOT?: CandidateStatusWhereInput | CandidateStatusWhereInput[]
    candidate_status_id?: IntFilter<"CandidateStatus"> | number
    candidate_id?: IntFilter<"CandidateStatus"> | number
    status?: EnumCandidateStatusEnumFilter<"CandidateStatus"> | $Enums.CandidateStatusEnum
    updated_by?: IntNullableFilter<"CandidateStatus"> | number | null
    created_at?: DateTimeFilter<"CandidateStatus"> | Date | string
    updated_at?: DateTimeFilter<"CandidateStatus"> | Date | string
    candidate?: XOR<CandidateScalarRelationFilter, CandidateWhereInput>
    status_update_requests?: StatusUpdateRequestsListRelationFilter
  }

  export type CandidateStatusOrderByWithRelationInput = {
    candidate_status_id?: SortOrder
    candidate_id?: SortOrder
    status?: SortOrder
    updated_by?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    candidate?: CandidateOrderByWithRelationInput
    status_update_requests?: StatusUpdateRequestsOrderByRelationAggregateInput
  }

  export type CandidateStatusWhereUniqueInput = Prisma.AtLeast<{
    candidate_status_id?: number
    AND?: CandidateStatusWhereInput | CandidateStatusWhereInput[]
    OR?: CandidateStatusWhereInput[]
    NOT?: CandidateStatusWhereInput | CandidateStatusWhereInput[]
    candidate_id?: IntFilter<"CandidateStatus"> | number
    status?: EnumCandidateStatusEnumFilter<"CandidateStatus"> | $Enums.CandidateStatusEnum
    updated_by?: IntNullableFilter<"CandidateStatus"> | number | null
    created_at?: DateTimeFilter<"CandidateStatus"> | Date | string
    updated_at?: DateTimeFilter<"CandidateStatus"> | Date | string
    candidate?: XOR<CandidateScalarRelationFilter, CandidateWhereInput>
    status_update_requests?: StatusUpdateRequestsListRelationFilter
  }, "candidate_status_id">

  export type CandidateStatusOrderByWithAggregationInput = {
    candidate_status_id?: SortOrder
    candidate_id?: SortOrder
    status?: SortOrder
    updated_by?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: CandidateStatusCountOrderByAggregateInput
    _avg?: CandidateStatusAvgOrderByAggregateInput
    _max?: CandidateStatusMaxOrderByAggregateInput
    _min?: CandidateStatusMinOrderByAggregateInput
    _sum?: CandidateStatusSumOrderByAggregateInput
  }

  export type CandidateStatusScalarWhereWithAggregatesInput = {
    AND?: CandidateStatusScalarWhereWithAggregatesInput | CandidateStatusScalarWhereWithAggregatesInput[]
    OR?: CandidateStatusScalarWhereWithAggregatesInput[]
    NOT?: CandidateStatusScalarWhereWithAggregatesInput | CandidateStatusScalarWhereWithAggregatesInput[]
    candidate_status_id?: IntWithAggregatesFilter<"CandidateStatus"> | number
    candidate_id?: IntWithAggregatesFilter<"CandidateStatus"> | number
    status?: EnumCandidateStatusEnumWithAggregatesFilter<"CandidateStatus"> | $Enums.CandidateStatusEnum
    updated_by?: IntNullableWithAggregatesFilter<"CandidateStatus"> | number | null
    created_at?: DateTimeWithAggregatesFilter<"CandidateStatus"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"CandidateStatus"> | Date | string
  }

  export type StatusUpdateRequestsWhereInput = {
    AND?: StatusUpdateRequestsWhereInput | StatusUpdateRequestsWhereInput[]
    OR?: StatusUpdateRequestsWhereInput[]
    NOT?: StatusUpdateRequestsWhereInput | StatusUpdateRequestsWhereInput[]
    status_update_request_id?: IntFilter<"StatusUpdateRequests"> | number
    candidate_status_id?: IntFilter<"StatusUpdateRequests"> | number
    requested_status?: EnumStatusEnumFilter<"StatusUpdateRequests"> | $Enums.StatusEnum
    request_by?: IntNullableFilter<"StatusUpdateRequests"> | number | null
    approve_by?: IntNullableFilter<"StatusUpdateRequests"> | number | null
    status?: EnumStatusEnumFilter<"StatusUpdateRequests"> | $Enums.StatusEnum
    created_at?: DateTimeFilter<"StatusUpdateRequests"> | Date | string
    approved_at?: DateTimeNullableFilter<"StatusUpdateRequests"> | Date | string | null
    candidate_status?: XOR<CandidateStatusScalarRelationFilter, CandidateStatusWhereInput>
    approver?: XOR<AdminUserNullableScalarRelationFilter, AdminUserWhereInput> | null
  }

  export type StatusUpdateRequestsOrderByWithRelationInput = {
    status_update_request_id?: SortOrder
    candidate_status_id?: SortOrder
    requested_status?: SortOrder
    request_by?: SortOrderInput | SortOrder
    approve_by?: SortOrderInput | SortOrder
    status?: SortOrder
    created_at?: SortOrder
    approved_at?: SortOrderInput | SortOrder
    candidate_status?: CandidateStatusOrderByWithRelationInput
    approver?: AdminUserOrderByWithRelationInput
  }

  export type StatusUpdateRequestsWhereUniqueInput = Prisma.AtLeast<{
    status_update_request_id?: number
    AND?: StatusUpdateRequestsWhereInput | StatusUpdateRequestsWhereInput[]
    OR?: StatusUpdateRequestsWhereInput[]
    NOT?: StatusUpdateRequestsWhereInput | StatusUpdateRequestsWhereInput[]
    candidate_status_id?: IntFilter<"StatusUpdateRequests"> | number
    requested_status?: EnumStatusEnumFilter<"StatusUpdateRequests"> | $Enums.StatusEnum
    request_by?: IntNullableFilter<"StatusUpdateRequests"> | number | null
    approve_by?: IntNullableFilter<"StatusUpdateRequests"> | number | null
    status?: EnumStatusEnumFilter<"StatusUpdateRequests"> | $Enums.StatusEnum
    created_at?: DateTimeFilter<"StatusUpdateRequests"> | Date | string
    approved_at?: DateTimeNullableFilter<"StatusUpdateRequests"> | Date | string | null
    candidate_status?: XOR<CandidateStatusScalarRelationFilter, CandidateStatusWhereInput>
    approver?: XOR<AdminUserNullableScalarRelationFilter, AdminUserWhereInput> | null
  }, "status_update_request_id">

  export type StatusUpdateRequestsOrderByWithAggregationInput = {
    status_update_request_id?: SortOrder
    candidate_status_id?: SortOrder
    requested_status?: SortOrder
    request_by?: SortOrderInput | SortOrder
    approve_by?: SortOrderInput | SortOrder
    status?: SortOrder
    created_at?: SortOrder
    approved_at?: SortOrderInput | SortOrder
    _count?: StatusUpdateRequestsCountOrderByAggregateInput
    _avg?: StatusUpdateRequestsAvgOrderByAggregateInput
    _max?: StatusUpdateRequestsMaxOrderByAggregateInput
    _min?: StatusUpdateRequestsMinOrderByAggregateInput
    _sum?: StatusUpdateRequestsSumOrderByAggregateInput
  }

  export type StatusUpdateRequestsScalarWhereWithAggregatesInput = {
    AND?: StatusUpdateRequestsScalarWhereWithAggregatesInput | StatusUpdateRequestsScalarWhereWithAggregatesInput[]
    OR?: StatusUpdateRequestsScalarWhereWithAggregatesInput[]
    NOT?: StatusUpdateRequestsScalarWhereWithAggregatesInput | StatusUpdateRequestsScalarWhereWithAggregatesInput[]
    status_update_request_id?: IntWithAggregatesFilter<"StatusUpdateRequests"> | number
    candidate_status_id?: IntWithAggregatesFilter<"StatusUpdateRequests"> | number
    requested_status?: EnumStatusEnumWithAggregatesFilter<"StatusUpdateRequests"> | $Enums.StatusEnum
    request_by?: IntNullableWithAggregatesFilter<"StatusUpdateRequests"> | number | null
    approve_by?: IntNullableWithAggregatesFilter<"StatusUpdateRequests"> | number | null
    status?: EnumStatusEnumWithAggregatesFilter<"StatusUpdateRequests"> | $Enums.StatusEnum
    created_at?: DateTimeWithAggregatesFilter<"StatusUpdateRequests"> | Date | string
    approved_at?: DateTimeNullableWithAggregatesFilter<"StatusUpdateRequests"> | Date | string | null
  }

  export type DocumentWhereInput = {
    AND?: DocumentWhereInput | DocumentWhereInput[]
    OR?: DocumentWhereInput[]
    NOT?: DocumentWhereInput | DocumentWhereInput[]
    document_id?: IntFilter<"Document"> | number
    candidate_id?: IntFilter<"Document"> | number
    file_url?: StringFilter<"Document"> | string
    file_type?: StringFilter<"Document"> | string
    doc_type?: EnumDocTypeEnumFilter<"Document"> | $Enums.DocTypeEnum
    uploaded_at?: DateTimeFilter<"Document"> | Date | string
    candidate?: XOR<CandidateScalarRelationFilter, CandidateWhereInput>
  }

  export type DocumentOrderByWithRelationInput = {
    document_id?: SortOrder
    candidate_id?: SortOrder
    file_url?: SortOrder
    file_type?: SortOrder
    doc_type?: SortOrder
    uploaded_at?: SortOrder
    candidate?: CandidateOrderByWithRelationInput
    _relevance?: DocumentOrderByRelevanceInput
  }

  export type DocumentWhereUniqueInput = Prisma.AtLeast<{
    document_id?: number
    candidate_id_doc_type?: DocumentCandidate_idDoc_typeCompoundUniqueInput
    AND?: DocumentWhereInput | DocumentWhereInput[]
    OR?: DocumentWhereInput[]
    NOT?: DocumentWhereInput | DocumentWhereInput[]
    candidate_id?: IntFilter<"Document"> | number
    file_url?: StringFilter<"Document"> | string
    file_type?: StringFilter<"Document"> | string
    doc_type?: EnumDocTypeEnumFilter<"Document"> | $Enums.DocTypeEnum
    uploaded_at?: DateTimeFilter<"Document"> | Date | string
    candidate?: XOR<CandidateScalarRelationFilter, CandidateWhereInput>
  }, "document_id" | "candidate_id_doc_type">

  export type DocumentOrderByWithAggregationInput = {
    document_id?: SortOrder
    candidate_id?: SortOrder
    file_url?: SortOrder
    file_type?: SortOrder
    doc_type?: SortOrder
    uploaded_at?: SortOrder
    _count?: DocumentCountOrderByAggregateInput
    _avg?: DocumentAvgOrderByAggregateInput
    _max?: DocumentMaxOrderByAggregateInput
    _min?: DocumentMinOrderByAggregateInput
    _sum?: DocumentSumOrderByAggregateInput
  }

  export type DocumentScalarWhereWithAggregatesInput = {
    AND?: DocumentScalarWhereWithAggregatesInput | DocumentScalarWhereWithAggregatesInput[]
    OR?: DocumentScalarWhereWithAggregatesInput[]
    NOT?: DocumentScalarWhereWithAggregatesInput | DocumentScalarWhereWithAggregatesInput[]
    document_id?: IntWithAggregatesFilter<"Document"> | number
    candidate_id?: IntWithAggregatesFilter<"Document"> | number
    file_url?: StringWithAggregatesFilter<"Document"> | string
    file_type?: StringWithAggregatesFilter<"Document"> | string
    doc_type?: EnumDocTypeEnumWithAggregatesFilter<"Document"> | $Enums.DocTypeEnum
    uploaded_at?: DateTimeWithAggregatesFilter<"Document"> | Date | string
  }

  export type QuestionWhereInput = {
    AND?: QuestionWhereInput | QuestionWhereInput[]
    OR?: QuestionWhereInput[]
    NOT?: QuestionWhereInput | QuestionWhereInput[]
    question_id?: IntFilter<"Question"> | number
    question_text?: StringFilter<"Question"> | string
    mcq?: BoolFilter<"Question"> | boolean
    difficulty?: EnumDifficultyFilter<"Question"> | $Enums.Difficulty
    created_at?: DateTimeFilter<"Question"> | Date | string
    choices?: ChoiceListRelationFilter
    test_questions?: TestQuestionListRelationFilter
    testAnswers?: TestAnswerListRelationFilter
  }

  export type QuestionOrderByWithRelationInput = {
    question_id?: SortOrder
    question_text?: SortOrder
    mcq?: SortOrder
    difficulty?: SortOrder
    created_at?: SortOrder
    choices?: ChoiceOrderByRelationAggregateInput
    test_questions?: TestQuestionOrderByRelationAggregateInput
    testAnswers?: TestAnswerOrderByRelationAggregateInput
    _relevance?: QuestionOrderByRelevanceInput
  }

  export type QuestionWhereUniqueInput = Prisma.AtLeast<{
    question_id?: number
    AND?: QuestionWhereInput | QuestionWhereInput[]
    OR?: QuestionWhereInput[]
    NOT?: QuestionWhereInput | QuestionWhereInput[]
    question_text?: StringFilter<"Question"> | string
    mcq?: BoolFilter<"Question"> | boolean
    difficulty?: EnumDifficultyFilter<"Question"> | $Enums.Difficulty
    created_at?: DateTimeFilter<"Question"> | Date | string
    choices?: ChoiceListRelationFilter
    test_questions?: TestQuestionListRelationFilter
    testAnswers?: TestAnswerListRelationFilter
  }, "question_id">

  export type QuestionOrderByWithAggregationInput = {
    question_id?: SortOrder
    question_text?: SortOrder
    mcq?: SortOrder
    difficulty?: SortOrder
    created_at?: SortOrder
    _count?: QuestionCountOrderByAggregateInput
    _avg?: QuestionAvgOrderByAggregateInput
    _max?: QuestionMaxOrderByAggregateInput
    _min?: QuestionMinOrderByAggregateInput
    _sum?: QuestionSumOrderByAggregateInput
  }

  export type QuestionScalarWhereWithAggregatesInput = {
    AND?: QuestionScalarWhereWithAggregatesInput | QuestionScalarWhereWithAggregatesInput[]
    OR?: QuestionScalarWhereWithAggregatesInput[]
    NOT?: QuestionScalarWhereWithAggregatesInput | QuestionScalarWhereWithAggregatesInput[]
    question_id?: IntWithAggregatesFilter<"Question"> | number
    question_text?: StringWithAggregatesFilter<"Question"> | string
    mcq?: BoolWithAggregatesFilter<"Question"> | boolean
    difficulty?: EnumDifficultyWithAggregatesFilter<"Question"> | $Enums.Difficulty
    created_at?: DateTimeWithAggregatesFilter<"Question"> | Date | string
  }

  export type ChoiceWhereInput = {
    AND?: ChoiceWhereInput | ChoiceWhereInput[]
    OR?: ChoiceWhereInput[]
    NOT?: ChoiceWhereInput | ChoiceWhereInput[]
    choice_id?: IntFilter<"Choice"> | number
    question_id?: IntFilter<"Choice"> | number
    choice_text?: StringFilter<"Choice"> | string
    is_correct?: BoolFilter<"Choice"> | boolean
    question?: XOR<QuestionScalarRelationFilter, QuestionWhereInput>
    selected_answers?: TestAnswerListRelationFilter
  }

  export type ChoiceOrderByWithRelationInput = {
    choice_id?: SortOrder
    question_id?: SortOrder
    choice_text?: SortOrder
    is_correct?: SortOrder
    question?: QuestionOrderByWithRelationInput
    selected_answers?: TestAnswerOrderByRelationAggregateInput
    _relevance?: ChoiceOrderByRelevanceInput
  }

  export type ChoiceWhereUniqueInput = Prisma.AtLeast<{
    choice_id?: number
    question_id_choice_text?: ChoiceQuestion_idChoice_textCompoundUniqueInput
    AND?: ChoiceWhereInput | ChoiceWhereInput[]
    OR?: ChoiceWhereInput[]
    NOT?: ChoiceWhereInput | ChoiceWhereInput[]
    question_id?: IntFilter<"Choice"> | number
    choice_text?: StringFilter<"Choice"> | string
    is_correct?: BoolFilter<"Choice"> | boolean
    question?: XOR<QuestionScalarRelationFilter, QuestionWhereInput>
    selected_answers?: TestAnswerListRelationFilter
  }, "choice_id" | "question_id_choice_text">

  export type ChoiceOrderByWithAggregationInput = {
    choice_id?: SortOrder
    question_id?: SortOrder
    choice_text?: SortOrder
    is_correct?: SortOrder
    _count?: ChoiceCountOrderByAggregateInput
    _avg?: ChoiceAvgOrderByAggregateInput
    _max?: ChoiceMaxOrderByAggregateInput
    _min?: ChoiceMinOrderByAggregateInput
    _sum?: ChoiceSumOrderByAggregateInput
  }

  export type ChoiceScalarWhereWithAggregatesInput = {
    AND?: ChoiceScalarWhereWithAggregatesInput | ChoiceScalarWhereWithAggregatesInput[]
    OR?: ChoiceScalarWhereWithAggregatesInput[]
    NOT?: ChoiceScalarWhereWithAggregatesInput | ChoiceScalarWhereWithAggregatesInput[]
    choice_id?: IntWithAggregatesFilter<"Choice"> | number
    question_id?: IntWithAggregatesFilter<"Choice"> | number
    choice_text?: StringWithAggregatesFilter<"Choice"> | string
    is_correct?: BoolWithAggregatesFilter<"Choice"> | boolean
  }

  export type TestWhereInput = {
    AND?: TestWhereInput | TestWhereInput[]
    OR?: TestWhereInput[]
    NOT?: TestWhereInput | TestWhereInput[]
    test_id?: IntFilter<"Test"> | number
    candidate_id?: IntFilter<"Test"> | number
    total_score?: IntNullableFilter<"Test"> | number | null
    created_at?: DateTimeFilter<"Test"> | Date | string
    completed_at?: DateTimeNullableFilter<"Test"> | Date | string | null
    candidate?: XOR<CandidateScalarRelationFilter, CandidateWhereInput>
    test_questions?: TestQuestionListRelationFilter
    test_answers?: TestAnswerListRelationFilter
  }

  export type TestOrderByWithRelationInput = {
    test_id?: SortOrder
    candidate_id?: SortOrder
    total_score?: SortOrderInput | SortOrder
    created_at?: SortOrder
    completed_at?: SortOrderInput | SortOrder
    candidate?: CandidateOrderByWithRelationInput
    test_questions?: TestQuestionOrderByRelationAggregateInput
    test_answers?: TestAnswerOrderByRelationAggregateInput
  }

  export type TestWhereUniqueInput = Prisma.AtLeast<{
    test_id?: number
    AND?: TestWhereInput | TestWhereInput[]
    OR?: TestWhereInput[]
    NOT?: TestWhereInput | TestWhereInput[]
    candidate_id?: IntFilter<"Test"> | number
    total_score?: IntNullableFilter<"Test"> | number | null
    created_at?: DateTimeFilter<"Test"> | Date | string
    completed_at?: DateTimeNullableFilter<"Test"> | Date | string | null
    candidate?: XOR<CandidateScalarRelationFilter, CandidateWhereInput>
    test_questions?: TestQuestionListRelationFilter
    test_answers?: TestAnswerListRelationFilter
  }, "test_id">

  export type TestOrderByWithAggregationInput = {
    test_id?: SortOrder
    candidate_id?: SortOrder
    total_score?: SortOrderInput | SortOrder
    created_at?: SortOrder
    completed_at?: SortOrderInput | SortOrder
    _count?: TestCountOrderByAggregateInput
    _avg?: TestAvgOrderByAggregateInput
    _max?: TestMaxOrderByAggregateInput
    _min?: TestMinOrderByAggregateInput
    _sum?: TestSumOrderByAggregateInput
  }

  export type TestScalarWhereWithAggregatesInput = {
    AND?: TestScalarWhereWithAggregatesInput | TestScalarWhereWithAggregatesInput[]
    OR?: TestScalarWhereWithAggregatesInput[]
    NOT?: TestScalarWhereWithAggregatesInput | TestScalarWhereWithAggregatesInput[]
    test_id?: IntWithAggregatesFilter<"Test"> | number
    candidate_id?: IntWithAggregatesFilter<"Test"> | number
    total_score?: IntNullableWithAggregatesFilter<"Test"> | number | null
    created_at?: DateTimeWithAggregatesFilter<"Test"> | Date | string
    completed_at?: DateTimeNullableWithAggregatesFilter<"Test"> | Date | string | null
  }

  export type TestQuestionWhereInput = {
    AND?: TestQuestionWhereInput | TestQuestionWhereInput[]
    OR?: TestQuestionWhereInput[]
    NOT?: TestQuestionWhereInput | TestQuestionWhereInput[]
    test_question_id?: IntFilter<"TestQuestion"> | number
    test_id?: IntFilter<"TestQuestion"> | number
    question_id?: IntFilter<"TestQuestion"> | number
    test?: XOR<TestScalarRelationFilter, TestWhereInput>
    question?: XOR<QuestionScalarRelationFilter, QuestionWhereInput>
  }

  export type TestQuestionOrderByWithRelationInput = {
    test_question_id?: SortOrder
    test_id?: SortOrder
    question_id?: SortOrder
    test?: TestOrderByWithRelationInput
    question?: QuestionOrderByWithRelationInput
  }

  export type TestQuestionWhereUniqueInput = Prisma.AtLeast<{
    test_question_id?: number
    test_id_question_id?: TestQuestionTest_idQuestion_idCompoundUniqueInput
    AND?: TestQuestionWhereInput | TestQuestionWhereInput[]
    OR?: TestQuestionWhereInput[]
    NOT?: TestQuestionWhereInput | TestQuestionWhereInput[]
    test_id?: IntFilter<"TestQuestion"> | number
    question_id?: IntFilter<"TestQuestion"> | number
    test?: XOR<TestScalarRelationFilter, TestWhereInput>
    question?: XOR<QuestionScalarRelationFilter, QuestionWhereInput>
  }, "test_question_id" | "test_id_question_id">

  export type TestQuestionOrderByWithAggregationInput = {
    test_question_id?: SortOrder
    test_id?: SortOrder
    question_id?: SortOrder
    _count?: TestQuestionCountOrderByAggregateInput
    _avg?: TestQuestionAvgOrderByAggregateInput
    _max?: TestQuestionMaxOrderByAggregateInput
    _min?: TestQuestionMinOrderByAggregateInput
    _sum?: TestQuestionSumOrderByAggregateInput
  }

  export type TestQuestionScalarWhereWithAggregatesInput = {
    AND?: TestQuestionScalarWhereWithAggregatesInput | TestQuestionScalarWhereWithAggregatesInput[]
    OR?: TestQuestionScalarWhereWithAggregatesInput[]
    NOT?: TestQuestionScalarWhereWithAggregatesInput | TestQuestionScalarWhereWithAggregatesInput[]
    test_question_id?: IntWithAggregatesFilter<"TestQuestion"> | number
    test_id?: IntWithAggregatesFilter<"TestQuestion"> | number
    question_id?: IntWithAggregatesFilter<"TestQuestion"> | number
  }

  export type TestAnswerWhereInput = {
    AND?: TestAnswerWhereInput | TestAnswerWhereInput[]
    OR?: TestAnswerWhereInput[]
    NOT?: TestAnswerWhereInput | TestAnswerWhereInput[]
    test_answer_id?: IntFilter<"TestAnswer"> | number
    test_id?: IntFilter<"TestAnswer"> | number
    question_id?: IntFilter<"TestAnswer"> | number
    selected_choice_id?: IntNullableFilter<"TestAnswer"> | number | null
    is_correct?: BoolNullableFilter<"TestAnswer"> | boolean | null
    test?: XOR<TestScalarRelationFilter, TestWhereInput>
    question?: XOR<QuestionScalarRelationFilter, QuestionWhereInput>
    selected_choice?: XOR<ChoiceNullableScalarRelationFilter, ChoiceWhereInput> | null
  }

  export type TestAnswerOrderByWithRelationInput = {
    test_answer_id?: SortOrder
    test_id?: SortOrder
    question_id?: SortOrder
    selected_choice_id?: SortOrderInput | SortOrder
    is_correct?: SortOrderInput | SortOrder
    test?: TestOrderByWithRelationInput
    question?: QuestionOrderByWithRelationInput
    selected_choice?: ChoiceOrderByWithRelationInput
  }

  export type TestAnswerWhereUniqueInput = Prisma.AtLeast<{
    test_answer_id?: number
    test_id_question_id?: TestAnswerTest_idQuestion_idCompoundUniqueInput
    AND?: TestAnswerWhereInput | TestAnswerWhereInput[]
    OR?: TestAnswerWhereInput[]
    NOT?: TestAnswerWhereInput | TestAnswerWhereInput[]
    test_id?: IntFilter<"TestAnswer"> | number
    question_id?: IntFilter<"TestAnswer"> | number
    selected_choice_id?: IntNullableFilter<"TestAnswer"> | number | null
    is_correct?: BoolNullableFilter<"TestAnswer"> | boolean | null
    test?: XOR<TestScalarRelationFilter, TestWhereInput>
    question?: XOR<QuestionScalarRelationFilter, QuestionWhereInput>
    selected_choice?: XOR<ChoiceNullableScalarRelationFilter, ChoiceWhereInput> | null
  }, "test_answer_id" | "test_id_question_id">

  export type TestAnswerOrderByWithAggregationInput = {
    test_answer_id?: SortOrder
    test_id?: SortOrder
    question_id?: SortOrder
    selected_choice_id?: SortOrderInput | SortOrder
    is_correct?: SortOrderInput | SortOrder
    _count?: TestAnswerCountOrderByAggregateInput
    _avg?: TestAnswerAvgOrderByAggregateInput
    _max?: TestAnswerMaxOrderByAggregateInput
    _min?: TestAnswerMinOrderByAggregateInput
    _sum?: TestAnswerSumOrderByAggregateInput
  }

  export type TestAnswerScalarWhereWithAggregatesInput = {
    AND?: TestAnswerScalarWhereWithAggregatesInput | TestAnswerScalarWhereWithAggregatesInput[]
    OR?: TestAnswerScalarWhereWithAggregatesInput[]
    NOT?: TestAnswerScalarWhereWithAggregatesInput | TestAnswerScalarWhereWithAggregatesInput[]
    test_answer_id?: IntWithAggregatesFilter<"TestAnswer"> | number
    test_id?: IntWithAggregatesFilter<"TestAnswer"> | number
    question_id?: IntWithAggregatesFilter<"TestAnswer"> | number
    selected_choice_id?: IntNullableWithAggregatesFilter<"TestAnswer"> | number | null
    is_correct?: BoolNullableWithAggregatesFilter<"TestAnswer"> | boolean | null
  }

  export type AdminUserCreateInput = {
    first_name: string
    last_name: string
    email: string
    role: $Enums.Role
    password_hash: string
    created_at?: Date | string
    approved_status_updates?: StatusUpdateRequestsCreateNestedManyWithoutApproverInput
  }

  export type AdminUserUncheckedCreateInput = {
    admin_user_id?: number
    first_name: string
    last_name: string
    email: string
    role: $Enums.Role
    password_hash: string
    created_at?: Date | string
    approved_status_updates?: StatusUpdateRequestsUncheckedCreateNestedManyWithoutApproverInput
  }

  export type AdminUserUpdateInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    approved_status_updates?: StatusUpdateRequestsUpdateManyWithoutApproverNestedInput
  }

  export type AdminUserUncheckedUpdateInput = {
    admin_user_id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    approved_status_updates?: StatusUpdateRequestsUncheckedUpdateManyWithoutApproverNestedInput
  }

  export type AdminUserCreateManyInput = {
    admin_user_id?: number
    first_name: string
    last_name: string
    email: string
    role: $Enums.Role
    password_hash: string
    created_at?: Date | string
  }

  export type AdminUserUpdateManyMutationInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUserUncheckedUpdateManyInput = {
    admin_user_id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CandidateCreateInput = {
    first_name: string
    last_name: string
    email: string
    phone?: string | null
    gender?: string | null
    age?: number | null
    experience_salary?: number | null
    expected_salary?: number | null
    stack?: string | null
    id_card?: string | null
    tests?: TestCreateNestedManyWithoutCandidateInput
    candidate_statuses?: CandidateStatusCreateNestedManyWithoutCandidateInput
    documents?: DocumentCreateNestedManyWithoutCandidateInput
    addresses?: AddressCreateNestedManyWithoutCandidateInput
  }

  export type CandidateUncheckedCreateInput = {
    candidate_id?: number
    first_name: string
    last_name: string
    email: string
    phone?: string | null
    gender?: string | null
    age?: number | null
    experience_salary?: number | null
    expected_salary?: number | null
    stack?: string | null
    id_card?: string | null
    tests?: TestUncheckedCreateNestedManyWithoutCandidateInput
    candidate_statuses?: CandidateStatusUncheckedCreateNestedManyWithoutCandidateInput
    documents?: DocumentUncheckedCreateNestedManyWithoutCandidateInput
    addresses?: AddressUncheckedCreateNestedManyWithoutCandidateInput
  }

  export type CandidateUpdateInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    experience_salary?: NullableIntFieldUpdateOperationsInput | number | null
    expected_salary?: NullableIntFieldUpdateOperationsInput | number | null
    stack?: NullableStringFieldUpdateOperationsInput | string | null
    id_card?: NullableStringFieldUpdateOperationsInput | string | null
    tests?: TestUpdateManyWithoutCandidateNestedInput
    candidate_statuses?: CandidateStatusUpdateManyWithoutCandidateNestedInput
    documents?: DocumentUpdateManyWithoutCandidateNestedInput
    addresses?: AddressUpdateManyWithoutCandidateNestedInput
  }

  export type CandidateUncheckedUpdateInput = {
    candidate_id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    experience_salary?: NullableIntFieldUpdateOperationsInput | number | null
    expected_salary?: NullableIntFieldUpdateOperationsInput | number | null
    stack?: NullableStringFieldUpdateOperationsInput | string | null
    id_card?: NullableStringFieldUpdateOperationsInput | string | null
    tests?: TestUncheckedUpdateManyWithoutCandidateNestedInput
    candidate_statuses?: CandidateStatusUncheckedUpdateManyWithoutCandidateNestedInput
    documents?: DocumentUncheckedUpdateManyWithoutCandidateNestedInput
    addresses?: AddressUncheckedUpdateManyWithoutCandidateNestedInput
  }

  export type CandidateCreateManyInput = {
    candidate_id?: number
    first_name: string
    last_name: string
    email: string
    phone?: string | null
    gender?: string | null
    age?: number | null
    experience_salary?: number | null
    expected_salary?: number | null
    stack?: string | null
    id_card?: string | null
  }

  export type CandidateUpdateManyMutationInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    experience_salary?: NullableIntFieldUpdateOperationsInput | number | null
    expected_salary?: NullableIntFieldUpdateOperationsInput | number | null
    stack?: NullableStringFieldUpdateOperationsInput | string | null
    id_card?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CandidateUncheckedUpdateManyInput = {
    candidate_id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    experience_salary?: NullableIntFieldUpdateOperationsInput | number | null
    expected_salary?: NullableIntFieldUpdateOperationsInput | number | null
    stack?: NullableStringFieldUpdateOperationsInput | string | null
    id_card?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AddressCreateInput = {
    address_line1: string
    address_line2?: string | null
    city: string
    state?: string | null
    postal_code: string
    country: string
    address_type: $Enums.AddressType
    is_current?: boolean
    candidate: CandidateCreateNestedOneWithoutAddressesInput
  }

  export type AddressUncheckedCreateInput = {
    address_id?: number
    candidate_id: number
    address_line1: string
    address_line2?: string | null
    city: string
    state?: string | null
    postal_code: string
    country: string
    address_type: $Enums.AddressType
    is_current?: boolean
  }

  export type AddressUpdateInput = {
    address_line1?: StringFieldUpdateOperationsInput | string
    address_line2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    state?: NullableStringFieldUpdateOperationsInput | string | null
    postal_code?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    address_type?: EnumAddressTypeFieldUpdateOperationsInput | $Enums.AddressType
    is_current?: BoolFieldUpdateOperationsInput | boolean
    candidate?: CandidateUpdateOneRequiredWithoutAddressesNestedInput
  }

  export type AddressUncheckedUpdateInput = {
    address_id?: IntFieldUpdateOperationsInput | number
    candidate_id?: IntFieldUpdateOperationsInput | number
    address_line1?: StringFieldUpdateOperationsInput | string
    address_line2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    state?: NullableStringFieldUpdateOperationsInput | string | null
    postal_code?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    address_type?: EnumAddressTypeFieldUpdateOperationsInput | $Enums.AddressType
    is_current?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AddressCreateManyInput = {
    address_id?: number
    candidate_id: number
    address_line1: string
    address_line2?: string | null
    city: string
    state?: string | null
    postal_code: string
    country: string
    address_type: $Enums.AddressType
    is_current?: boolean
  }

  export type AddressUpdateManyMutationInput = {
    address_line1?: StringFieldUpdateOperationsInput | string
    address_line2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    state?: NullableStringFieldUpdateOperationsInput | string | null
    postal_code?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    address_type?: EnumAddressTypeFieldUpdateOperationsInput | $Enums.AddressType
    is_current?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AddressUncheckedUpdateManyInput = {
    address_id?: IntFieldUpdateOperationsInput | number
    candidate_id?: IntFieldUpdateOperationsInput | number
    address_line1?: StringFieldUpdateOperationsInput | string
    address_line2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    state?: NullableStringFieldUpdateOperationsInput | string | null
    postal_code?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    address_type?: EnumAddressTypeFieldUpdateOperationsInput | $Enums.AddressType
    is_current?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CandidateStatusCreateInput = {
    status: $Enums.CandidateStatusEnum
    updated_by?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    candidate: CandidateCreateNestedOneWithoutCandidate_statusesInput
    status_update_requests?: StatusUpdateRequestsCreateNestedManyWithoutCandidate_statusInput
  }

  export type CandidateStatusUncheckedCreateInput = {
    candidate_status_id?: number
    candidate_id: number
    status: $Enums.CandidateStatusEnum
    updated_by?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    status_update_requests?: StatusUpdateRequestsUncheckedCreateNestedManyWithoutCandidate_statusInput
  }

  export type CandidateStatusUpdateInput = {
    status?: EnumCandidateStatusEnumFieldUpdateOperationsInput | $Enums.CandidateStatusEnum
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    candidate?: CandidateUpdateOneRequiredWithoutCandidate_statusesNestedInput
    status_update_requests?: StatusUpdateRequestsUpdateManyWithoutCandidate_statusNestedInput
  }

  export type CandidateStatusUncheckedUpdateInput = {
    candidate_status_id?: IntFieldUpdateOperationsInput | number
    candidate_id?: IntFieldUpdateOperationsInput | number
    status?: EnumCandidateStatusEnumFieldUpdateOperationsInput | $Enums.CandidateStatusEnum
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status_update_requests?: StatusUpdateRequestsUncheckedUpdateManyWithoutCandidate_statusNestedInput
  }

  export type CandidateStatusCreateManyInput = {
    candidate_status_id?: number
    candidate_id: number
    status: $Enums.CandidateStatusEnum
    updated_by?: number | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type CandidateStatusUpdateManyMutationInput = {
    status?: EnumCandidateStatusEnumFieldUpdateOperationsInput | $Enums.CandidateStatusEnum
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CandidateStatusUncheckedUpdateManyInput = {
    candidate_status_id?: IntFieldUpdateOperationsInput | number
    candidate_id?: IntFieldUpdateOperationsInput | number
    status?: EnumCandidateStatusEnumFieldUpdateOperationsInput | $Enums.CandidateStatusEnum
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StatusUpdateRequestsCreateInput = {
    requested_status: $Enums.StatusEnum
    request_by?: number | null
    status?: $Enums.StatusEnum
    created_at?: Date | string
    approved_at?: Date | string | null
    candidate_status: CandidateStatusCreateNestedOneWithoutStatus_update_requestsInput
    approver?: AdminUserCreateNestedOneWithoutApproved_status_updatesInput
  }

  export type StatusUpdateRequestsUncheckedCreateInput = {
    status_update_request_id?: number
    candidate_status_id: number
    requested_status: $Enums.StatusEnum
    request_by?: number | null
    approve_by?: number | null
    status?: $Enums.StatusEnum
    created_at?: Date | string
    approved_at?: Date | string | null
  }

  export type StatusUpdateRequestsUpdateInput = {
    requested_status?: EnumStatusEnumFieldUpdateOperationsInput | $Enums.StatusEnum
    request_by?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumStatusEnumFieldUpdateOperationsInput | $Enums.StatusEnum
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    approved_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    candidate_status?: CandidateStatusUpdateOneRequiredWithoutStatus_update_requestsNestedInput
    approver?: AdminUserUpdateOneWithoutApproved_status_updatesNestedInput
  }

  export type StatusUpdateRequestsUncheckedUpdateInput = {
    status_update_request_id?: IntFieldUpdateOperationsInput | number
    candidate_status_id?: IntFieldUpdateOperationsInput | number
    requested_status?: EnumStatusEnumFieldUpdateOperationsInput | $Enums.StatusEnum
    request_by?: NullableIntFieldUpdateOperationsInput | number | null
    approve_by?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumStatusEnumFieldUpdateOperationsInput | $Enums.StatusEnum
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    approved_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StatusUpdateRequestsCreateManyInput = {
    status_update_request_id?: number
    candidate_status_id: number
    requested_status: $Enums.StatusEnum
    request_by?: number | null
    approve_by?: number | null
    status?: $Enums.StatusEnum
    created_at?: Date | string
    approved_at?: Date | string | null
  }

  export type StatusUpdateRequestsUpdateManyMutationInput = {
    requested_status?: EnumStatusEnumFieldUpdateOperationsInput | $Enums.StatusEnum
    request_by?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumStatusEnumFieldUpdateOperationsInput | $Enums.StatusEnum
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    approved_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StatusUpdateRequestsUncheckedUpdateManyInput = {
    status_update_request_id?: IntFieldUpdateOperationsInput | number
    candidate_status_id?: IntFieldUpdateOperationsInput | number
    requested_status?: EnumStatusEnumFieldUpdateOperationsInput | $Enums.StatusEnum
    request_by?: NullableIntFieldUpdateOperationsInput | number | null
    approve_by?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumStatusEnumFieldUpdateOperationsInput | $Enums.StatusEnum
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    approved_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DocumentCreateInput = {
    file_url: string
    file_type: string
    doc_type: $Enums.DocTypeEnum
    uploaded_at?: Date | string
    candidate: CandidateCreateNestedOneWithoutDocumentsInput
  }

  export type DocumentUncheckedCreateInput = {
    document_id?: number
    candidate_id: number
    file_url: string
    file_type: string
    doc_type: $Enums.DocTypeEnum
    uploaded_at?: Date | string
  }

  export type DocumentUpdateInput = {
    file_url?: StringFieldUpdateOperationsInput | string
    file_type?: StringFieldUpdateOperationsInput | string
    doc_type?: EnumDocTypeEnumFieldUpdateOperationsInput | $Enums.DocTypeEnum
    uploaded_at?: DateTimeFieldUpdateOperationsInput | Date | string
    candidate?: CandidateUpdateOneRequiredWithoutDocumentsNestedInput
  }

  export type DocumentUncheckedUpdateInput = {
    document_id?: IntFieldUpdateOperationsInput | number
    candidate_id?: IntFieldUpdateOperationsInput | number
    file_url?: StringFieldUpdateOperationsInput | string
    file_type?: StringFieldUpdateOperationsInput | string
    doc_type?: EnumDocTypeEnumFieldUpdateOperationsInput | $Enums.DocTypeEnum
    uploaded_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentCreateManyInput = {
    document_id?: number
    candidate_id: number
    file_url: string
    file_type: string
    doc_type: $Enums.DocTypeEnum
    uploaded_at?: Date | string
  }

  export type DocumentUpdateManyMutationInput = {
    file_url?: StringFieldUpdateOperationsInput | string
    file_type?: StringFieldUpdateOperationsInput | string
    doc_type?: EnumDocTypeEnumFieldUpdateOperationsInput | $Enums.DocTypeEnum
    uploaded_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentUncheckedUpdateManyInput = {
    document_id?: IntFieldUpdateOperationsInput | number
    candidate_id?: IntFieldUpdateOperationsInput | number
    file_url?: StringFieldUpdateOperationsInput | string
    file_type?: StringFieldUpdateOperationsInput | string
    doc_type?: EnumDocTypeEnumFieldUpdateOperationsInput | $Enums.DocTypeEnum
    uploaded_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionCreateInput = {
    question_text: string
    mcq?: boolean
    difficulty: $Enums.Difficulty
    created_at?: Date | string
    choices?: ChoiceCreateNestedManyWithoutQuestionInput
    test_questions?: TestQuestionCreateNestedManyWithoutQuestionInput
    testAnswers?: TestAnswerCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUncheckedCreateInput = {
    question_id?: number
    question_text: string
    mcq?: boolean
    difficulty: $Enums.Difficulty
    created_at?: Date | string
    choices?: ChoiceUncheckedCreateNestedManyWithoutQuestionInput
    test_questions?: TestQuestionUncheckedCreateNestedManyWithoutQuestionInput
    testAnswers?: TestAnswerUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUpdateInput = {
    question_text?: StringFieldUpdateOperationsInput | string
    mcq?: BoolFieldUpdateOperationsInput | boolean
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    choices?: ChoiceUpdateManyWithoutQuestionNestedInput
    test_questions?: TestQuestionUpdateManyWithoutQuestionNestedInput
    testAnswers?: TestAnswerUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateInput = {
    question_id?: IntFieldUpdateOperationsInput | number
    question_text?: StringFieldUpdateOperationsInput | string
    mcq?: BoolFieldUpdateOperationsInput | boolean
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    choices?: ChoiceUncheckedUpdateManyWithoutQuestionNestedInput
    test_questions?: TestQuestionUncheckedUpdateManyWithoutQuestionNestedInput
    testAnswers?: TestAnswerUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionCreateManyInput = {
    question_id?: number
    question_text: string
    mcq?: boolean
    difficulty: $Enums.Difficulty
    created_at?: Date | string
  }

  export type QuestionUpdateManyMutationInput = {
    question_text?: StringFieldUpdateOperationsInput | string
    mcq?: BoolFieldUpdateOperationsInput | boolean
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionUncheckedUpdateManyInput = {
    question_id?: IntFieldUpdateOperationsInput | number
    question_text?: StringFieldUpdateOperationsInput | string
    mcq?: BoolFieldUpdateOperationsInput | boolean
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChoiceCreateInput = {
    choice_text: string
    is_correct?: boolean
    question: QuestionCreateNestedOneWithoutChoicesInput
    selected_answers?: TestAnswerCreateNestedManyWithoutSelected_choiceInput
  }

  export type ChoiceUncheckedCreateInput = {
    choice_id?: number
    question_id: number
    choice_text: string
    is_correct?: boolean
    selected_answers?: TestAnswerUncheckedCreateNestedManyWithoutSelected_choiceInput
  }

  export type ChoiceUpdateInput = {
    choice_text?: StringFieldUpdateOperationsInput | string
    is_correct?: BoolFieldUpdateOperationsInput | boolean
    question?: QuestionUpdateOneRequiredWithoutChoicesNestedInput
    selected_answers?: TestAnswerUpdateManyWithoutSelected_choiceNestedInput
  }

  export type ChoiceUncheckedUpdateInput = {
    choice_id?: IntFieldUpdateOperationsInput | number
    question_id?: IntFieldUpdateOperationsInput | number
    choice_text?: StringFieldUpdateOperationsInput | string
    is_correct?: BoolFieldUpdateOperationsInput | boolean
    selected_answers?: TestAnswerUncheckedUpdateManyWithoutSelected_choiceNestedInput
  }

  export type ChoiceCreateManyInput = {
    choice_id?: number
    question_id: number
    choice_text: string
    is_correct?: boolean
  }

  export type ChoiceUpdateManyMutationInput = {
    choice_text?: StringFieldUpdateOperationsInput | string
    is_correct?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ChoiceUncheckedUpdateManyInput = {
    choice_id?: IntFieldUpdateOperationsInput | number
    question_id?: IntFieldUpdateOperationsInput | number
    choice_text?: StringFieldUpdateOperationsInput | string
    is_correct?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TestCreateInput = {
    total_score?: number | null
    created_at?: Date | string
    completed_at?: Date | string | null
    candidate: CandidateCreateNestedOneWithoutTestsInput
    test_questions?: TestQuestionCreateNestedManyWithoutTestInput
    test_answers?: TestAnswerCreateNestedManyWithoutTestInput
  }

  export type TestUncheckedCreateInput = {
    test_id?: number
    candidate_id: number
    total_score?: number | null
    created_at?: Date | string
    completed_at?: Date | string | null
    test_questions?: TestQuestionUncheckedCreateNestedManyWithoutTestInput
    test_answers?: TestAnswerUncheckedCreateNestedManyWithoutTestInput
  }

  export type TestUpdateInput = {
    total_score?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    candidate?: CandidateUpdateOneRequiredWithoutTestsNestedInput
    test_questions?: TestQuestionUpdateManyWithoutTestNestedInput
    test_answers?: TestAnswerUpdateManyWithoutTestNestedInput
  }

  export type TestUncheckedUpdateInput = {
    test_id?: IntFieldUpdateOperationsInput | number
    candidate_id?: IntFieldUpdateOperationsInput | number
    total_score?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    test_questions?: TestQuestionUncheckedUpdateManyWithoutTestNestedInput
    test_answers?: TestAnswerUncheckedUpdateManyWithoutTestNestedInput
  }

  export type TestCreateManyInput = {
    test_id?: number
    candidate_id: number
    total_score?: number | null
    created_at?: Date | string
    completed_at?: Date | string | null
  }

  export type TestUpdateManyMutationInput = {
    total_score?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TestUncheckedUpdateManyInput = {
    test_id?: IntFieldUpdateOperationsInput | number
    candidate_id?: IntFieldUpdateOperationsInput | number
    total_score?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TestQuestionCreateInput = {
    test: TestCreateNestedOneWithoutTest_questionsInput
    question: QuestionCreateNestedOneWithoutTest_questionsInput
  }

  export type TestQuestionUncheckedCreateInput = {
    test_question_id?: number
    test_id: number
    question_id: number
  }

  export type TestQuestionUpdateInput = {
    test?: TestUpdateOneRequiredWithoutTest_questionsNestedInput
    question?: QuestionUpdateOneRequiredWithoutTest_questionsNestedInput
  }

  export type TestQuestionUncheckedUpdateInput = {
    test_question_id?: IntFieldUpdateOperationsInput | number
    test_id?: IntFieldUpdateOperationsInput | number
    question_id?: IntFieldUpdateOperationsInput | number
  }

  export type TestQuestionCreateManyInput = {
    test_question_id?: number
    test_id: number
    question_id: number
  }

  export type TestQuestionUpdateManyMutationInput = {

  }

  export type TestQuestionUncheckedUpdateManyInput = {
    test_question_id?: IntFieldUpdateOperationsInput | number
    test_id?: IntFieldUpdateOperationsInput | number
    question_id?: IntFieldUpdateOperationsInput | number
  }

  export type TestAnswerCreateInput = {
    is_correct?: boolean | null
    test: TestCreateNestedOneWithoutTest_answersInput
    question: QuestionCreateNestedOneWithoutTestAnswersInput
    selected_choice?: ChoiceCreateNestedOneWithoutSelected_answersInput
  }

  export type TestAnswerUncheckedCreateInput = {
    test_answer_id?: number
    test_id: number
    question_id: number
    selected_choice_id?: number | null
    is_correct?: boolean | null
  }

  export type TestAnswerUpdateInput = {
    is_correct?: NullableBoolFieldUpdateOperationsInput | boolean | null
    test?: TestUpdateOneRequiredWithoutTest_answersNestedInput
    question?: QuestionUpdateOneRequiredWithoutTestAnswersNestedInput
    selected_choice?: ChoiceUpdateOneWithoutSelected_answersNestedInput
  }

  export type TestAnswerUncheckedUpdateInput = {
    test_answer_id?: IntFieldUpdateOperationsInput | number
    test_id?: IntFieldUpdateOperationsInput | number
    question_id?: IntFieldUpdateOperationsInput | number
    selected_choice_id?: NullableIntFieldUpdateOperationsInput | number | null
    is_correct?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type TestAnswerCreateManyInput = {
    test_answer_id?: number
    test_id: number
    question_id: number
    selected_choice_id?: number | null
    is_correct?: boolean | null
  }

  export type TestAnswerUpdateManyMutationInput = {
    is_correct?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type TestAnswerUncheckedUpdateManyInput = {
    test_answer_id?: IntFieldUpdateOperationsInput | number
    test_id?: IntFieldUpdateOperationsInput | number
    question_id?: IntFieldUpdateOperationsInput | number
    selected_choice_id?: NullableIntFieldUpdateOperationsInput | number | null
    is_correct?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StatusUpdateRequestsListRelationFilter = {
    every?: StatusUpdateRequestsWhereInput
    some?: StatusUpdateRequestsWhereInput
    none?: StatusUpdateRequestsWhereInput
  }

  export type StatusUpdateRequestsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AdminUserOrderByRelevanceInput = {
    fields: AdminUserOrderByRelevanceFieldEnum | AdminUserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AdminUserCountOrderByAggregateInput = {
    admin_user_id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    role?: SortOrder
    password_hash?: SortOrder
    created_at?: SortOrder
  }

  export type AdminUserAvgOrderByAggregateInput = {
    admin_user_id?: SortOrder
  }

  export type AdminUserMaxOrderByAggregateInput = {
    admin_user_id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    role?: SortOrder
    password_hash?: SortOrder
    created_at?: SortOrder
  }

  export type AdminUserMinOrderByAggregateInput = {
    admin_user_id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    role?: SortOrder
    password_hash?: SortOrder
    created_at?: SortOrder
  }

  export type AdminUserSumOrderByAggregateInput = {
    admin_user_id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type TestListRelationFilter = {
    every?: TestWhereInput
    some?: TestWhereInput
    none?: TestWhereInput
  }

  export type CandidateStatusListRelationFilter = {
    every?: CandidateStatusWhereInput
    some?: CandidateStatusWhereInput
    none?: CandidateStatusWhereInput
  }

  export type DocumentListRelationFilter = {
    every?: DocumentWhereInput
    some?: DocumentWhereInput
    none?: DocumentWhereInput
  }

  export type AddressListRelationFilter = {
    every?: AddressWhereInput
    some?: AddressWhereInput
    none?: AddressWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CandidateStatusOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DocumentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AddressOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CandidateOrderByRelevanceInput = {
    fields: CandidateOrderByRelevanceFieldEnum | CandidateOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CandidateCountOrderByAggregateInput = {
    candidate_id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    gender?: SortOrder
    age?: SortOrder
    experience_salary?: SortOrder
    expected_salary?: SortOrder
    stack?: SortOrder
    id_card?: SortOrder
  }

  export type CandidateAvgOrderByAggregateInput = {
    candidate_id?: SortOrder
    age?: SortOrder
    experience_salary?: SortOrder
    expected_salary?: SortOrder
  }

  export type CandidateMaxOrderByAggregateInput = {
    candidate_id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    gender?: SortOrder
    age?: SortOrder
    experience_salary?: SortOrder
    expected_salary?: SortOrder
    stack?: SortOrder
    id_card?: SortOrder
  }

  export type CandidateMinOrderByAggregateInput = {
    candidate_id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    gender?: SortOrder
    age?: SortOrder
    experience_salary?: SortOrder
    expected_salary?: SortOrder
    stack?: SortOrder
    id_card?: SortOrder
  }

  export type CandidateSumOrderByAggregateInput = {
    candidate_id?: SortOrder
    age?: SortOrder
    experience_salary?: SortOrder
    expected_salary?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EnumAddressTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AddressType | EnumAddressTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AddressType[]
    notIn?: $Enums.AddressType[]
    not?: NestedEnumAddressTypeFilter<$PrismaModel> | $Enums.AddressType
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type CandidateScalarRelationFilter = {
    is?: CandidateWhereInput
    isNot?: CandidateWhereInput
  }

  export type AddressOrderByRelevanceInput = {
    fields: AddressOrderByRelevanceFieldEnum | AddressOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AddressCandidate_idAddress_typeCompoundUniqueInput = {
    candidate_id: number
    address_type: $Enums.AddressType
  }

  export type AddressCountOrderByAggregateInput = {
    address_id?: SortOrder
    candidate_id?: SortOrder
    address_line1?: SortOrder
    address_line2?: SortOrder
    city?: SortOrder
    state?: SortOrder
    postal_code?: SortOrder
    country?: SortOrder
    address_type?: SortOrder
    is_current?: SortOrder
  }

  export type AddressAvgOrderByAggregateInput = {
    address_id?: SortOrder
    candidate_id?: SortOrder
  }

  export type AddressMaxOrderByAggregateInput = {
    address_id?: SortOrder
    candidate_id?: SortOrder
    address_line1?: SortOrder
    address_line2?: SortOrder
    city?: SortOrder
    state?: SortOrder
    postal_code?: SortOrder
    country?: SortOrder
    address_type?: SortOrder
    is_current?: SortOrder
  }

  export type AddressMinOrderByAggregateInput = {
    address_id?: SortOrder
    candidate_id?: SortOrder
    address_line1?: SortOrder
    address_line2?: SortOrder
    city?: SortOrder
    state?: SortOrder
    postal_code?: SortOrder
    country?: SortOrder
    address_type?: SortOrder
    is_current?: SortOrder
  }

  export type AddressSumOrderByAggregateInput = {
    address_id?: SortOrder
    candidate_id?: SortOrder
  }

  export type EnumAddressTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AddressType | EnumAddressTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AddressType[]
    notIn?: $Enums.AddressType[]
    not?: NestedEnumAddressTypeWithAggregatesFilter<$PrismaModel> | $Enums.AddressType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAddressTypeFilter<$PrismaModel>
    _max?: NestedEnumAddressTypeFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumCandidateStatusEnumFilter<$PrismaModel = never> = {
    equals?: $Enums.CandidateStatusEnum | EnumCandidateStatusEnumFieldRefInput<$PrismaModel>
    in?: $Enums.CandidateStatusEnum[]
    notIn?: $Enums.CandidateStatusEnum[]
    not?: NestedEnumCandidateStatusEnumFilter<$PrismaModel> | $Enums.CandidateStatusEnum
  }

  export type CandidateStatusCountOrderByAggregateInput = {
    candidate_status_id?: SortOrder
    candidate_id?: SortOrder
    status?: SortOrder
    updated_by?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type CandidateStatusAvgOrderByAggregateInput = {
    candidate_status_id?: SortOrder
    candidate_id?: SortOrder
    updated_by?: SortOrder
  }

  export type CandidateStatusMaxOrderByAggregateInput = {
    candidate_status_id?: SortOrder
    candidate_id?: SortOrder
    status?: SortOrder
    updated_by?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type CandidateStatusMinOrderByAggregateInput = {
    candidate_status_id?: SortOrder
    candidate_id?: SortOrder
    status?: SortOrder
    updated_by?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type CandidateStatusSumOrderByAggregateInput = {
    candidate_status_id?: SortOrder
    candidate_id?: SortOrder
    updated_by?: SortOrder
  }

  export type EnumCandidateStatusEnumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CandidateStatusEnum | EnumCandidateStatusEnumFieldRefInput<$PrismaModel>
    in?: $Enums.CandidateStatusEnum[]
    notIn?: $Enums.CandidateStatusEnum[]
    not?: NestedEnumCandidateStatusEnumWithAggregatesFilter<$PrismaModel> | $Enums.CandidateStatusEnum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCandidateStatusEnumFilter<$PrismaModel>
    _max?: NestedEnumCandidateStatusEnumFilter<$PrismaModel>
  }

  export type EnumStatusEnumFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusEnum | EnumStatusEnumFieldRefInput<$PrismaModel>
    in?: $Enums.StatusEnum[]
    notIn?: $Enums.StatusEnum[]
    not?: NestedEnumStatusEnumFilter<$PrismaModel> | $Enums.StatusEnum
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type CandidateStatusScalarRelationFilter = {
    is?: CandidateStatusWhereInput
    isNot?: CandidateStatusWhereInput
  }

  export type AdminUserNullableScalarRelationFilter = {
    is?: AdminUserWhereInput | null
    isNot?: AdminUserWhereInput | null
  }

  export type StatusUpdateRequestsCountOrderByAggregateInput = {
    status_update_request_id?: SortOrder
    candidate_status_id?: SortOrder
    requested_status?: SortOrder
    request_by?: SortOrder
    approve_by?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    approved_at?: SortOrder
  }

  export type StatusUpdateRequestsAvgOrderByAggregateInput = {
    status_update_request_id?: SortOrder
    candidate_status_id?: SortOrder
    request_by?: SortOrder
    approve_by?: SortOrder
  }

  export type StatusUpdateRequestsMaxOrderByAggregateInput = {
    status_update_request_id?: SortOrder
    candidate_status_id?: SortOrder
    requested_status?: SortOrder
    request_by?: SortOrder
    approve_by?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    approved_at?: SortOrder
  }

  export type StatusUpdateRequestsMinOrderByAggregateInput = {
    status_update_request_id?: SortOrder
    candidate_status_id?: SortOrder
    requested_status?: SortOrder
    request_by?: SortOrder
    approve_by?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    approved_at?: SortOrder
  }

  export type StatusUpdateRequestsSumOrderByAggregateInput = {
    status_update_request_id?: SortOrder
    candidate_status_id?: SortOrder
    request_by?: SortOrder
    approve_by?: SortOrder
  }

  export type EnumStatusEnumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusEnum | EnumStatusEnumFieldRefInput<$PrismaModel>
    in?: $Enums.StatusEnum[]
    notIn?: $Enums.StatusEnum[]
    not?: NestedEnumStatusEnumWithAggregatesFilter<$PrismaModel> | $Enums.StatusEnum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusEnumFilter<$PrismaModel>
    _max?: NestedEnumStatusEnumFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumDocTypeEnumFilter<$PrismaModel = never> = {
    equals?: $Enums.DocTypeEnum | EnumDocTypeEnumFieldRefInput<$PrismaModel>
    in?: $Enums.DocTypeEnum[]
    notIn?: $Enums.DocTypeEnum[]
    not?: NestedEnumDocTypeEnumFilter<$PrismaModel> | $Enums.DocTypeEnum
  }

  export type DocumentOrderByRelevanceInput = {
    fields: DocumentOrderByRelevanceFieldEnum | DocumentOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type DocumentCandidate_idDoc_typeCompoundUniqueInput = {
    candidate_id: number
    doc_type: $Enums.DocTypeEnum
  }

  export type DocumentCountOrderByAggregateInput = {
    document_id?: SortOrder
    candidate_id?: SortOrder
    file_url?: SortOrder
    file_type?: SortOrder
    doc_type?: SortOrder
    uploaded_at?: SortOrder
  }

  export type DocumentAvgOrderByAggregateInput = {
    document_id?: SortOrder
    candidate_id?: SortOrder
  }

  export type DocumentMaxOrderByAggregateInput = {
    document_id?: SortOrder
    candidate_id?: SortOrder
    file_url?: SortOrder
    file_type?: SortOrder
    doc_type?: SortOrder
    uploaded_at?: SortOrder
  }

  export type DocumentMinOrderByAggregateInput = {
    document_id?: SortOrder
    candidate_id?: SortOrder
    file_url?: SortOrder
    file_type?: SortOrder
    doc_type?: SortOrder
    uploaded_at?: SortOrder
  }

  export type DocumentSumOrderByAggregateInput = {
    document_id?: SortOrder
    candidate_id?: SortOrder
  }

  export type EnumDocTypeEnumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DocTypeEnum | EnumDocTypeEnumFieldRefInput<$PrismaModel>
    in?: $Enums.DocTypeEnum[]
    notIn?: $Enums.DocTypeEnum[]
    not?: NestedEnumDocTypeEnumWithAggregatesFilter<$PrismaModel> | $Enums.DocTypeEnum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDocTypeEnumFilter<$PrismaModel>
    _max?: NestedEnumDocTypeEnumFilter<$PrismaModel>
  }

  export type EnumDifficultyFilter<$PrismaModel = never> = {
    equals?: $Enums.Difficulty | EnumDifficultyFieldRefInput<$PrismaModel>
    in?: $Enums.Difficulty[]
    notIn?: $Enums.Difficulty[]
    not?: NestedEnumDifficultyFilter<$PrismaModel> | $Enums.Difficulty
  }

  export type ChoiceListRelationFilter = {
    every?: ChoiceWhereInput
    some?: ChoiceWhereInput
    none?: ChoiceWhereInput
  }

  export type TestQuestionListRelationFilter = {
    every?: TestQuestionWhereInput
    some?: TestQuestionWhereInput
    none?: TestQuestionWhereInput
  }

  export type TestAnswerListRelationFilter = {
    every?: TestAnswerWhereInput
    some?: TestAnswerWhereInput
    none?: TestAnswerWhereInput
  }

  export type ChoiceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TestQuestionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TestAnswerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type QuestionOrderByRelevanceInput = {
    fields: QuestionOrderByRelevanceFieldEnum | QuestionOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type QuestionCountOrderByAggregateInput = {
    question_id?: SortOrder
    question_text?: SortOrder
    mcq?: SortOrder
    difficulty?: SortOrder
    created_at?: SortOrder
  }

  export type QuestionAvgOrderByAggregateInput = {
    question_id?: SortOrder
  }

  export type QuestionMaxOrderByAggregateInput = {
    question_id?: SortOrder
    question_text?: SortOrder
    mcq?: SortOrder
    difficulty?: SortOrder
    created_at?: SortOrder
  }

  export type QuestionMinOrderByAggregateInput = {
    question_id?: SortOrder
    question_text?: SortOrder
    mcq?: SortOrder
    difficulty?: SortOrder
    created_at?: SortOrder
  }

  export type QuestionSumOrderByAggregateInput = {
    question_id?: SortOrder
  }

  export type EnumDifficultyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Difficulty | EnumDifficultyFieldRefInput<$PrismaModel>
    in?: $Enums.Difficulty[]
    notIn?: $Enums.Difficulty[]
    not?: NestedEnumDifficultyWithAggregatesFilter<$PrismaModel> | $Enums.Difficulty
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDifficultyFilter<$PrismaModel>
    _max?: NestedEnumDifficultyFilter<$PrismaModel>
  }

  export type QuestionScalarRelationFilter = {
    is?: QuestionWhereInput
    isNot?: QuestionWhereInput
  }

  export type ChoiceOrderByRelevanceInput = {
    fields: ChoiceOrderByRelevanceFieldEnum | ChoiceOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ChoiceQuestion_idChoice_textCompoundUniqueInput = {
    question_id: number
    choice_text: string
  }

  export type ChoiceCountOrderByAggregateInput = {
    choice_id?: SortOrder
    question_id?: SortOrder
    choice_text?: SortOrder
    is_correct?: SortOrder
  }

  export type ChoiceAvgOrderByAggregateInput = {
    choice_id?: SortOrder
    question_id?: SortOrder
  }

  export type ChoiceMaxOrderByAggregateInput = {
    choice_id?: SortOrder
    question_id?: SortOrder
    choice_text?: SortOrder
    is_correct?: SortOrder
  }

  export type ChoiceMinOrderByAggregateInput = {
    choice_id?: SortOrder
    question_id?: SortOrder
    choice_text?: SortOrder
    is_correct?: SortOrder
  }

  export type ChoiceSumOrderByAggregateInput = {
    choice_id?: SortOrder
    question_id?: SortOrder
  }

  export type TestCountOrderByAggregateInput = {
    test_id?: SortOrder
    candidate_id?: SortOrder
    total_score?: SortOrder
    created_at?: SortOrder
    completed_at?: SortOrder
  }

  export type TestAvgOrderByAggregateInput = {
    test_id?: SortOrder
    candidate_id?: SortOrder
    total_score?: SortOrder
  }

  export type TestMaxOrderByAggregateInput = {
    test_id?: SortOrder
    candidate_id?: SortOrder
    total_score?: SortOrder
    created_at?: SortOrder
    completed_at?: SortOrder
  }

  export type TestMinOrderByAggregateInput = {
    test_id?: SortOrder
    candidate_id?: SortOrder
    total_score?: SortOrder
    created_at?: SortOrder
    completed_at?: SortOrder
  }

  export type TestSumOrderByAggregateInput = {
    test_id?: SortOrder
    candidate_id?: SortOrder
    total_score?: SortOrder
  }

  export type TestScalarRelationFilter = {
    is?: TestWhereInput
    isNot?: TestWhereInput
  }

  export type TestQuestionTest_idQuestion_idCompoundUniqueInput = {
    test_id: number
    question_id: number
  }

  export type TestQuestionCountOrderByAggregateInput = {
    test_question_id?: SortOrder
    test_id?: SortOrder
    question_id?: SortOrder
  }

  export type TestQuestionAvgOrderByAggregateInput = {
    test_question_id?: SortOrder
    test_id?: SortOrder
    question_id?: SortOrder
  }

  export type TestQuestionMaxOrderByAggregateInput = {
    test_question_id?: SortOrder
    test_id?: SortOrder
    question_id?: SortOrder
  }

  export type TestQuestionMinOrderByAggregateInput = {
    test_question_id?: SortOrder
    test_id?: SortOrder
    question_id?: SortOrder
  }

  export type TestQuestionSumOrderByAggregateInput = {
    test_question_id?: SortOrder
    test_id?: SortOrder
    question_id?: SortOrder
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type ChoiceNullableScalarRelationFilter = {
    is?: ChoiceWhereInput | null
    isNot?: ChoiceWhereInput | null
  }

  export type TestAnswerTest_idQuestion_idCompoundUniqueInput = {
    test_id: number
    question_id: number
  }

  export type TestAnswerCountOrderByAggregateInput = {
    test_answer_id?: SortOrder
    test_id?: SortOrder
    question_id?: SortOrder
    selected_choice_id?: SortOrder
    is_correct?: SortOrder
  }

  export type TestAnswerAvgOrderByAggregateInput = {
    test_answer_id?: SortOrder
    test_id?: SortOrder
    question_id?: SortOrder
    selected_choice_id?: SortOrder
  }

  export type TestAnswerMaxOrderByAggregateInput = {
    test_answer_id?: SortOrder
    test_id?: SortOrder
    question_id?: SortOrder
    selected_choice_id?: SortOrder
    is_correct?: SortOrder
  }

  export type TestAnswerMinOrderByAggregateInput = {
    test_answer_id?: SortOrder
    test_id?: SortOrder
    question_id?: SortOrder
    selected_choice_id?: SortOrder
    is_correct?: SortOrder
  }

  export type TestAnswerSumOrderByAggregateInput = {
    test_answer_id?: SortOrder
    test_id?: SortOrder
    question_id?: SortOrder
    selected_choice_id?: SortOrder
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type StatusUpdateRequestsCreateNestedManyWithoutApproverInput = {
    create?: XOR<StatusUpdateRequestsCreateWithoutApproverInput, StatusUpdateRequestsUncheckedCreateWithoutApproverInput> | StatusUpdateRequestsCreateWithoutApproverInput[] | StatusUpdateRequestsUncheckedCreateWithoutApproverInput[]
    connectOrCreate?: StatusUpdateRequestsCreateOrConnectWithoutApproverInput | StatusUpdateRequestsCreateOrConnectWithoutApproverInput[]
    createMany?: StatusUpdateRequestsCreateManyApproverInputEnvelope
    connect?: StatusUpdateRequestsWhereUniqueInput | StatusUpdateRequestsWhereUniqueInput[]
  }

  export type StatusUpdateRequestsUncheckedCreateNestedManyWithoutApproverInput = {
    create?: XOR<StatusUpdateRequestsCreateWithoutApproverInput, StatusUpdateRequestsUncheckedCreateWithoutApproverInput> | StatusUpdateRequestsCreateWithoutApproverInput[] | StatusUpdateRequestsUncheckedCreateWithoutApproverInput[]
    connectOrCreate?: StatusUpdateRequestsCreateOrConnectWithoutApproverInput | StatusUpdateRequestsCreateOrConnectWithoutApproverInput[]
    createMany?: StatusUpdateRequestsCreateManyApproverInputEnvelope
    connect?: StatusUpdateRequestsWhereUniqueInput | StatusUpdateRequestsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type StatusUpdateRequestsUpdateManyWithoutApproverNestedInput = {
    create?: XOR<StatusUpdateRequestsCreateWithoutApproverInput, StatusUpdateRequestsUncheckedCreateWithoutApproverInput> | StatusUpdateRequestsCreateWithoutApproverInput[] | StatusUpdateRequestsUncheckedCreateWithoutApproverInput[]
    connectOrCreate?: StatusUpdateRequestsCreateOrConnectWithoutApproverInput | StatusUpdateRequestsCreateOrConnectWithoutApproverInput[]
    upsert?: StatusUpdateRequestsUpsertWithWhereUniqueWithoutApproverInput | StatusUpdateRequestsUpsertWithWhereUniqueWithoutApproverInput[]
    createMany?: StatusUpdateRequestsCreateManyApproverInputEnvelope
    set?: StatusUpdateRequestsWhereUniqueInput | StatusUpdateRequestsWhereUniqueInput[]
    disconnect?: StatusUpdateRequestsWhereUniqueInput | StatusUpdateRequestsWhereUniqueInput[]
    delete?: StatusUpdateRequestsWhereUniqueInput | StatusUpdateRequestsWhereUniqueInput[]
    connect?: StatusUpdateRequestsWhereUniqueInput | StatusUpdateRequestsWhereUniqueInput[]
    update?: StatusUpdateRequestsUpdateWithWhereUniqueWithoutApproverInput | StatusUpdateRequestsUpdateWithWhereUniqueWithoutApproverInput[]
    updateMany?: StatusUpdateRequestsUpdateManyWithWhereWithoutApproverInput | StatusUpdateRequestsUpdateManyWithWhereWithoutApproverInput[]
    deleteMany?: StatusUpdateRequestsScalarWhereInput | StatusUpdateRequestsScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StatusUpdateRequestsUncheckedUpdateManyWithoutApproverNestedInput = {
    create?: XOR<StatusUpdateRequestsCreateWithoutApproverInput, StatusUpdateRequestsUncheckedCreateWithoutApproverInput> | StatusUpdateRequestsCreateWithoutApproverInput[] | StatusUpdateRequestsUncheckedCreateWithoutApproverInput[]
    connectOrCreate?: StatusUpdateRequestsCreateOrConnectWithoutApproverInput | StatusUpdateRequestsCreateOrConnectWithoutApproverInput[]
    upsert?: StatusUpdateRequestsUpsertWithWhereUniqueWithoutApproverInput | StatusUpdateRequestsUpsertWithWhereUniqueWithoutApproverInput[]
    createMany?: StatusUpdateRequestsCreateManyApproverInputEnvelope
    set?: StatusUpdateRequestsWhereUniqueInput | StatusUpdateRequestsWhereUniqueInput[]
    disconnect?: StatusUpdateRequestsWhereUniqueInput | StatusUpdateRequestsWhereUniqueInput[]
    delete?: StatusUpdateRequestsWhereUniqueInput | StatusUpdateRequestsWhereUniqueInput[]
    connect?: StatusUpdateRequestsWhereUniqueInput | StatusUpdateRequestsWhereUniqueInput[]
    update?: StatusUpdateRequestsUpdateWithWhereUniqueWithoutApproverInput | StatusUpdateRequestsUpdateWithWhereUniqueWithoutApproverInput[]
    updateMany?: StatusUpdateRequestsUpdateManyWithWhereWithoutApproverInput | StatusUpdateRequestsUpdateManyWithWhereWithoutApproverInput[]
    deleteMany?: StatusUpdateRequestsScalarWhereInput | StatusUpdateRequestsScalarWhereInput[]
  }

  export type TestCreateNestedManyWithoutCandidateInput = {
    create?: XOR<TestCreateWithoutCandidateInput, TestUncheckedCreateWithoutCandidateInput> | TestCreateWithoutCandidateInput[] | TestUncheckedCreateWithoutCandidateInput[]
    connectOrCreate?: TestCreateOrConnectWithoutCandidateInput | TestCreateOrConnectWithoutCandidateInput[]
    createMany?: TestCreateManyCandidateInputEnvelope
    connect?: TestWhereUniqueInput | TestWhereUniqueInput[]
  }

  export type CandidateStatusCreateNestedManyWithoutCandidateInput = {
    create?: XOR<CandidateStatusCreateWithoutCandidateInput, CandidateStatusUncheckedCreateWithoutCandidateInput> | CandidateStatusCreateWithoutCandidateInput[] | CandidateStatusUncheckedCreateWithoutCandidateInput[]
    connectOrCreate?: CandidateStatusCreateOrConnectWithoutCandidateInput | CandidateStatusCreateOrConnectWithoutCandidateInput[]
    createMany?: CandidateStatusCreateManyCandidateInputEnvelope
    connect?: CandidateStatusWhereUniqueInput | CandidateStatusWhereUniqueInput[]
  }

  export type DocumentCreateNestedManyWithoutCandidateInput = {
    create?: XOR<DocumentCreateWithoutCandidateInput, DocumentUncheckedCreateWithoutCandidateInput> | DocumentCreateWithoutCandidateInput[] | DocumentUncheckedCreateWithoutCandidateInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutCandidateInput | DocumentCreateOrConnectWithoutCandidateInput[]
    createMany?: DocumentCreateManyCandidateInputEnvelope
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
  }

  export type AddressCreateNestedManyWithoutCandidateInput = {
    create?: XOR<AddressCreateWithoutCandidateInput, AddressUncheckedCreateWithoutCandidateInput> | AddressCreateWithoutCandidateInput[] | AddressUncheckedCreateWithoutCandidateInput[]
    connectOrCreate?: AddressCreateOrConnectWithoutCandidateInput | AddressCreateOrConnectWithoutCandidateInput[]
    createMany?: AddressCreateManyCandidateInputEnvelope
    connect?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
  }

  export type TestUncheckedCreateNestedManyWithoutCandidateInput = {
    create?: XOR<TestCreateWithoutCandidateInput, TestUncheckedCreateWithoutCandidateInput> | TestCreateWithoutCandidateInput[] | TestUncheckedCreateWithoutCandidateInput[]
    connectOrCreate?: TestCreateOrConnectWithoutCandidateInput | TestCreateOrConnectWithoutCandidateInput[]
    createMany?: TestCreateManyCandidateInputEnvelope
    connect?: TestWhereUniqueInput | TestWhereUniqueInput[]
  }

  export type CandidateStatusUncheckedCreateNestedManyWithoutCandidateInput = {
    create?: XOR<CandidateStatusCreateWithoutCandidateInput, CandidateStatusUncheckedCreateWithoutCandidateInput> | CandidateStatusCreateWithoutCandidateInput[] | CandidateStatusUncheckedCreateWithoutCandidateInput[]
    connectOrCreate?: CandidateStatusCreateOrConnectWithoutCandidateInput | CandidateStatusCreateOrConnectWithoutCandidateInput[]
    createMany?: CandidateStatusCreateManyCandidateInputEnvelope
    connect?: CandidateStatusWhereUniqueInput | CandidateStatusWhereUniqueInput[]
  }

  export type DocumentUncheckedCreateNestedManyWithoutCandidateInput = {
    create?: XOR<DocumentCreateWithoutCandidateInput, DocumentUncheckedCreateWithoutCandidateInput> | DocumentCreateWithoutCandidateInput[] | DocumentUncheckedCreateWithoutCandidateInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutCandidateInput | DocumentCreateOrConnectWithoutCandidateInput[]
    createMany?: DocumentCreateManyCandidateInputEnvelope
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
  }

  export type AddressUncheckedCreateNestedManyWithoutCandidateInput = {
    create?: XOR<AddressCreateWithoutCandidateInput, AddressUncheckedCreateWithoutCandidateInput> | AddressCreateWithoutCandidateInput[] | AddressUncheckedCreateWithoutCandidateInput[]
    connectOrCreate?: AddressCreateOrConnectWithoutCandidateInput | AddressCreateOrConnectWithoutCandidateInput[]
    createMany?: AddressCreateManyCandidateInputEnvelope
    connect?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TestUpdateManyWithoutCandidateNestedInput = {
    create?: XOR<TestCreateWithoutCandidateInput, TestUncheckedCreateWithoutCandidateInput> | TestCreateWithoutCandidateInput[] | TestUncheckedCreateWithoutCandidateInput[]
    connectOrCreate?: TestCreateOrConnectWithoutCandidateInput | TestCreateOrConnectWithoutCandidateInput[]
    upsert?: TestUpsertWithWhereUniqueWithoutCandidateInput | TestUpsertWithWhereUniqueWithoutCandidateInput[]
    createMany?: TestCreateManyCandidateInputEnvelope
    set?: TestWhereUniqueInput | TestWhereUniqueInput[]
    disconnect?: TestWhereUniqueInput | TestWhereUniqueInput[]
    delete?: TestWhereUniqueInput | TestWhereUniqueInput[]
    connect?: TestWhereUniqueInput | TestWhereUniqueInput[]
    update?: TestUpdateWithWhereUniqueWithoutCandidateInput | TestUpdateWithWhereUniqueWithoutCandidateInput[]
    updateMany?: TestUpdateManyWithWhereWithoutCandidateInput | TestUpdateManyWithWhereWithoutCandidateInput[]
    deleteMany?: TestScalarWhereInput | TestScalarWhereInput[]
  }

  export type CandidateStatusUpdateManyWithoutCandidateNestedInput = {
    create?: XOR<CandidateStatusCreateWithoutCandidateInput, CandidateStatusUncheckedCreateWithoutCandidateInput> | CandidateStatusCreateWithoutCandidateInput[] | CandidateStatusUncheckedCreateWithoutCandidateInput[]
    connectOrCreate?: CandidateStatusCreateOrConnectWithoutCandidateInput | CandidateStatusCreateOrConnectWithoutCandidateInput[]
    upsert?: CandidateStatusUpsertWithWhereUniqueWithoutCandidateInput | CandidateStatusUpsertWithWhereUniqueWithoutCandidateInput[]
    createMany?: CandidateStatusCreateManyCandidateInputEnvelope
    set?: CandidateStatusWhereUniqueInput | CandidateStatusWhereUniqueInput[]
    disconnect?: CandidateStatusWhereUniqueInput | CandidateStatusWhereUniqueInput[]
    delete?: CandidateStatusWhereUniqueInput | CandidateStatusWhereUniqueInput[]
    connect?: CandidateStatusWhereUniqueInput | CandidateStatusWhereUniqueInput[]
    update?: CandidateStatusUpdateWithWhereUniqueWithoutCandidateInput | CandidateStatusUpdateWithWhereUniqueWithoutCandidateInput[]
    updateMany?: CandidateStatusUpdateManyWithWhereWithoutCandidateInput | CandidateStatusUpdateManyWithWhereWithoutCandidateInput[]
    deleteMany?: CandidateStatusScalarWhereInput | CandidateStatusScalarWhereInput[]
  }

  export type DocumentUpdateManyWithoutCandidateNestedInput = {
    create?: XOR<DocumentCreateWithoutCandidateInput, DocumentUncheckedCreateWithoutCandidateInput> | DocumentCreateWithoutCandidateInput[] | DocumentUncheckedCreateWithoutCandidateInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutCandidateInput | DocumentCreateOrConnectWithoutCandidateInput[]
    upsert?: DocumentUpsertWithWhereUniqueWithoutCandidateInput | DocumentUpsertWithWhereUniqueWithoutCandidateInput[]
    createMany?: DocumentCreateManyCandidateInputEnvelope
    set?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    disconnect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    delete?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    update?: DocumentUpdateWithWhereUniqueWithoutCandidateInput | DocumentUpdateWithWhereUniqueWithoutCandidateInput[]
    updateMany?: DocumentUpdateManyWithWhereWithoutCandidateInput | DocumentUpdateManyWithWhereWithoutCandidateInput[]
    deleteMany?: DocumentScalarWhereInput | DocumentScalarWhereInput[]
  }

  export type AddressUpdateManyWithoutCandidateNestedInput = {
    create?: XOR<AddressCreateWithoutCandidateInput, AddressUncheckedCreateWithoutCandidateInput> | AddressCreateWithoutCandidateInput[] | AddressUncheckedCreateWithoutCandidateInput[]
    connectOrCreate?: AddressCreateOrConnectWithoutCandidateInput | AddressCreateOrConnectWithoutCandidateInput[]
    upsert?: AddressUpsertWithWhereUniqueWithoutCandidateInput | AddressUpsertWithWhereUniqueWithoutCandidateInput[]
    createMany?: AddressCreateManyCandidateInputEnvelope
    set?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
    disconnect?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
    delete?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
    connect?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
    update?: AddressUpdateWithWhereUniqueWithoutCandidateInput | AddressUpdateWithWhereUniqueWithoutCandidateInput[]
    updateMany?: AddressUpdateManyWithWhereWithoutCandidateInput | AddressUpdateManyWithWhereWithoutCandidateInput[]
    deleteMany?: AddressScalarWhereInput | AddressScalarWhereInput[]
  }

  export type TestUncheckedUpdateManyWithoutCandidateNestedInput = {
    create?: XOR<TestCreateWithoutCandidateInput, TestUncheckedCreateWithoutCandidateInput> | TestCreateWithoutCandidateInput[] | TestUncheckedCreateWithoutCandidateInput[]
    connectOrCreate?: TestCreateOrConnectWithoutCandidateInput | TestCreateOrConnectWithoutCandidateInput[]
    upsert?: TestUpsertWithWhereUniqueWithoutCandidateInput | TestUpsertWithWhereUniqueWithoutCandidateInput[]
    createMany?: TestCreateManyCandidateInputEnvelope
    set?: TestWhereUniqueInput | TestWhereUniqueInput[]
    disconnect?: TestWhereUniqueInput | TestWhereUniqueInput[]
    delete?: TestWhereUniqueInput | TestWhereUniqueInput[]
    connect?: TestWhereUniqueInput | TestWhereUniqueInput[]
    update?: TestUpdateWithWhereUniqueWithoutCandidateInput | TestUpdateWithWhereUniqueWithoutCandidateInput[]
    updateMany?: TestUpdateManyWithWhereWithoutCandidateInput | TestUpdateManyWithWhereWithoutCandidateInput[]
    deleteMany?: TestScalarWhereInput | TestScalarWhereInput[]
  }

  export type CandidateStatusUncheckedUpdateManyWithoutCandidateNestedInput = {
    create?: XOR<CandidateStatusCreateWithoutCandidateInput, CandidateStatusUncheckedCreateWithoutCandidateInput> | CandidateStatusCreateWithoutCandidateInput[] | CandidateStatusUncheckedCreateWithoutCandidateInput[]
    connectOrCreate?: CandidateStatusCreateOrConnectWithoutCandidateInput | CandidateStatusCreateOrConnectWithoutCandidateInput[]
    upsert?: CandidateStatusUpsertWithWhereUniqueWithoutCandidateInput | CandidateStatusUpsertWithWhereUniqueWithoutCandidateInput[]
    createMany?: CandidateStatusCreateManyCandidateInputEnvelope
    set?: CandidateStatusWhereUniqueInput | CandidateStatusWhereUniqueInput[]
    disconnect?: CandidateStatusWhereUniqueInput | CandidateStatusWhereUniqueInput[]
    delete?: CandidateStatusWhereUniqueInput | CandidateStatusWhereUniqueInput[]
    connect?: CandidateStatusWhereUniqueInput | CandidateStatusWhereUniqueInput[]
    update?: CandidateStatusUpdateWithWhereUniqueWithoutCandidateInput | CandidateStatusUpdateWithWhereUniqueWithoutCandidateInput[]
    updateMany?: CandidateStatusUpdateManyWithWhereWithoutCandidateInput | CandidateStatusUpdateManyWithWhereWithoutCandidateInput[]
    deleteMany?: CandidateStatusScalarWhereInput | CandidateStatusScalarWhereInput[]
  }

  export type DocumentUncheckedUpdateManyWithoutCandidateNestedInput = {
    create?: XOR<DocumentCreateWithoutCandidateInput, DocumentUncheckedCreateWithoutCandidateInput> | DocumentCreateWithoutCandidateInput[] | DocumentUncheckedCreateWithoutCandidateInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutCandidateInput | DocumentCreateOrConnectWithoutCandidateInput[]
    upsert?: DocumentUpsertWithWhereUniqueWithoutCandidateInput | DocumentUpsertWithWhereUniqueWithoutCandidateInput[]
    createMany?: DocumentCreateManyCandidateInputEnvelope
    set?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    disconnect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    delete?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    update?: DocumentUpdateWithWhereUniqueWithoutCandidateInput | DocumentUpdateWithWhereUniqueWithoutCandidateInput[]
    updateMany?: DocumentUpdateManyWithWhereWithoutCandidateInput | DocumentUpdateManyWithWhereWithoutCandidateInput[]
    deleteMany?: DocumentScalarWhereInput | DocumentScalarWhereInput[]
  }

  export type AddressUncheckedUpdateManyWithoutCandidateNestedInput = {
    create?: XOR<AddressCreateWithoutCandidateInput, AddressUncheckedCreateWithoutCandidateInput> | AddressCreateWithoutCandidateInput[] | AddressUncheckedCreateWithoutCandidateInput[]
    connectOrCreate?: AddressCreateOrConnectWithoutCandidateInput | AddressCreateOrConnectWithoutCandidateInput[]
    upsert?: AddressUpsertWithWhereUniqueWithoutCandidateInput | AddressUpsertWithWhereUniqueWithoutCandidateInput[]
    createMany?: AddressCreateManyCandidateInputEnvelope
    set?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
    disconnect?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
    delete?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
    connect?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
    update?: AddressUpdateWithWhereUniqueWithoutCandidateInput | AddressUpdateWithWhereUniqueWithoutCandidateInput[]
    updateMany?: AddressUpdateManyWithWhereWithoutCandidateInput | AddressUpdateManyWithWhereWithoutCandidateInput[]
    deleteMany?: AddressScalarWhereInput | AddressScalarWhereInput[]
  }

  export type CandidateCreateNestedOneWithoutAddressesInput = {
    create?: XOR<CandidateCreateWithoutAddressesInput, CandidateUncheckedCreateWithoutAddressesInput>
    connectOrCreate?: CandidateCreateOrConnectWithoutAddressesInput
    connect?: CandidateWhereUniqueInput
  }

  export type EnumAddressTypeFieldUpdateOperationsInput = {
    set?: $Enums.AddressType
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type CandidateUpdateOneRequiredWithoutAddressesNestedInput = {
    create?: XOR<CandidateCreateWithoutAddressesInput, CandidateUncheckedCreateWithoutAddressesInput>
    connectOrCreate?: CandidateCreateOrConnectWithoutAddressesInput
    upsert?: CandidateUpsertWithoutAddressesInput
    connect?: CandidateWhereUniqueInput
    update?: XOR<XOR<CandidateUpdateToOneWithWhereWithoutAddressesInput, CandidateUpdateWithoutAddressesInput>, CandidateUncheckedUpdateWithoutAddressesInput>
  }

  export type CandidateCreateNestedOneWithoutCandidate_statusesInput = {
    create?: XOR<CandidateCreateWithoutCandidate_statusesInput, CandidateUncheckedCreateWithoutCandidate_statusesInput>
    connectOrCreate?: CandidateCreateOrConnectWithoutCandidate_statusesInput
    connect?: CandidateWhereUniqueInput
  }

  export type StatusUpdateRequestsCreateNestedManyWithoutCandidate_statusInput = {
    create?: XOR<StatusUpdateRequestsCreateWithoutCandidate_statusInput, StatusUpdateRequestsUncheckedCreateWithoutCandidate_statusInput> | StatusUpdateRequestsCreateWithoutCandidate_statusInput[] | StatusUpdateRequestsUncheckedCreateWithoutCandidate_statusInput[]
    connectOrCreate?: StatusUpdateRequestsCreateOrConnectWithoutCandidate_statusInput | StatusUpdateRequestsCreateOrConnectWithoutCandidate_statusInput[]
    createMany?: StatusUpdateRequestsCreateManyCandidate_statusInputEnvelope
    connect?: StatusUpdateRequestsWhereUniqueInput | StatusUpdateRequestsWhereUniqueInput[]
  }

  export type StatusUpdateRequestsUncheckedCreateNestedManyWithoutCandidate_statusInput = {
    create?: XOR<StatusUpdateRequestsCreateWithoutCandidate_statusInput, StatusUpdateRequestsUncheckedCreateWithoutCandidate_statusInput> | StatusUpdateRequestsCreateWithoutCandidate_statusInput[] | StatusUpdateRequestsUncheckedCreateWithoutCandidate_statusInput[]
    connectOrCreate?: StatusUpdateRequestsCreateOrConnectWithoutCandidate_statusInput | StatusUpdateRequestsCreateOrConnectWithoutCandidate_statusInput[]
    createMany?: StatusUpdateRequestsCreateManyCandidate_statusInputEnvelope
    connect?: StatusUpdateRequestsWhereUniqueInput | StatusUpdateRequestsWhereUniqueInput[]
  }

  export type EnumCandidateStatusEnumFieldUpdateOperationsInput = {
    set?: $Enums.CandidateStatusEnum
  }

  export type CandidateUpdateOneRequiredWithoutCandidate_statusesNestedInput = {
    create?: XOR<CandidateCreateWithoutCandidate_statusesInput, CandidateUncheckedCreateWithoutCandidate_statusesInput>
    connectOrCreate?: CandidateCreateOrConnectWithoutCandidate_statusesInput
    upsert?: CandidateUpsertWithoutCandidate_statusesInput
    connect?: CandidateWhereUniqueInput
    update?: XOR<XOR<CandidateUpdateToOneWithWhereWithoutCandidate_statusesInput, CandidateUpdateWithoutCandidate_statusesInput>, CandidateUncheckedUpdateWithoutCandidate_statusesInput>
  }

  export type StatusUpdateRequestsUpdateManyWithoutCandidate_statusNestedInput = {
    create?: XOR<StatusUpdateRequestsCreateWithoutCandidate_statusInput, StatusUpdateRequestsUncheckedCreateWithoutCandidate_statusInput> | StatusUpdateRequestsCreateWithoutCandidate_statusInput[] | StatusUpdateRequestsUncheckedCreateWithoutCandidate_statusInput[]
    connectOrCreate?: StatusUpdateRequestsCreateOrConnectWithoutCandidate_statusInput | StatusUpdateRequestsCreateOrConnectWithoutCandidate_statusInput[]
    upsert?: StatusUpdateRequestsUpsertWithWhereUniqueWithoutCandidate_statusInput | StatusUpdateRequestsUpsertWithWhereUniqueWithoutCandidate_statusInput[]
    createMany?: StatusUpdateRequestsCreateManyCandidate_statusInputEnvelope
    set?: StatusUpdateRequestsWhereUniqueInput | StatusUpdateRequestsWhereUniqueInput[]
    disconnect?: StatusUpdateRequestsWhereUniqueInput | StatusUpdateRequestsWhereUniqueInput[]
    delete?: StatusUpdateRequestsWhereUniqueInput | StatusUpdateRequestsWhereUniqueInput[]
    connect?: StatusUpdateRequestsWhereUniqueInput | StatusUpdateRequestsWhereUniqueInput[]
    update?: StatusUpdateRequestsUpdateWithWhereUniqueWithoutCandidate_statusInput | StatusUpdateRequestsUpdateWithWhereUniqueWithoutCandidate_statusInput[]
    updateMany?: StatusUpdateRequestsUpdateManyWithWhereWithoutCandidate_statusInput | StatusUpdateRequestsUpdateManyWithWhereWithoutCandidate_statusInput[]
    deleteMany?: StatusUpdateRequestsScalarWhereInput | StatusUpdateRequestsScalarWhereInput[]
  }

  export type StatusUpdateRequestsUncheckedUpdateManyWithoutCandidate_statusNestedInput = {
    create?: XOR<StatusUpdateRequestsCreateWithoutCandidate_statusInput, StatusUpdateRequestsUncheckedCreateWithoutCandidate_statusInput> | StatusUpdateRequestsCreateWithoutCandidate_statusInput[] | StatusUpdateRequestsUncheckedCreateWithoutCandidate_statusInput[]
    connectOrCreate?: StatusUpdateRequestsCreateOrConnectWithoutCandidate_statusInput | StatusUpdateRequestsCreateOrConnectWithoutCandidate_statusInput[]
    upsert?: StatusUpdateRequestsUpsertWithWhereUniqueWithoutCandidate_statusInput | StatusUpdateRequestsUpsertWithWhereUniqueWithoutCandidate_statusInput[]
    createMany?: StatusUpdateRequestsCreateManyCandidate_statusInputEnvelope
    set?: StatusUpdateRequestsWhereUniqueInput | StatusUpdateRequestsWhereUniqueInput[]
    disconnect?: StatusUpdateRequestsWhereUniqueInput | StatusUpdateRequestsWhereUniqueInput[]
    delete?: StatusUpdateRequestsWhereUniqueInput | StatusUpdateRequestsWhereUniqueInput[]
    connect?: StatusUpdateRequestsWhereUniqueInput | StatusUpdateRequestsWhereUniqueInput[]
    update?: StatusUpdateRequestsUpdateWithWhereUniqueWithoutCandidate_statusInput | StatusUpdateRequestsUpdateWithWhereUniqueWithoutCandidate_statusInput[]
    updateMany?: StatusUpdateRequestsUpdateManyWithWhereWithoutCandidate_statusInput | StatusUpdateRequestsUpdateManyWithWhereWithoutCandidate_statusInput[]
    deleteMany?: StatusUpdateRequestsScalarWhereInput | StatusUpdateRequestsScalarWhereInput[]
  }

  export type CandidateStatusCreateNestedOneWithoutStatus_update_requestsInput = {
    create?: XOR<CandidateStatusCreateWithoutStatus_update_requestsInput, CandidateStatusUncheckedCreateWithoutStatus_update_requestsInput>
    connectOrCreate?: CandidateStatusCreateOrConnectWithoutStatus_update_requestsInput
    connect?: CandidateStatusWhereUniqueInput
  }

  export type AdminUserCreateNestedOneWithoutApproved_status_updatesInput = {
    create?: XOR<AdminUserCreateWithoutApproved_status_updatesInput, AdminUserUncheckedCreateWithoutApproved_status_updatesInput>
    connectOrCreate?: AdminUserCreateOrConnectWithoutApproved_status_updatesInput
    connect?: AdminUserWhereUniqueInput
  }

  export type EnumStatusEnumFieldUpdateOperationsInput = {
    set?: $Enums.StatusEnum
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type CandidateStatusUpdateOneRequiredWithoutStatus_update_requestsNestedInput = {
    create?: XOR<CandidateStatusCreateWithoutStatus_update_requestsInput, CandidateStatusUncheckedCreateWithoutStatus_update_requestsInput>
    connectOrCreate?: CandidateStatusCreateOrConnectWithoutStatus_update_requestsInput
    upsert?: CandidateStatusUpsertWithoutStatus_update_requestsInput
    connect?: CandidateStatusWhereUniqueInput
    update?: XOR<XOR<CandidateStatusUpdateToOneWithWhereWithoutStatus_update_requestsInput, CandidateStatusUpdateWithoutStatus_update_requestsInput>, CandidateStatusUncheckedUpdateWithoutStatus_update_requestsInput>
  }

  export type AdminUserUpdateOneWithoutApproved_status_updatesNestedInput = {
    create?: XOR<AdminUserCreateWithoutApproved_status_updatesInput, AdminUserUncheckedCreateWithoutApproved_status_updatesInput>
    connectOrCreate?: AdminUserCreateOrConnectWithoutApproved_status_updatesInput
    upsert?: AdminUserUpsertWithoutApproved_status_updatesInput
    disconnect?: AdminUserWhereInput | boolean
    delete?: AdminUserWhereInput | boolean
    connect?: AdminUserWhereUniqueInput
    update?: XOR<XOR<AdminUserUpdateToOneWithWhereWithoutApproved_status_updatesInput, AdminUserUpdateWithoutApproved_status_updatesInput>, AdminUserUncheckedUpdateWithoutApproved_status_updatesInput>
  }

  export type CandidateCreateNestedOneWithoutDocumentsInput = {
    create?: XOR<CandidateCreateWithoutDocumentsInput, CandidateUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: CandidateCreateOrConnectWithoutDocumentsInput
    connect?: CandidateWhereUniqueInput
  }

  export type EnumDocTypeEnumFieldUpdateOperationsInput = {
    set?: $Enums.DocTypeEnum
  }

  export type CandidateUpdateOneRequiredWithoutDocumentsNestedInput = {
    create?: XOR<CandidateCreateWithoutDocumentsInput, CandidateUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: CandidateCreateOrConnectWithoutDocumentsInput
    upsert?: CandidateUpsertWithoutDocumentsInput
    connect?: CandidateWhereUniqueInput
    update?: XOR<XOR<CandidateUpdateToOneWithWhereWithoutDocumentsInput, CandidateUpdateWithoutDocumentsInput>, CandidateUncheckedUpdateWithoutDocumentsInput>
  }

  export type ChoiceCreateNestedManyWithoutQuestionInput = {
    create?: XOR<ChoiceCreateWithoutQuestionInput, ChoiceUncheckedCreateWithoutQuestionInput> | ChoiceCreateWithoutQuestionInput[] | ChoiceUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: ChoiceCreateOrConnectWithoutQuestionInput | ChoiceCreateOrConnectWithoutQuestionInput[]
    createMany?: ChoiceCreateManyQuestionInputEnvelope
    connect?: ChoiceWhereUniqueInput | ChoiceWhereUniqueInput[]
  }

  export type TestQuestionCreateNestedManyWithoutQuestionInput = {
    create?: XOR<TestQuestionCreateWithoutQuestionInput, TestQuestionUncheckedCreateWithoutQuestionInput> | TestQuestionCreateWithoutQuestionInput[] | TestQuestionUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: TestQuestionCreateOrConnectWithoutQuestionInput | TestQuestionCreateOrConnectWithoutQuestionInput[]
    createMany?: TestQuestionCreateManyQuestionInputEnvelope
    connect?: TestQuestionWhereUniqueInput | TestQuestionWhereUniqueInput[]
  }

  export type TestAnswerCreateNestedManyWithoutQuestionInput = {
    create?: XOR<TestAnswerCreateWithoutQuestionInput, TestAnswerUncheckedCreateWithoutQuestionInput> | TestAnswerCreateWithoutQuestionInput[] | TestAnswerUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: TestAnswerCreateOrConnectWithoutQuestionInput | TestAnswerCreateOrConnectWithoutQuestionInput[]
    createMany?: TestAnswerCreateManyQuestionInputEnvelope
    connect?: TestAnswerWhereUniqueInput | TestAnswerWhereUniqueInput[]
  }

  export type ChoiceUncheckedCreateNestedManyWithoutQuestionInput = {
    create?: XOR<ChoiceCreateWithoutQuestionInput, ChoiceUncheckedCreateWithoutQuestionInput> | ChoiceCreateWithoutQuestionInput[] | ChoiceUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: ChoiceCreateOrConnectWithoutQuestionInput | ChoiceCreateOrConnectWithoutQuestionInput[]
    createMany?: ChoiceCreateManyQuestionInputEnvelope
    connect?: ChoiceWhereUniqueInput | ChoiceWhereUniqueInput[]
  }

  export type TestQuestionUncheckedCreateNestedManyWithoutQuestionInput = {
    create?: XOR<TestQuestionCreateWithoutQuestionInput, TestQuestionUncheckedCreateWithoutQuestionInput> | TestQuestionCreateWithoutQuestionInput[] | TestQuestionUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: TestQuestionCreateOrConnectWithoutQuestionInput | TestQuestionCreateOrConnectWithoutQuestionInput[]
    createMany?: TestQuestionCreateManyQuestionInputEnvelope
    connect?: TestQuestionWhereUniqueInput | TestQuestionWhereUniqueInput[]
  }

  export type TestAnswerUncheckedCreateNestedManyWithoutQuestionInput = {
    create?: XOR<TestAnswerCreateWithoutQuestionInput, TestAnswerUncheckedCreateWithoutQuestionInput> | TestAnswerCreateWithoutQuestionInput[] | TestAnswerUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: TestAnswerCreateOrConnectWithoutQuestionInput | TestAnswerCreateOrConnectWithoutQuestionInput[]
    createMany?: TestAnswerCreateManyQuestionInputEnvelope
    connect?: TestAnswerWhereUniqueInput | TestAnswerWhereUniqueInput[]
  }

  export type EnumDifficultyFieldUpdateOperationsInput = {
    set?: $Enums.Difficulty
  }

  export type ChoiceUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<ChoiceCreateWithoutQuestionInput, ChoiceUncheckedCreateWithoutQuestionInput> | ChoiceCreateWithoutQuestionInput[] | ChoiceUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: ChoiceCreateOrConnectWithoutQuestionInput | ChoiceCreateOrConnectWithoutQuestionInput[]
    upsert?: ChoiceUpsertWithWhereUniqueWithoutQuestionInput | ChoiceUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: ChoiceCreateManyQuestionInputEnvelope
    set?: ChoiceWhereUniqueInput | ChoiceWhereUniqueInput[]
    disconnect?: ChoiceWhereUniqueInput | ChoiceWhereUniqueInput[]
    delete?: ChoiceWhereUniqueInput | ChoiceWhereUniqueInput[]
    connect?: ChoiceWhereUniqueInput | ChoiceWhereUniqueInput[]
    update?: ChoiceUpdateWithWhereUniqueWithoutQuestionInput | ChoiceUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: ChoiceUpdateManyWithWhereWithoutQuestionInput | ChoiceUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: ChoiceScalarWhereInput | ChoiceScalarWhereInput[]
  }

  export type TestQuestionUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<TestQuestionCreateWithoutQuestionInput, TestQuestionUncheckedCreateWithoutQuestionInput> | TestQuestionCreateWithoutQuestionInput[] | TestQuestionUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: TestQuestionCreateOrConnectWithoutQuestionInput | TestQuestionCreateOrConnectWithoutQuestionInput[]
    upsert?: TestQuestionUpsertWithWhereUniqueWithoutQuestionInput | TestQuestionUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: TestQuestionCreateManyQuestionInputEnvelope
    set?: TestQuestionWhereUniqueInput | TestQuestionWhereUniqueInput[]
    disconnect?: TestQuestionWhereUniqueInput | TestQuestionWhereUniqueInput[]
    delete?: TestQuestionWhereUniqueInput | TestQuestionWhereUniqueInput[]
    connect?: TestQuestionWhereUniqueInput | TestQuestionWhereUniqueInput[]
    update?: TestQuestionUpdateWithWhereUniqueWithoutQuestionInput | TestQuestionUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: TestQuestionUpdateManyWithWhereWithoutQuestionInput | TestQuestionUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: TestQuestionScalarWhereInput | TestQuestionScalarWhereInput[]
  }

  export type TestAnswerUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<TestAnswerCreateWithoutQuestionInput, TestAnswerUncheckedCreateWithoutQuestionInput> | TestAnswerCreateWithoutQuestionInput[] | TestAnswerUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: TestAnswerCreateOrConnectWithoutQuestionInput | TestAnswerCreateOrConnectWithoutQuestionInput[]
    upsert?: TestAnswerUpsertWithWhereUniqueWithoutQuestionInput | TestAnswerUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: TestAnswerCreateManyQuestionInputEnvelope
    set?: TestAnswerWhereUniqueInput | TestAnswerWhereUniqueInput[]
    disconnect?: TestAnswerWhereUniqueInput | TestAnswerWhereUniqueInput[]
    delete?: TestAnswerWhereUniqueInput | TestAnswerWhereUniqueInput[]
    connect?: TestAnswerWhereUniqueInput | TestAnswerWhereUniqueInput[]
    update?: TestAnswerUpdateWithWhereUniqueWithoutQuestionInput | TestAnswerUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: TestAnswerUpdateManyWithWhereWithoutQuestionInput | TestAnswerUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: TestAnswerScalarWhereInput | TestAnswerScalarWhereInput[]
  }

  export type ChoiceUncheckedUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<ChoiceCreateWithoutQuestionInput, ChoiceUncheckedCreateWithoutQuestionInput> | ChoiceCreateWithoutQuestionInput[] | ChoiceUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: ChoiceCreateOrConnectWithoutQuestionInput | ChoiceCreateOrConnectWithoutQuestionInput[]
    upsert?: ChoiceUpsertWithWhereUniqueWithoutQuestionInput | ChoiceUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: ChoiceCreateManyQuestionInputEnvelope
    set?: ChoiceWhereUniqueInput | ChoiceWhereUniqueInput[]
    disconnect?: ChoiceWhereUniqueInput | ChoiceWhereUniqueInput[]
    delete?: ChoiceWhereUniqueInput | ChoiceWhereUniqueInput[]
    connect?: ChoiceWhereUniqueInput | ChoiceWhereUniqueInput[]
    update?: ChoiceUpdateWithWhereUniqueWithoutQuestionInput | ChoiceUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: ChoiceUpdateManyWithWhereWithoutQuestionInput | ChoiceUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: ChoiceScalarWhereInput | ChoiceScalarWhereInput[]
  }

  export type TestQuestionUncheckedUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<TestQuestionCreateWithoutQuestionInput, TestQuestionUncheckedCreateWithoutQuestionInput> | TestQuestionCreateWithoutQuestionInput[] | TestQuestionUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: TestQuestionCreateOrConnectWithoutQuestionInput | TestQuestionCreateOrConnectWithoutQuestionInput[]
    upsert?: TestQuestionUpsertWithWhereUniqueWithoutQuestionInput | TestQuestionUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: TestQuestionCreateManyQuestionInputEnvelope
    set?: TestQuestionWhereUniqueInput | TestQuestionWhereUniqueInput[]
    disconnect?: TestQuestionWhereUniqueInput | TestQuestionWhereUniqueInput[]
    delete?: TestQuestionWhereUniqueInput | TestQuestionWhereUniqueInput[]
    connect?: TestQuestionWhereUniqueInput | TestQuestionWhereUniqueInput[]
    update?: TestQuestionUpdateWithWhereUniqueWithoutQuestionInput | TestQuestionUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: TestQuestionUpdateManyWithWhereWithoutQuestionInput | TestQuestionUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: TestQuestionScalarWhereInput | TestQuestionScalarWhereInput[]
  }

  export type TestAnswerUncheckedUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<TestAnswerCreateWithoutQuestionInput, TestAnswerUncheckedCreateWithoutQuestionInput> | TestAnswerCreateWithoutQuestionInput[] | TestAnswerUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: TestAnswerCreateOrConnectWithoutQuestionInput | TestAnswerCreateOrConnectWithoutQuestionInput[]
    upsert?: TestAnswerUpsertWithWhereUniqueWithoutQuestionInput | TestAnswerUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: TestAnswerCreateManyQuestionInputEnvelope
    set?: TestAnswerWhereUniqueInput | TestAnswerWhereUniqueInput[]
    disconnect?: TestAnswerWhereUniqueInput | TestAnswerWhereUniqueInput[]
    delete?: TestAnswerWhereUniqueInput | TestAnswerWhereUniqueInput[]
    connect?: TestAnswerWhereUniqueInput | TestAnswerWhereUniqueInput[]
    update?: TestAnswerUpdateWithWhereUniqueWithoutQuestionInput | TestAnswerUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: TestAnswerUpdateManyWithWhereWithoutQuestionInput | TestAnswerUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: TestAnswerScalarWhereInput | TestAnswerScalarWhereInput[]
  }

  export type QuestionCreateNestedOneWithoutChoicesInput = {
    create?: XOR<QuestionCreateWithoutChoicesInput, QuestionUncheckedCreateWithoutChoicesInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutChoicesInput
    connect?: QuestionWhereUniqueInput
  }

  export type TestAnswerCreateNestedManyWithoutSelected_choiceInput = {
    create?: XOR<TestAnswerCreateWithoutSelected_choiceInput, TestAnswerUncheckedCreateWithoutSelected_choiceInput> | TestAnswerCreateWithoutSelected_choiceInput[] | TestAnswerUncheckedCreateWithoutSelected_choiceInput[]
    connectOrCreate?: TestAnswerCreateOrConnectWithoutSelected_choiceInput | TestAnswerCreateOrConnectWithoutSelected_choiceInput[]
    createMany?: TestAnswerCreateManySelected_choiceInputEnvelope
    connect?: TestAnswerWhereUniqueInput | TestAnswerWhereUniqueInput[]
  }

  export type TestAnswerUncheckedCreateNestedManyWithoutSelected_choiceInput = {
    create?: XOR<TestAnswerCreateWithoutSelected_choiceInput, TestAnswerUncheckedCreateWithoutSelected_choiceInput> | TestAnswerCreateWithoutSelected_choiceInput[] | TestAnswerUncheckedCreateWithoutSelected_choiceInput[]
    connectOrCreate?: TestAnswerCreateOrConnectWithoutSelected_choiceInput | TestAnswerCreateOrConnectWithoutSelected_choiceInput[]
    createMany?: TestAnswerCreateManySelected_choiceInputEnvelope
    connect?: TestAnswerWhereUniqueInput | TestAnswerWhereUniqueInput[]
  }

  export type QuestionUpdateOneRequiredWithoutChoicesNestedInput = {
    create?: XOR<QuestionCreateWithoutChoicesInput, QuestionUncheckedCreateWithoutChoicesInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutChoicesInput
    upsert?: QuestionUpsertWithoutChoicesInput
    connect?: QuestionWhereUniqueInput
    update?: XOR<XOR<QuestionUpdateToOneWithWhereWithoutChoicesInput, QuestionUpdateWithoutChoicesInput>, QuestionUncheckedUpdateWithoutChoicesInput>
  }

  export type TestAnswerUpdateManyWithoutSelected_choiceNestedInput = {
    create?: XOR<TestAnswerCreateWithoutSelected_choiceInput, TestAnswerUncheckedCreateWithoutSelected_choiceInput> | TestAnswerCreateWithoutSelected_choiceInput[] | TestAnswerUncheckedCreateWithoutSelected_choiceInput[]
    connectOrCreate?: TestAnswerCreateOrConnectWithoutSelected_choiceInput | TestAnswerCreateOrConnectWithoutSelected_choiceInput[]
    upsert?: TestAnswerUpsertWithWhereUniqueWithoutSelected_choiceInput | TestAnswerUpsertWithWhereUniqueWithoutSelected_choiceInput[]
    createMany?: TestAnswerCreateManySelected_choiceInputEnvelope
    set?: TestAnswerWhereUniqueInput | TestAnswerWhereUniqueInput[]
    disconnect?: TestAnswerWhereUniqueInput | TestAnswerWhereUniqueInput[]
    delete?: TestAnswerWhereUniqueInput | TestAnswerWhereUniqueInput[]
    connect?: TestAnswerWhereUniqueInput | TestAnswerWhereUniqueInput[]
    update?: TestAnswerUpdateWithWhereUniqueWithoutSelected_choiceInput | TestAnswerUpdateWithWhereUniqueWithoutSelected_choiceInput[]
    updateMany?: TestAnswerUpdateManyWithWhereWithoutSelected_choiceInput | TestAnswerUpdateManyWithWhereWithoutSelected_choiceInput[]
    deleteMany?: TestAnswerScalarWhereInput | TestAnswerScalarWhereInput[]
  }

  export type TestAnswerUncheckedUpdateManyWithoutSelected_choiceNestedInput = {
    create?: XOR<TestAnswerCreateWithoutSelected_choiceInput, TestAnswerUncheckedCreateWithoutSelected_choiceInput> | TestAnswerCreateWithoutSelected_choiceInput[] | TestAnswerUncheckedCreateWithoutSelected_choiceInput[]
    connectOrCreate?: TestAnswerCreateOrConnectWithoutSelected_choiceInput | TestAnswerCreateOrConnectWithoutSelected_choiceInput[]
    upsert?: TestAnswerUpsertWithWhereUniqueWithoutSelected_choiceInput | TestAnswerUpsertWithWhereUniqueWithoutSelected_choiceInput[]
    createMany?: TestAnswerCreateManySelected_choiceInputEnvelope
    set?: TestAnswerWhereUniqueInput | TestAnswerWhereUniqueInput[]
    disconnect?: TestAnswerWhereUniqueInput | TestAnswerWhereUniqueInput[]
    delete?: TestAnswerWhereUniqueInput | TestAnswerWhereUniqueInput[]
    connect?: TestAnswerWhereUniqueInput | TestAnswerWhereUniqueInput[]
    update?: TestAnswerUpdateWithWhereUniqueWithoutSelected_choiceInput | TestAnswerUpdateWithWhereUniqueWithoutSelected_choiceInput[]
    updateMany?: TestAnswerUpdateManyWithWhereWithoutSelected_choiceInput | TestAnswerUpdateManyWithWhereWithoutSelected_choiceInput[]
    deleteMany?: TestAnswerScalarWhereInput | TestAnswerScalarWhereInput[]
  }

  export type CandidateCreateNestedOneWithoutTestsInput = {
    create?: XOR<CandidateCreateWithoutTestsInput, CandidateUncheckedCreateWithoutTestsInput>
    connectOrCreate?: CandidateCreateOrConnectWithoutTestsInput
    connect?: CandidateWhereUniqueInput
  }

  export type TestQuestionCreateNestedManyWithoutTestInput = {
    create?: XOR<TestQuestionCreateWithoutTestInput, TestQuestionUncheckedCreateWithoutTestInput> | TestQuestionCreateWithoutTestInput[] | TestQuestionUncheckedCreateWithoutTestInput[]
    connectOrCreate?: TestQuestionCreateOrConnectWithoutTestInput | TestQuestionCreateOrConnectWithoutTestInput[]
    createMany?: TestQuestionCreateManyTestInputEnvelope
    connect?: TestQuestionWhereUniqueInput | TestQuestionWhereUniqueInput[]
  }

  export type TestAnswerCreateNestedManyWithoutTestInput = {
    create?: XOR<TestAnswerCreateWithoutTestInput, TestAnswerUncheckedCreateWithoutTestInput> | TestAnswerCreateWithoutTestInput[] | TestAnswerUncheckedCreateWithoutTestInput[]
    connectOrCreate?: TestAnswerCreateOrConnectWithoutTestInput | TestAnswerCreateOrConnectWithoutTestInput[]
    createMany?: TestAnswerCreateManyTestInputEnvelope
    connect?: TestAnswerWhereUniqueInput | TestAnswerWhereUniqueInput[]
  }

  export type TestQuestionUncheckedCreateNestedManyWithoutTestInput = {
    create?: XOR<TestQuestionCreateWithoutTestInput, TestQuestionUncheckedCreateWithoutTestInput> | TestQuestionCreateWithoutTestInput[] | TestQuestionUncheckedCreateWithoutTestInput[]
    connectOrCreate?: TestQuestionCreateOrConnectWithoutTestInput | TestQuestionCreateOrConnectWithoutTestInput[]
    createMany?: TestQuestionCreateManyTestInputEnvelope
    connect?: TestQuestionWhereUniqueInput | TestQuestionWhereUniqueInput[]
  }

  export type TestAnswerUncheckedCreateNestedManyWithoutTestInput = {
    create?: XOR<TestAnswerCreateWithoutTestInput, TestAnswerUncheckedCreateWithoutTestInput> | TestAnswerCreateWithoutTestInput[] | TestAnswerUncheckedCreateWithoutTestInput[]
    connectOrCreate?: TestAnswerCreateOrConnectWithoutTestInput | TestAnswerCreateOrConnectWithoutTestInput[]
    createMany?: TestAnswerCreateManyTestInputEnvelope
    connect?: TestAnswerWhereUniqueInput | TestAnswerWhereUniqueInput[]
  }

  export type CandidateUpdateOneRequiredWithoutTestsNestedInput = {
    create?: XOR<CandidateCreateWithoutTestsInput, CandidateUncheckedCreateWithoutTestsInput>
    connectOrCreate?: CandidateCreateOrConnectWithoutTestsInput
    upsert?: CandidateUpsertWithoutTestsInput
    connect?: CandidateWhereUniqueInput
    update?: XOR<XOR<CandidateUpdateToOneWithWhereWithoutTestsInput, CandidateUpdateWithoutTestsInput>, CandidateUncheckedUpdateWithoutTestsInput>
  }

  export type TestQuestionUpdateManyWithoutTestNestedInput = {
    create?: XOR<TestQuestionCreateWithoutTestInput, TestQuestionUncheckedCreateWithoutTestInput> | TestQuestionCreateWithoutTestInput[] | TestQuestionUncheckedCreateWithoutTestInput[]
    connectOrCreate?: TestQuestionCreateOrConnectWithoutTestInput | TestQuestionCreateOrConnectWithoutTestInput[]
    upsert?: TestQuestionUpsertWithWhereUniqueWithoutTestInput | TestQuestionUpsertWithWhereUniqueWithoutTestInput[]
    createMany?: TestQuestionCreateManyTestInputEnvelope
    set?: TestQuestionWhereUniqueInput | TestQuestionWhereUniqueInput[]
    disconnect?: TestQuestionWhereUniqueInput | TestQuestionWhereUniqueInput[]
    delete?: TestQuestionWhereUniqueInput | TestQuestionWhereUniqueInput[]
    connect?: TestQuestionWhereUniqueInput | TestQuestionWhereUniqueInput[]
    update?: TestQuestionUpdateWithWhereUniqueWithoutTestInput | TestQuestionUpdateWithWhereUniqueWithoutTestInput[]
    updateMany?: TestQuestionUpdateManyWithWhereWithoutTestInput | TestQuestionUpdateManyWithWhereWithoutTestInput[]
    deleteMany?: TestQuestionScalarWhereInput | TestQuestionScalarWhereInput[]
  }

  export type TestAnswerUpdateManyWithoutTestNestedInput = {
    create?: XOR<TestAnswerCreateWithoutTestInput, TestAnswerUncheckedCreateWithoutTestInput> | TestAnswerCreateWithoutTestInput[] | TestAnswerUncheckedCreateWithoutTestInput[]
    connectOrCreate?: TestAnswerCreateOrConnectWithoutTestInput | TestAnswerCreateOrConnectWithoutTestInput[]
    upsert?: TestAnswerUpsertWithWhereUniqueWithoutTestInput | TestAnswerUpsertWithWhereUniqueWithoutTestInput[]
    createMany?: TestAnswerCreateManyTestInputEnvelope
    set?: TestAnswerWhereUniqueInput | TestAnswerWhereUniqueInput[]
    disconnect?: TestAnswerWhereUniqueInput | TestAnswerWhereUniqueInput[]
    delete?: TestAnswerWhereUniqueInput | TestAnswerWhereUniqueInput[]
    connect?: TestAnswerWhereUniqueInput | TestAnswerWhereUniqueInput[]
    update?: TestAnswerUpdateWithWhereUniqueWithoutTestInput | TestAnswerUpdateWithWhereUniqueWithoutTestInput[]
    updateMany?: TestAnswerUpdateManyWithWhereWithoutTestInput | TestAnswerUpdateManyWithWhereWithoutTestInput[]
    deleteMany?: TestAnswerScalarWhereInput | TestAnswerScalarWhereInput[]
  }

  export type TestQuestionUncheckedUpdateManyWithoutTestNestedInput = {
    create?: XOR<TestQuestionCreateWithoutTestInput, TestQuestionUncheckedCreateWithoutTestInput> | TestQuestionCreateWithoutTestInput[] | TestQuestionUncheckedCreateWithoutTestInput[]
    connectOrCreate?: TestQuestionCreateOrConnectWithoutTestInput | TestQuestionCreateOrConnectWithoutTestInput[]
    upsert?: TestQuestionUpsertWithWhereUniqueWithoutTestInput | TestQuestionUpsertWithWhereUniqueWithoutTestInput[]
    createMany?: TestQuestionCreateManyTestInputEnvelope
    set?: TestQuestionWhereUniqueInput | TestQuestionWhereUniqueInput[]
    disconnect?: TestQuestionWhereUniqueInput | TestQuestionWhereUniqueInput[]
    delete?: TestQuestionWhereUniqueInput | TestQuestionWhereUniqueInput[]
    connect?: TestQuestionWhereUniqueInput | TestQuestionWhereUniqueInput[]
    update?: TestQuestionUpdateWithWhereUniqueWithoutTestInput | TestQuestionUpdateWithWhereUniqueWithoutTestInput[]
    updateMany?: TestQuestionUpdateManyWithWhereWithoutTestInput | TestQuestionUpdateManyWithWhereWithoutTestInput[]
    deleteMany?: TestQuestionScalarWhereInput | TestQuestionScalarWhereInput[]
  }

  export type TestAnswerUncheckedUpdateManyWithoutTestNestedInput = {
    create?: XOR<TestAnswerCreateWithoutTestInput, TestAnswerUncheckedCreateWithoutTestInput> | TestAnswerCreateWithoutTestInput[] | TestAnswerUncheckedCreateWithoutTestInput[]
    connectOrCreate?: TestAnswerCreateOrConnectWithoutTestInput | TestAnswerCreateOrConnectWithoutTestInput[]
    upsert?: TestAnswerUpsertWithWhereUniqueWithoutTestInput | TestAnswerUpsertWithWhereUniqueWithoutTestInput[]
    createMany?: TestAnswerCreateManyTestInputEnvelope
    set?: TestAnswerWhereUniqueInput | TestAnswerWhereUniqueInput[]
    disconnect?: TestAnswerWhereUniqueInput | TestAnswerWhereUniqueInput[]
    delete?: TestAnswerWhereUniqueInput | TestAnswerWhereUniqueInput[]
    connect?: TestAnswerWhereUniqueInput | TestAnswerWhereUniqueInput[]
    update?: TestAnswerUpdateWithWhereUniqueWithoutTestInput | TestAnswerUpdateWithWhereUniqueWithoutTestInput[]
    updateMany?: TestAnswerUpdateManyWithWhereWithoutTestInput | TestAnswerUpdateManyWithWhereWithoutTestInput[]
    deleteMany?: TestAnswerScalarWhereInput | TestAnswerScalarWhereInput[]
  }

  export type TestCreateNestedOneWithoutTest_questionsInput = {
    create?: XOR<TestCreateWithoutTest_questionsInput, TestUncheckedCreateWithoutTest_questionsInput>
    connectOrCreate?: TestCreateOrConnectWithoutTest_questionsInput
    connect?: TestWhereUniqueInput
  }

  export type QuestionCreateNestedOneWithoutTest_questionsInput = {
    create?: XOR<QuestionCreateWithoutTest_questionsInput, QuestionUncheckedCreateWithoutTest_questionsInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutTest_questionsInput
    connect?: QuestionWhereUniqueInput
  }

  export type TestUpdateOneRequiredWithoutTest_questionsNestedInput = {
    create?: XOR<TestCreateWithoutTest_questionsInput, TestUncheckedCreateWithoutTest_questionsInput>
    connectOrCreate?: TestCreateOrConnectWithoutTest_questionsInput
    upsert?: TestUpsertWithoutTest_questionsInput
    connect?: TestWhereUniqueInput
    update?: XOR<XOR<TestUpdateToOneWithWhereWithoutTest_questionsInput, TestUpdateWithoutTest_questionsInput>, TestUncheckedUpdateWithoutTest_questionsInput>
  }

  export type QuestionUpdateOneRequiredWithoutTest_questionsNestedInput = {
    create?: XOR<QuestionCreateWithoutTest_questionsInput, QuestionUncheckedCreateWithoutTest_questionsInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutTest_questionsInput
    upsert?: QuestionUpsertWithoutTest_questionsInput
    connect?: QuestionWhereUniqueInput
    update?: XOR<XOR<QuestionUpdateToOneWithWhereWithoutTest_questionsInput, QuestionUpdateWithoutTest_questionsInput>, QuestionUncheckedUpdateWithoutTest_questionsInput>
  }

  export type TestCreateNestedOneWithoutTest_answersInput = {
    create?: XOR<TestCreateWithoutTest_answersInput, TestUncheckedCreateWithoutTest_answersInput>
    connectOrCreate?: TestCreateOrConnectWithoutTest_answersInput
    connect?: TestWhereUniqueInput
  }

  export type QuestionCreateNestedOneWithoutTestAnswersInput = {
    create?: XOR<QuestionCreateWithoutTestAnswersInput, QuestionUncheckedCreateWithoutTestAnswersInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutTestAnswersInput
    connect?: QuestionWhereUniqueInput
  }

  export type ChoiceCreateNestedOneWithoutSelected_answersInput = {
    create?: XOR<ChoiceCreateWithoutSelected_answersInput, ChoiceUncheckedCreateWithoutSelected_answersInput>
    connectOrCreate?: ChoiceCreateOrConnectWithoutSelected_answersInput
    connect?: ChoiceWhereUniqueInput
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type TestUpdateOneRequiredWithoutTest_answersNestedInput = {
    create?: XOR<TestCreateWithoutTest_answersInput, TestUncheckedCreateWithoutTest_answersInput>
    connectOrCreate?: TestCreateOrConnectWithoutTest_answersInput
    upsert?: TestUpsertWithoutTest_answersInput
    connect?: TestWhereUniqueInput
    update?: XOR<XOR<TestUpdateToOneWithWhereWithoutTest_answersInput, TestUpdateWithoutTest_answersInput>, TestUncheckedUpdateWithoutTest_answersInput>
  }

  export type QuestionUpdateOneRequiredWithoutTestAnswersNestedInput = {
    create?: XOR<QuestionCreateWithoutTestAnswersInput, QuestionUncheckedCreateWithoutTestAnswersInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutTestAnswersInput
    upsert?: QuestionUpsertWithoutTestAnswersInput
    connect?: QuestionWhereUniqueInput
    update?: XOR<XOR<QuestionUpdateToOneWithWhereWithoutTestAnswersInput, QuestionUpdateWithoutTestAnswersInput>, QuestionUncheckedUpdateWithoutTestAnswersInput>
  }

  export type ChoiceUpdateOneWithoutSelected_answersNestedInput = {
    create?: XOR<ChoiceCreateWithoutSelected_answersInput, ChoiceUncheckedCreateWithoutSelected_answersInput>
    connectOrCreate?: ChoiceCreateOrConnectWithoutSelected_answersInput
    upsert?: ChoiceUpsertWithoutSelected_answersInput
    disconnect?: ChoiceWhereInput | boolean
    delete?: ChoiceWhereInput | boolean
    connect?: ChoiceWhereUniqueInput
    update?: XOR<XOR<ChoiceUpdateToOneWithWhereWithoutSelected_answersInput, ChoiceUpdateWithoutSelected_answersInput>, ChoiceUncheckedUpdateWithoutSelected_answersInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumAddressTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AddressType | EnumAddressTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AddressType[]
    notIn?: $Enums.AddressType[]
    not?: NestedEnumAddressTypeFilter<$PrismaModel> | $Enums.AddressType
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumAddressTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AddressType | EnumAddressTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AddressType[]
    notIn?: $Enums.AddressType[]
    not?: NestedEnumAddressTypeWithAggregatesFilter<$PrismaModel> | $Enums.AddressType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAddressTypeFilter<$PrismaModel>
    _max?: NestedEnumAddressTypeFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumCandidateStatusEnumFilter<$PrismaModel = never> = {
    equals?: $Enums.CandidateStatusEnum | EnumCandidateStatusEnumFieldRefInput<$PrismaModel>
    in?: $Enums.CandidateStatusEnum[]
    notIn?: $Enums.CandidateStatusEnum[]
    not?: NestedEnumCandidateStatusEnumFilter<$PrismaModel> | $Enums.CandidateStatusEnum
  }

  export type NestedEnumCandidateStatusEnumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CandidateStatusEnum | EnumCandidateStatusEnumFieldRefInput<$PrismaModel>
    in?: $Enums.CandidateStatusEnum[]
    notIn?: $Enums.CandidateStatusEnum[]
    not?: NestedEnumCandidateStatusEnumWithAggregatesFilter<$PrismaModel> | $Enums.CandidateStatusEnum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCandidateStatusEnumFilter<$PrismaModel>
    _max?: NestedEnumCandidateStatusEnumFilter<$PrismaModel>
  }

  export type NestedEnumStatusEnumFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusEnum | EnumStatusEnumFieldRefInput<$PrismaModel>
    in?: $Enums.StatusEnum[]
    notIn?: $Enums.StatusEnum[]
    not?: NestedEnumStatusEnumFilter<$PrismaModel> | $Enums.StatusEnum
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumStatusEnumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusEnum | EnumStatusEnumFieldRefInput<$PrismaModel>
    in?: $Enums.StatusEnum[]
    notIn?: $Enums.StatusEnum[]
    not?: NestedEnumStatusEnumWithAggregatesFilter<$PrismaModel> | $Enums.StatusEnum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusEnumFilter<$PrismaModel>
    _max?: NestedEnumStatusEnumFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumDocTypeEnumFilter<$PrismaModel = never> = {
    equals?: $Enums.DocTypeEnum | EnumDocTypeEnumFieldRefInput<$PrismaModel>
    in?: $Enums.DocTypeEnum[]
    notIn?: $Enums.DocTypeEnum[]
    not?: NestedEnumDocTypeEnumFilter<$PrismaModel> | $Enums.DocTypeEnum
  }

  export type NestedEnumDocTypeEnumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DocTypeEnum | EnumDocTypeEnumFieldRefInput<$PrismaModel>
    in?: $Enums.DocTypeEnum[]
    notIn?: $Enums.DocTypeEnum[]
    not?: NestedEnumDocTypeEnumWithAggregatesFilter<$PrismaModel> | $Enums.DocTypeEnum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDocTypeEnumFilter<$PrismaModel>
    _max?: NestedEnumDocTypeEnumFilter<$PrismaModel>
  }

  export type NestedEnumDifficultyFilter<$PrismaModel = never> = {
    equals?: $Enums.Difficulty | EnumDifficultyFieldRefInput<$PrismaModel>
    in?: $Enums.Difficulty[]
    notIn?: $Enums.Difficulty[]
    not?: NestedEnumDifficultyFilter<$PrismaModel> | $Enums.Difficulty
  }

  export type NestedEnumDifficultyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Difficulty | EnumDifficultyFieldRefInput<$PrismaModel>
    in?: $Enums.Difficulty[]
    notIn?: $Enums.Difficulty[]
    not?: NestedEnumDifficultyWithAggregatesFilter<$PrismaModel> | $Enums.Difficulty
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDifficultyFilter<$PrismaModel>
    _max?: NestedEnumDifficultyFilter<$PrismaModel>
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type StatusUpdateRequestsCreateWithoutApproverInput = {
    requested_status: $Enums.StatusEnum
    request_by?: number | null
    status?: $Enums.StatusEnum
    created_at?: Date | string
    approved_at?: Date | string | null
    candidate_status: CandidateStatusCreateNestedOneWithoutStatus_update_requestsInput
  }

  export type StatusUpdateRequestsUncheckedCreateWithoutApproverInput = {
    status_update_request_id?: number
    candidate_status_id: number
    requested_status: $Enums.StatusEnum
    request_by?: number | null
    status?: $Enums.StatusEnum
    created_at?: Date | string
    approved_at?: Date | string | null
  }

  export type StatusUpdateRequestsCreateOrConnectWithoutApproverInput = {
    where: StatusUpdateRequestsWhereUniqueInput
    create: XOR<StatusUpdateRequestsCreateWithoutApproverInput, StatusUpdateRequestsUncheckedCreateWithoutApproverInput>
  }

  export type StatusUpdateRequestsCreateManyApproverInputEnvelope = {
    data: StatusUpdateRequestsCreateManyApproverInput | StatusUpdateRequestsCreateManyApproverInput[]
    skipDuplicates?: boolean
  }

  export type StatusUpdateRequestsUpsertWithWhereUniqueWithoutApproverInput = {
    where: StatusUpdateRequestsWhereUniqueInput
    update: XOR<StatusUpdateRequestsUpdateWithoutApproverInput, StatusUpdateRequestsUncheckedUpdateWithoutApproverInput>
    create: XOR<StatusUpdateRequestsCreateWithoutApproverInput, StatusUpdateRequestsUncheckedCreateWithoutApproverInput>
  }

  export type StatusUpdateRequestsUpdateWithWhereUniqueWithoutApproverInput = {
    where: StatusUpdateRequestsWhereUniqueInput
    data: XOR<StatusUpdateRequestsUpdateWithoutApproverInput, StatusUpdateRequestsUncheckedUpdateWithoutApproverInput>
  }

  export type StatusUpdateRequestsUpdateManyWithWhereWithoutApproverInput = {
    where: StatusUpdateRequestsScalarWhereInput
    data: XOR<StatusUpdateRequestsUpdateManyMutationInput, StatusUpdateRequestsUncheckedUpdateManyWithoutApproverInput>
  }

  export type StatusUpdateRequestsScalarWhereInput = {
    AND?: StatusUpdateRequestsScalarWhereInput | StatusUpdateRequestsScalarWhereInput[]
    OR?: StatusUpdateRequestsScalarWhereInput[]
    NOT?: StatusUpdateRequestsScalarWhereInput | StatusUpdateRequestsScalarWhereInput[]
    status_update_request_id?: IntFilter<"StatusUpdateRequests"> | number
    candidate_status_id?: IntFilter<"StatusUpdateRequests"> | number
    requested_status?: EnumStatusEnumFilter<"StatusUpdateRequests"> | $Enums.StatusEnum
    request_by?: IntNullableFilter<"StatusUpdateRequests"> | number | null
    approve_by?: IntNullableFilter<"StatusUpdateRequests"> | number | null
    status?: EnumStatusEnumFilter<"StatusUpdateRequests"> | $Enums.StatusEnum
    created_at?: DateTimeFilter<"StatusUpdateRequests"> | Date | string
    approved_at?: DateTimeNullableFilter<"StatusUpdateRequests"> | Date | string | null
  }

  export type TestCreateWithoutCandidateInput = {
    total_score?: number | null
    created_at?: Date | string
    completed_at?: Date | string | null
    test_questions?: TestQuestionCreateNestedManyWithoutTestInput
    test_answers?: TestAnswerCreateNestedManyWithoutTestInput
  }

  export type TestUncheckedCreateWithoutCandidateInput = {
    test_id?: number
    total_score?: number | null
    created_at?: Date | string
    completed_at?: Date | string | null
    test_questions?: TestQuestionUncheckedCreateNestedManyWithoutTestInput
    test_answers?: TestAnswerUncheckedCreateNestedManyWithoutTestInput
  }

  export type TestCreateOrConnectWithoutCandidateInput = {
    where: TestWhereUniqueInput
    create: XOR<TestCreateWithoutCandidateInput, TestUncheckedCreateWithoutCandidateInput>
  }

  export type TestCreateManyCandidateInputEnvelope = {
    data: TestCreateManyCandidateInput | TestCreateManyCandidateInput[]
    skipDuplicates?: boolean
  }

  export type CandidateStatusCreateWithoutCandidateInput = {
    status: $Enums.CandidateStatusEnum
    updated_by?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    status_update_requests?: StatusUpdateRequestsCreateNestedManyWithoutCandidate_statusInput
  }

  export type CandidateStatusUncheckedCreateWithoutCandidateInput = {
    candidate_status_id?: number
    status: $Enums.CandidateStatusEnum
    updated_by?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    status_update_requests?: StatusUpdateRequestsUncheckedCreateNestedManyWithoutCandidate_statusInput
  }

  export type CandidateStatusCreateOrConnectWithoutCandidateInput = {
    where: CandidateStatusWhereUniqueInput
    create: XOR<CandidateStatusCreateWithoutCandidateInput, CandidateStatusUncheckedCreateWithoutCandidateInput>
  }

  export type CandidateStatusCreateManyCandidateInputEnvelope = {
    data: CandidateStatusCreateManyCandidateInput | CandidateStatusCreateManyCandidateInput[]
    skipDuplicates?: boolean
  }

  export type DocumentCreateWithoutCandidateInput = {
    file_url: string
    file_type: string
    doc_type: $Enums.DocTypeEnum
    uploaded_at?: Date | string
  }

  export type DocumentUncheckedCreateWithoutCandidateInput = {
    document_id?: number
    file_url: string
    file_type: string
    doc_type: $Enums.DocTypeEnum
    uploaded_at?: Date | string
  }

  export type DocumentCreateOrConnectWithoutCandidateInput = {
    where: DocumentWhereUniqueInput
    create: XOR<DocumentCreateWithoutCandidateInput, DocumentUncheckedCreateWithoutCandidateInput>
  }

  export type DocumentCreateManyCandidateInputEnvelope = {
    data: DocumentCreateManyCandidateInput | DocumentCreateManyCandidateInput[]
    skipDuplicates?: boolean
  }

  export type AddressCreateWithoutCandidateInput = {
    address_line1: string
    address_line2?: string | null
    city: string
    state?: string | null
    postal_code: string
    country: string
    address_type: $Enums.AddressType
    is_current?: boolean
  }

  export type AddressUncheckedCreateWithoutCandidateInput = {
    address_id?: number
    address_line1: string
    address_line2?: string | null
    city: string
    state?: string | null
    postal_code: string
    country: string
    address_type: $Enums.AddressType
    is_current?: boolean
  }

  export type AddressCreateOrConnectWithoutCandidateInput = {
    where: AddressWhereUniqueInput
    create: XOR<AddressCreateWithoutCandidateInput, AddressUncheckedCreateWithoutCandidateInput>
  }

  export type AddressCreateManyCandidateInputEnvelope = {
    data: AddressCreateManyCandidateInput | AddressCreateManyCandidateInput[]
    skipDuplicates?: boolean
  }

  export type TestUpsertWithWhereUniqueWithoutCandidateInput = {
    where: TestWhereUniqueInput
    update: XOR<TestUpdateWithoutCandidateInput, TestUncheckedUpdateWithoutCandidateInput>
    create: XOR<TestCreateWithoutCandidateInput, TestUncheckedCreateWithoutCandidateInput>
  }

  export type TestUpdateWithWhereUniqueWithoutCandidateInput = {
    where: TestWhereUniqueInput
    data: XOR<TestUpdateWithoutCandidateInput, TestUncheckedUpdateWithoutCandidateInput>
  }

  export type TestUpdateManyWithWhereWithoutCandidateInput = {
    where: TestScalarWhereInput
    data: XOR<TestUpdateManyMutationInput, TestUncheckedUpdateManyWithoutCandidateInput>
  }

  export type TestScalarWhereInput = {
    AND?: TestScalarWhereInput | TestScalarWhereInput[]
    OR?: TestScalarWhereInput[]
    NOT?: TestScalarWhereInput | TestScalarWhereInput[]
    test_id?: IntFilter<"Test"> | number
    candidate_id?: IntFilter<"Test"> | number
    total_score?: IntNullableFilter<"Test"> | number | null
    created_at?: DateTimeFilter<"Test"> | Date | string
    completed_at?: DateTimeNullableFilter<"Test"> | Date | string | null
  }

  export type CandidateStatusUpsertWithWhereUniqueWithoutCandidateInput = {
    where: CandidateStatusWhereUniqueInput
    update: XOR<CandidateStatusUpdateWithoutCandidateInput, CandidateStatusUncheckedUpdateWithoutCandidateInput>
    create: XOR<CandidateStatusCreateWithoutCandidateInput, CandidateStatusUncheckedCreateWithoutCandidateInput>
  }

  export type CandidateStatusUpdateWithWhereUniqueWithoutCandidateInput = {
    where: CandidateStatusWhereUniqueInput
    data: XOR<CandidateStatusUpdateWithoutCandidateInput, CandidateStatusUncheckedUpdateWithoutCandidateInput>
  }

  export type CandidateStatusUpdateManyWithWhereWithoutCandidateInput = {
    where: CandidateStatusScalarWhereInput
    data: XOR<CandidateStatusUpdateManyMutationInput, CandidateStatusUncheckedUpdateManyWithoutCandidateInput>
  }

  export type CandidateStatusScalarWhereInput = {
    AND?: CandidateStatusScalarWhereInput | CandidateStatusScalarWhereInput[]
    OR?: CandidateStatusScalarWhereInput[]
    NOT?: CandidateStatusScalarWhereInput | CandidateStatusScalarWhereInput[]
    candidate_status_id?: IntFilter<"CandidateStatus"> | number
    candidate_id?: IntFilter<"CandidateStatus"> | number
    status?: EnumCandidateStatusEnumFilter<"CandidateStatus"> | $Enums.CandidateStatusEnum
    updated_by?: IntNullableFilter<"CandidateStatus"> | number | null
    created_at?: DateTimeFilter<"CandidateStatus"> | Date | string
    updated_at?: DateTimeFilter<"CandidateStatus"> | Date | string
  }

  export type DocumentUpsertWithWhereUniqueWithoutCandidateInput = {
    where: DocumentWhereUniqueInput
    update: XOR<DocumentUpdateWithoutCandidateInput, DocumentUncheckedUpdateWithoutCandidateInput>
    create: XOR<DocumentCreateWithoutCandidateInput, DocumentUncheckedCreateWithoutCandidateInput>
  }

  export type DocumentUpdateWithWhereUniqueWithoutCandidateInput = {
    where: DocumentWhereUniqueInput
    data: XOR<DocumentUpdateWithoutCandidateInput, DocumentUncheckedUpdateWithoutCandidateInput>
  }

  export type DocumentUpdateManyWithWhereWithoutCandidateInput = {
    where: DocumentScalarWhereInput
    data: XOR<DocumentUpdateManyMutationInput, DocumentUncheckedUpdateManyWithoutCandidateInput>
  }

  export type DocumentScalarWhereInput = {
    AND?: DocumentScalarWhereInput | DocumentScalarWhereInput[]
    OR?: DocumentScalarWhereInput[]
    NOT?: DocumentScalarWhereInput | DocumentScalarWhereInput[]
    document_id?: IntFilter<"Document"> | number
    candidate_id?: IntFilter<"Document"> | number
    file_url?: StringFilter<"Document"> | string
    file_type?: StringFilter<"Document"> | string
    doc_type?: EnumDocTypeEnumFilter<"Document"> | $Enums.DocTypeEnum
    uploaded_at?: DateTimeFilter<"Document"> | Date | string
  }

  export type AddressUpsertWithWhereUniqueWithoutCandidateInput = {
    where: AddressWhereUniqueInput
    update: XOR<AddressUpdateWithoutCandidateInput, AddressUncheckedUpdateWithoutCandidateInput>
    create: XOR<AddressCreateWithoutCandidateInput, AddressUncheckedCreateWithoutCandidateInput>
  }

  export type AddressUpdateWithWhereUniqueWithoutCandidateInput = {
    where: AddressWhereUniqueInput
    data: XOR<AddressUpdateWithoutCandidateInput, AddressUncheckedUpdateWithoutCandidateInput>
  }

  export type AddressUpdateManyWithWhereWithoutCandidateInput = {
    where: AddressScalarWhereInput
    data: XOR<AddressUpdateManyMutationInput, AddressUncheckedUpdateManyWithoutCandidateInput>
  }

  export type AddressScalarWhereInput = {
    AND?: AddressScalarWhereInput | AddressScalarWhereInput[]
    OR?: AddressScalarWhereInput[]
    NOT?: AddressScalarWhereInput | AddressScalarWhereInput[]
    address_id?: IntFilter<"Address"> | number
    candidate_id?: IntFilter<"Address"> | number
    address_line1?: StringFilter<"Address"> | string
    address_line2?: StringNullableFilter<"Address"> | string | null
    city?: StringFilter<"Address"> | string
    state?: StringNullableFilter<"Address"> | string | null
    postal_code?: StringFilter<"Address"> | string
    country?: StringFilter<"Address"> | string
    address_type?: EnumAddressTypeFilter<"Address"> | $Enums.AddressType
    is_current?: BoolFilter<"Address"> | boolean
  }

  export type CandidateCreateWithoutAddressesInput = {
    first_name: string
    last_name: string
    email: string
    phone?: string | null
    gender?: string | null
    age?: number | null
    experience_salary?: number | null
    expected_salary?: number | null
    stack?: string | null
    id_card?: string | null
    tests?: TestCreateNestedManyWithoutCandidateInput
    candidate_statuses?: CandidateStatusCreateNestedManyWithoutCandidateInput
    documents?: DocumentCreateNestedManyWithoutCandidateInput
  }

  export type CandidateUncheckedCreateWithoutAddressesInput = {
    candidate_id?: number
    first_name: string
    last_name: string
    email: string
    phone?: string | null
    gender?: string | null
    age?: number | null
    experience_salary?: number | null
    expected_salary?: number | null
    stack?: string | null
    id_card?: string | null
    tests?: TestUncheckedCreateNestedManyWithoutCandidateInput
    candidate_statuses?: CandidateStatusUncheckedCreateNestedManyWithoutCandidateInput
    documents?: DocumentUncheckedCreateNestedManyWithoutCandidateInput
  }

  export type CandidateCreateOrConnectWithoutAddressesInput = {
    where: CandidateWhereUniqueInput
    create: XOR<CandidateCreateWithoutAddressesInput, CandidateUncheckedCreateWithoutAddressesInput>
  }

  export type CandidateUpsertWithoutAddressesInput = {
    update: XOR<CandidateUpdateWithoutAddressesInput, CandidateUncheckedUpdateWithoutAddressesInput>
    create: XOR<CandidateCreateWithoutAddressesInput, CandidateUncheckedCreateWithoutAddressesInput>
    where?: CandidateWhereInput
  }

  export type CandidateUpdateToOneWithWhereWithoutAddressesInput = {
    where?: CandidateWhereInput
    data: XOR<CandidateUpdateWithoutAddressesInput, CandidateUncheckedUpdateWithoutAddressesInput>
  }

  export type CandidateUpdateWithoutAddressesInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    experience_salary?: NullableIntFieldUpdateOperationsInput | number | null
    expected_salary?: NullableIntFieldUpdateOperationsInput | number | null
    stack?: NullableStringFieldUpdateOperationsInput | string | null
    id_card?: NullableStringFieldUpdateOperationsInput | string | null
    tests?: TestUpdateManyWithoutCandidateNestedInput
    candidate_statuses?: CandidateStatusUpdateManyWithoutCandidateNestedInput
    documents?: DocumentUpdateManyWithoutCandidateNestedInput
  }

  export type CandidateUncheckedUpdateWithoutAddressesInput = {
    candidate_id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    experience_salary?: NullableIntFieldUpdateOperationsInput | number | null
    expected_salary?: NullableIntFieldUpdateOperationsInput | number | null
    stack?: NullableStringFieldUpdateOperationsInput | string | null
    id_card?: NullableStringFieldUpdateOperationsInput | string | null
    tests?: TestUncheckedUpdateManyWithoutCandidateNestedInput
    candidate_statuses?: CandidateStatusUncheckedUpdateManyWithoutCandidateNestedInput
    documents?: DocumentUncheckedUpdateManyWithoutCandidateNestedInput
  }

  export type CandidateCreateWithoutCandidate_statusesInput = {
    first_name: string
    last_name: string
    email: string
    phone?: string | null
    gender?: string | null
    age?: number | null
    experience_salary?: number | null
    expected_salary?: number | null
    stack?: string | null
    id_card?: string | null
    tests?: TestCreateNestedManyWithoutCandidateInput
    documents?: DocumentCreateNestedManyWithoutCandidateInput
    addresses?: AddressCreateNestedManyWithoutCandidateInput
  }

  export type CandidateUncheckedCreateWithoutCandidate_statusesInput = {
    candidate_id?: number
    first_name: string
    last_name: string
    email: string
    phone?: string | null
    gender?: string | null
    age?: number | null
    experience_salary?: number | null
    expected_salary?: number | null
    stack?: string | null
    id_card?: string | null
    tests?: TestUncheckedCreateNestedManyWithoutCandidateInput
    documents?: DocumentUncheckedCreateNestedManyWithoutCandidateInput
    addresses?: AddressUncheckedCreateNestedManyWithoutCandidateInput
  }

  export type CandidateCreateOrConnectWithoutCandidate_statusesInput = {
    where: CandidateWhereUniqueInput
    create: XOR<CandidateCreateWithoutCandidate_statusesInput, CandidateUncheckedCreateWithoutCandidate_statusesInput>
  }

  export type StatusUpdateRequestsCreateWithoutCandidate_statusInput = {
    requested_status: $Enums.StatusEnum
    request_by?: number | null
    status?: $Enums.StatusEnum
    created_at?: Date | string
    approved_at?: Date | string | null
    approver?: AdminUserCreateNestedOneWithoutApproved_status_updatesInput
  }

  export type StatusUpdateRequestsUncheckedCreateWithoutCandidate_statusInput = {
    status_update_request_id?: number
    requested_status: $Enums.StatusEnum
    request_by?: number | null
    approve_by?: number | null
    status?: $Enums.StatusEnum
    created_at?: Date | string
    approved_at?: Date | string | null
  }

  export type StatusUpdateRequestsCreateOrConnectWithoutCandidate_statusInput = {
    where: StatusUpdateRequestsWhereUniqueInput
    create: XOR<StatusUpdateRequestsCreateWithoutCandidate_statusInput, StatusUpdateRequestsUncheckedCreateWithoutCandidate_statusInput>
  }

  export type StatusUpdateRequestsCreateManyCandidate_statusInputEnvelope = {
    data: StatusUpdateRequestsCreateManyCandidate_statusInput | StatusUpdateRequestsCreateManyCandidate_statusInput[]
    skipDuplicates?: boolean
  }

  export type CandidateUpsertWithoutCandidate_statusesInput = {
    update: XOR<CandidateUpdateWithoutCandidate_statusesInput, CandidateUncheckedUpdateWithoutCandidate_statusesInput>
    create: XOR<CandidateCreateWithoutCandidate_statusesInput, CandidateUncheckedCreateWithoutCandidate_statusesInput>
    where?: CandidateWhereInput
  }

  export type CandidateUpdateToOneWithWhereWithoutCandidate_statusesInput = {
    where?: CandidateWhereInput
    data: XOR<CandidateUpdateWithoutCandidate_statusesInput, CandidateUncheckedUpdateWithoutCandidate_statusesInput>
  }

  export type CandidateUpdateWithoutCandidate_statusesInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    experience_salary?: NullableIntFieldUpdateOperationsInput | number | null
    expected_salary?: NullableIntFieldUpdateOperationsInput | number | null
    stack?: NullableStringFieldUpdateOperationsInput | string | null
    id_card?: NullableStringFieldUpdateOperationsInput | string | null
    tests?: TestUpdateManyWithoutCandidateNestedInput
    documents?: DocumentUpdateManyWithoutCandidateNestedInput
    addresses?: AddressUpdateManyWithoutCandidateNestedInput
  }

  export type CandidateUncheckedUpdateWithoutCandidate_statusesInput = {
    candidate_id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    experience_salary?: NullableIntFieldUpdateOperationsInput | number | null
    expected_salary?: NullableIntFieldUpdateOperationsInput | number | null
    stack?: NullableStringFieldUpdateOperationsInput | string | null
    id_card?: NullableStringFieldUpdateOperationsInput | string | null
    tests?: TestUncheckedUpdateManyWithoutCandidateNestedInput
    documents?: DocumentUncheckedUpdateManyWithoutCandidateNestedInput
    addresses?: AddressUncheckedUpdateManyWithoutCandidateNestedInput
  }

  export type StatusUpdateRequestsUpsertWithWhereUniqueWithoutCandidate_statusInput = {
    where: StatusUpdateRequestsWhereUniqueInput
    update: XOR<StatusUpdateRequestsUpdateWithoutCandidate_statusInput, StatusUpdateRequestsUncheckedUpdateWithoutCandidate_statusInput>
    create: XOR<StatusUpdateRequestsCreateWithoutCandidate_statusInput, StatusUpdateRequestsUncheckedCreateWithoutCandidate_statusInput>
  }

  export type StatusUpdateRequestsUpdateWithWhereUniqueWithoutCandidate_statusInput = {
    where: StatusUpdateRequestsWhereUniqueInput
    data: XOR<StatusUpdateRequestsUpdateWithoutCandidate_statusInput, StatusUpdateRequestsUncheckedUpdateWithoutCandidate_statusInput>
  }

  export type StatusUpdateRequestsUpdateManyWithWhereWithoutCandidate_statusInput = {
    where: StatusUpdateRequestsScalarWhereInput
    data: XOR<StatusUpdateRequestsUpdateManyMutationInput, StatusUpdateRequestsUncheckedUpdateManyWithoutCandidate_statusInput>
  }

  export type CandidateStatusCreateWithoutStatus_update_requestsInput = {
    status: $Enums.CandidateStatusEnum
    updated_by?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    candidate: CandidateCreateNestedOneWithoutCandidate_statusesInput
  }

  export type CandidateStatusUncheckedCreateWithoutStatus_update_requestsInput = {
    candidate_status_id?: number
    candidate_id: number
    status: $Enums.CandidateStatusEnum
    updated_by?: number | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type CandidateStatusCreateOrConnectWithoutStatus_update_requestsInput = {
    where: CandidateStatusWhereUniqueInput
    create: XOR<CandidateStatusCreateWithoutStatus_update_requestsInput, CandidateStatusUncheckedCreateWithoutStatus_update_requestsInput>
  }

  export type AdminUserCreateWithoutApproved_status_updatesInput = {
    first_name: string
    last_name: string
    email: string
    role: $Enums.Role
    password_hash: string
    created_at?: Date | string
  }

  export type AdminUserUncheckedCreateWithoutApproved_status_updatesInput = {
    admin_user_id?: number
    first_name: string
    last_name: string
    email: string
    role: $Enums.Role
    password_hash: string
    created_at?: Date | string
  }

  export type AdminUserCreateOrConnectWithoutApproved_status_updatesInput = {
    where: AdminUserWhereUniqueInput
    create: XOR<AdminUserCreateWithoutApproved_status_updatesInput, AdminUserUncheckedCreateWithoutApproved_status_updatesInput>
  }

  export type CandidateStatusUpsertWithoutStatus_update_requestsInput = {
    update: XOR<CandidateStatusUpdateWithoutStatus_update_requestsInput, CandidateStatusUncheckedUpdateWithoutStatus_update_requestsInput>
    create: XOR<CandidateStatusCreateWithoutStatus_update_requestsInput, CandidateStatusUncheckedCreateWithoutStatus_update_requestsInput>
    where?: CandidateStatusWhereInput
  }

  export type CandidateStatusUpdateToOneWithWhereWithoutStatus_update_requestsInput = {
    where?: CandidateStatusWhereInput
    data: XOR<CandidateStatusUpdateWithoutStatus_update_requestsInput, CandidateStatusUncheckedUpdateWithoutStatus_update_requestsInput>
  }

  export type CandidateStatusUpdateWithoutStatus_update_requestsInput = {
    status?: EnumCandidateStatusEnumFieldUpdateOperationsInput | $Enums.CandidateStatusEnum
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    candidate?: CandidateUpdateOneRequiredWithoutCandidate_statusesNestedInput
  }

  export type CandidateStatusUncheckedUpdateWithoutStatus_update_requestsInput = {
    candidate_status_id?: IntFieldUpdateOperationsInput | number
    candidate_id?: IntFieldUpdateOperationsInput | number
    status?: EnumCandidateStatusEnumFieldUpdateOperationsInput | $Enums.CandidateStatusEnum
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUserUpsertWithoutApproved_status_updatesInput = {
    update: XOR<AdminUserUpdateWithoutApproved_status_updatesInput, AdminUserUncheckedUpdateWithoutApproved_status_updatesInput>
    create: XOR<AdminUserCreateWithoutApproved_status_updatesInput, AdminUserUncheckedCreateWithoutApproved_status_updatesInput>
    where?: AdminUserWhereInput
  }

  export type AdminUserUpdateToOneWithWhereWithoutApproved_status_updatesInput = {
    where?: AdminUserWhereInput
    data: XOR<AdminUserUpdateWithoutApproved_status_updatesInput, AdminUserUncheckedUpdateWithoutApproved_status_updatesInput>
  }

  export type AdminUserUpdateWithoutApproved_status_updatesInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUserUncheckedUpdateWithoutApproved_status_updatesInput = {
    admin_user_id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CandidateCreateWithoutDocumentsInput = {
    first_name: string
    last_name: string
    email: string
    phone?: string | null
    gender?: string | null
    age?: number | null
    experience_salary?: number | null
    expected_salary?: number | null
    stack?: string | null
    id_card?: string | null
    tests?: TestCreateNestedManyWithoutCandidateInput
    candidate_statuses?: CandidateStatusCreateNestedManyWithoutCandidateInput
    addresses?: AddressCreateNestedManyWithoutCandidateInput
  }

  export type CandidateUncheckedCreateWithoutDocumentsInput = {
    candidate_id?: number
    first_name: string
    last_name: string
    email: string
    phone?: string | null
    gender?: string | null
    age?: number | null
    experience_salary?: number | null
    expected_salary?: number | null
    stack?: string | null
    id_card?: string | null
    tests?: TestUncheckedCreateNestedManyWithoutCandidateInput
    candidate_statuses?: CandidateStatusUncheckedCreateNestedManyWithoutCandidateInput
    addresses?: AddressUncheckedCreateNestedManyWithoutCandidateInput
  }

  export type CandidateCreateOrConnectWithoutDocumentsInput = {
    where: CandidateWhereUniqueInput
    create: XOR<CandidateCreateWithoutDocumentsInput, CandidateUncheckedCreateWithoutDocumentsInput>
  }

  export type CandidateUpsertWithoutDocumentsInput = {
    update: XOR<CandidateUpdateWithoutDocumentsInput, CandidateUncheckedUpdateWithoutDocumentsInput>
    create: XOR<CandidateCreateWithoutDocumentsInput, CandidateUncheckedCreateWithoutDocumentsInput>
    where?: CandidateWhereInput
  }

  export type CandidateUpdateToOneWithWhereWithoutDocumentsInput = {
    where?: CandidateWhereInput
    data: XOR<CandidateUpdateWithoutDocumentsInput, CandidateUncheckedUpdateWithoutDocumentsInput>
  }

  export type CandidateUpdateWithoutDocumentsInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    experience_salary?: NullableIntFieldUpdateOperationsInput | number | null
    expected_salary?: NullableIntFieldUpdateOperationsInput | number | null
    stack?: NullableStringFieldUpdateOperationsInput | string | null
    id_card?: NullableStringFieldUpdateOperationsInput | string | null
    tests?: TestUpdateManyWithoutCandidateNestedInput
    candidate_statuses?: CandidateStatusUpdateManyWithoutCandidateNestedInput
    addresses?: AddressUpdateManyWithoutCandidateNestedInput
  }

  export type CandidateUncheckedUpdateWithoutDocumentsInput = {
    candidate_id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    experience_salary?: NullableIntFieldUpdateOperationsInput | number | null
    expected_salary?: NullableIntFieldUpdateOperationsInput | number | null
    stack?: NullableStringFieldUpdateOperationsInput | string | null
    id_card?: NullableStringFieldUpdateOperationsInput | string | null
    tests?: TestUncheckedUpdateManyWithoutCandidateNestedInput
    candidate_statuses?: CandidateStatusUncheckedUpdateManyWithoutCandidateNestedInput
    addresses?: AddressUncheckedUpdateManyWithoutCandidateNestedInput
  }

  export type ChoiceCreateWithoutQuestionInput = {
    choice_text: string
    is_correct?: boolean
    selected_answers?: TestAnswerCreateNestedManyWithoutSelected_choiceInput
  }

  export type ChoiceUncheckedCreateWithoutQuestionInput = {
    choice_id?: number
    choice_text: string
    is_correct?: boolean
    selected_answers?: TestAnswerUncheckedCreateNestedManyWithoutSelected_choiceInput
  }

  export type ChoiceCreateOrConnectWithoutQuestionInput = {
    where: ChoiceWhereUniqueInput
    create: XOR<ChoiceCreateWithoutQuestionInput, ChoiceUncheckedCreateWithoutQuestionInput>
  }

  export type ChoiceCreateManyQuestionInputEnvelope = {
    data: ChoiceCreateManyQuestionInput | ChoiceCreateManyQuestionInput[]
    skipDuplicates?: boolean
  }

  export type TestQuestionCreateWithoutQuestionInput = {
    test: TestCreateNestedOneWithoutTest_questionsInput
  }

  export type TestQuestionUncheckedCreateWithoutQuestionInput = {
    test_question_id?: number
    test_id: number
  }

  export type TestQuestionCreateOrConnectWithoutQuestionInput = {
    where: TestQuestionWhereUniqueInput
    create: XOR<TestQuestionCreateWithoutQuestionInput, TestQuestionUncheckedCreateWithoutQuestionInput>
  }

  export type TestQuestionCreateManyQuestionInputEnvelope = {
    data: TestQuestionCreateManyQuestionInput | TestQuestionCreateManyQuestionInput[]
    skipDuplicates?: boolean
  }

  export type TestAnswerCreateWithoutQuestionInput = {
    is_correct?: boolean | null
    test: TestCreateNestedOneWithoutTest_answersInput
    selected_choice?: ChoiceCreateNestedOneWithoutSelected_answersInput
  }

  export type TestAnswerUncheckedCreateWithoutQuestionInput = {
    test_answer_id?: number
    test_id: number
    selected_choice_id?: number | null
    is_correct?: boolean | null
  }

  export type TestAnswerCreateOrConnectWithoutQuestionInput = {
    where: TestAnswerWhereUniqueInput
    create: XOR<TestAnswerCreateWithoutQuestionInput, TestAnswerUncheckedCreateWithoutQuestionInput>
  }

  export type TestAnswerCreateManyQuestionInputEnvelope = {
    data: TestAnswerCreateManyQuestionInput | TestAnswerCreateManyQuestionInput[]
    skipDuplicates?: boolean
  }

  export type ChoiceUpsertWithWhereUniqueWithoutQuestionInput = {
    where: ChoiceWhereUniqueInput
    update: XOR<ChoiceUpdateWithoutQuestionInput, ChoiceUncheckedUpdateWithoutQuestionInput>
    create: XOR<ChoiceCreateWithoutQuestionInput, ChoiceUncheckedCreateWithoutQuestionInput>
  }

  export type ChoiceUpdateWithWhereUniqueWithoutQuestionInput = {
    where: ChoiceWhereUniqueInput
    data: XOR<ChoiceUpdateWithoutQuestionInput, ChoiceUncheckedUpdateWithoutQuestionInput>
  }

  export type ChoiceUpdateManyWithWhereWithoutQuestionInput = {
    where: ChoiceScalarWhereInput
    data: XOR<ChoiceUpdateManyMutationInput, ChoiceUncheckedUpdateManyWithoutQuestionInput>
  }

  export type ChoiceScalarWhereInput = {
    AND?: ChoiceScalarWhereInput | ChoiceScalarWhereInput[]
    OR?: ChoiceScalarWhereInput[]
    NOT?: ChoiceScalarWhereInput | ChoiceScalarWhereInput[]
    choice_id?: IntFilter<"Choice"> | number
    question_id?: IntFilter<"Choice"> | number
    choice_text?: StringFilter<"Choice"> | string
    is_correct?: BoolFilter<"Choice"> | boolean
  }

  export type TestQuestionUpsertWithWhereUniqueWithoutQuestionInput = {
    where: TestQuestionWhereUniqueInput
    update: XOR<TestQuestionUpdateWithoutQuestionInput, TestQuestionUncheckedUpdateWithoutQuestionInput>
    create: XOR<TestQuestionCreateWithoutQuestionInput, TestQuestionUncheckedCreateWithoutQuestionInput>
  }

  export type TestQuestionUpdateWithWhereUniqueWithoutQuestionInput = {
    where: TestQuestionWhereUniqueInput
    data: XOR<TestQuestionUpdateWithoutQuestionInput, TestQuestionUncheckedUpdateWithoutQuestionInput>
  }

  export type TestQuestionUpdateManyWithWhereWithoutQuestionInput = {
    where: TestQuestionScalarWhereInput
    data: XOR<TestQuestionUpdateManyMutationInput, TestQuestionUncheckedUpdateManyWithoutQuestionInput>
  }

  export type TestQuestionScalarWhereInput = {
    AND?: TestQuestionScalarWhereInput | TestQuestionScalarWhereInput[]
    OR?: TestQuestionScalarWhereInput[]
    NOT?: TestQuestionScalarWhereInput | TestQuestionScalarWhereInput[]
    test_question_id?: IntFilter<"TestQuestion"> | number
    test_id?: IntFilter<"TestQuestion"> | number
    question_id?: IntFilter<"TestQuestion"> | number
  }

  export type TestAnswerUpsertWithWhereUniqueWithoutQuestionInput = {
    where: TestAnswerWhereUniqueInput
    update: XOR<TestAnswerUpdateWithoutQuestionInput, TestAnswerUncheckedUpdateWithoutQuestionInput>
    create: XOR<TestAnswerCreateWithoutQuestionInput, TestAnswerUncheckedCreateWithoutQuestionInput>
  }

  export type TestAnswerUpdateWithWhereUniqueWithoutQuestionInput = {
    where: TestAnswerWhereUniqueInput
    data: XOR<TestAnswerUpdateWithoutQuestionInput, TestAnswerUncheckedUpdateWithoutQuestionInput>
  }

  export type TestAnswerUpdateManyWithWhereWithoutQuestionInput = {
    where: TestAnswerScalarWhereInput
    data: XOR<TestAnswerUpdateManyMutationInput, TestAnswerUncheckedUpdateManyWithoutQuestionInput>
  }

  export type TestAnswerScalarWhereInput = {
    AND?: TestAnswerScalarWhereInput | TestAnswerScalarWhereInput[]
    OR?: TestAnswerScalarWhereInput[]
    NOT?: TestAnswerScalarWhereInput | TestAnswerScalarWhereInput[]
    test_answer_id?: IntFilter<"TestAnswer"> | number
    test_id?: IntFilter<"TestAnswer"> | number
    question_id?: IntFilter<"TestAnswer"> | number
    selected_choice_id?: IntNullableFilter<"TestAnswer"> | number | null
    is_correct?: BoolNullableFilter<"TestAnswer"> | boolean | null
  }

  export type QuestionCreateWithoutChoicesInput = {
    question_text: string
    mcq?: boolean
    difficulty: $Enums.Difficulty
    created_at?: Date | string
    test_questions?: TestQuestionCreateNestedManyWithoutQuestionInput
    testAnswers?: TestAnswerCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUncheckedCreateWithoutChoicesInput = {
    question_id?: number
    question_text: string
    mcq?: boolean
    difficulty: $Enums.Difficulty
    created_at?: Date | string
    test_questions?: TestQuestionUncheckedCreateNestedManyWithoutQuestionInput
    testAnswers?: TestAnswerUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type QuestionCreateOrConnectWithoutChoicesInput = {
    where: QuestionWhereUniqueInput
    create: XOR<QuestionCreateWithoutChoicesInput, QuestionUncheckedCreateWithoutChoicesInput>
  }

  export type TestAnswerCreateWithoutSelected_choiceInput = {
    is_correct?: boolean | null
    test: TestCreateNestedOneWithoutTest_answersInput
    question: QuestionCreateNestedOneWithoutTestAnswersInput
  }

  export type TestAnswerUncheckedCreateWithoutSelected_choiceInput = {
    test_answer_id?: number
    test_id: number
    question_id: number
    is_correct?: boolean | null
  }

  export type TestAnswerCreateOrConnectWithoutSelected_choiceInput = {
    where: TestAnswerWhereUniqueInput
    create: XOR<TestAnswerCreateWithoutSelected_choiceInput, TestAnswerUncheckedCreateWithoutSelected_choiceInput>
  }

  export type TestAnswerCreateManySelected_choiceInputEnvelope = {
    data: TestAnswerCreateManySelected_choiceInput | TestAnswerCreateManySelected_choiceInput[]
    skipDuplicates?: boolean
  }

  export type QuestionUpsertWithoutChoicesInput = {
    update: XOR<QuestionUpdateWithoutChoicesInput, QuestionUncheckedUpdateWithoutChoicesInput>
    create: XOR<QuestionCreateWithoutChoicesInput, QuestionUncheckedCreateWithoutChoicesInput>
    where?: QuestionWhereInput
  }

  export type QuestionUpdateToOneWithWhereWithoutChoicesInput = {
    where?: QuestionWhereInput
    data: XOR<QuestionUpdateWithoutChoicesInput, QuestionUncheckedUpdateWithoutChoicesInput>
  }

  export type QuestionUpdateWithoutChoicesInput = {
    question_text?: StringFieldUpdateOperationsInput | string
    mcq?: BoolFieldUpdateOperationsInput | boolean
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    test_questions?: TestQuestionUpdateManyWithoutQuestionNestedInput
    testAnswers?: TestAnswerUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateWithoutChoicesInput = {
    question_id?: IntFieldUpdateOperationsInput | number
    question_text?: StringFieldUpdateOperationsInput | string
    mcq?: BoolFieldUpdateOperationsInput | boolean
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    test_questions?: TestQuestionUncheckedUpdateManyWithoutQuestionNestedInput
    testAnswers?: TestAnswerUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type TestAnswerUpsertWithWhereUniqueWithoutSelected_choiceInput = {
    where: TestAnswerWhereUniqueInput
    update: XOR<TestAnswerUpdateWithoutSelected_choiceInput, TestAnswerUncheckedUpdateWithoutSelected_choiceInput>
    create: XOR<TestAnswerCreateWithoutSelected_choiceInput, TestAnswerUncheckedCreateWithoutSelected_choiceInput>
  }

  export type TestAnswerUpdateWithWhereUniqueWithoutSelected_choiceInput = {
    where: TestAnswerWhereUniqueInput
    data: XOR<TestAnswerUpdateWithoutSelected_choiceInput, TestAnswerUncheckedUpdateWithoutSelected_choiceInput>
  }

  export type TestAnswerUpdateManyWithWhereWithoutSelected_choiceInput = {
    where: TestAnswerScalarWhereInput
    data: XOR<TestAnswerUpdateManyMutationInput, TestAnswerUncheckedUpdateManyWithoutSelected_choiceInput>
  }

  export type CandidateCreateWithoutTestsInput = {
    first_name: string
    last_name: string
    email: string
    phone?: string | null
    gender?: string | null
    age?: number | null
    experience_salary?: number | null
    expected_salary?: number | null
    stack?: string | null
    id_card?: string | null
    candidate_statuses?: CandidateStatusCreateNestedManyWithoutCandidateInput
    documents?: DocumentCreateNestedManyWithoutCandidateInput
    addresses?: AddressCreateNestedManyWithoutCandidateInput
  }

  export type CandidateUncheckedCreateWithoutTestsInput = {
    candidate_id?: number
    first_name: string
    last_name: string
    email: string
    phone?: string | null
    gender?: string | null
    age?: number | null
    experience_salary?: number | null
    expected_salary?: number | null
    stack?: string | null
    id_card?: string | null
    candidate_statuses?: CandidateStatusUncheckedCreateNestedManyWithoutCandidateInput
    documents?: DocumentUncheckedCreateNestedManyWithoutCandidateInput
    addresses?: AddressUncheckedCreateNestedManyWithoutCandidateInput
  }

  export type CandidateCreateOrConnectWithoutTestsInput = {
    where: CandidateWhereUniqueInput
    create: XOR<CandidateCreateWithoutTestsInput, CandidateUncheckedCreateWithoutTestsInput>
  }

  export type TestQuestionCreateWithoutTestInput = {
    question: QuestionCreateNestedOneWithoutTest_questionsInput
  }

  export type TestQuestionUncheckedCreateWithoutTestInput = {
    test_question_id?: number
    question_id: number
  }

  export type TestQuestionCreateOrConnectWithoutTestInput = {
    where: TestQuestionWhereUniqueInput
    create: XOR<TestQuestionCreateWithoutTestInput, TestQuestionUncheckedCreateWithoutTestInput>
  }

  export type TestQuestionCreateManyTestInputEnvelope = {
    data: TestQuestionCreateManyTestInput | TestQuestionCreateManyTestInput[]
    skipDuplicates?: boolean
  }

  export type TestAnswerCreateWithoutTestInput = {
    is_correct?: boolean | null
    question: QuestionCreateNestedOneWithoutTestAnswersInput
    selected_choice?: ChoiceCreateNestedOneWithoutSelected_answersInput
  }

  export type TestAnswerUncheckedCreateWithoutTestInput = {
    test_answer_id?: number
    question_id: number
    selected_choice_id?: number | null
    is_correct?: boolean | null
  }

  export type TestAnswerCreateOrConnectWithoutTestInput = {
    where: TestAnswerWhereUniqueInput
    create: XOR<TestAnswerCreateWithoutTestInput, TestAnswerUncheckedCreateWithoutTestInput>
  }

  export type TestAnswerCreateManyTestInputEnvelope = {
    data: TestAnswerCreateManyTestInput | TestAnswerCreateManyTestInput[]
    skipDuplicates?: boolean
  }

  export type CandidateUpsertWithoutTestsInput = {
    update: XOR<CandidateUpdateWithoutTestsInput, CandidateUncheckedUpdateWithoutTestsInput>
    create: XOR<CandidateCreateWithoutTestsInput, CandidateUncheckedCreateWithoutTestsInput>
    where?: CandidateWhereInput
  }

  export type CandidateUpdateToOneWithWhereWithoutTestsInput = {
    where?: CandidateWhereInput
    data: XOR<CandidateUpdateWithoutTestsInput, CandidateUncheckedUpdateWithoutTestsInput>
  }

  export type CandidateUpdateWithoutTestsInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    experience_salary?: NullableIntFieldUpdateOperationsInput | number | null
    expected_salary?: NullableIntFieldUpdateOperationsInput | number | null
    stack?: NullableStringFieldUpdateOperationsInput | string | null
    id_card?: NullableStringFieldUpdateOperationsInput | string | null
    candidate_statuses?: CandidateStatusUpdateManyWithoutCandidateNestedInput
    documents?: DocumentUpdateManyWithoutCandidateNestedInput
    addresses?: AddressUpdateManyWithoutCandidateNestedInput
  }

  export type CandidateUncheckedUpdateWithoutTestsInput = {
    candidate_id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    experience_salary?: NullableIntFieldUpdateOperationsInput | number | null
    expected_salary?: NullableIntFieldUpdateOperationsInput | number | null
    stack?: NullableStringFieldUpdateOperationsInput | string | null
    id_card?: NullableStringFieldUpdateOperationsInput | string | null
    candidate_statuses?: CandidateStatusUncheckedUpdateManyWithoutCandidateNestedInput
    documents?: DocumentUncheckedUpdateManyWithoutCandidateNestedInput
    addresses?: AddressUncheckedUpdateManyWithoutCandidateNestedInput
  }

  export type TestQuestionUpsertWithWhereUniqueWithoutTestInput = {
    where: TestQuestionWhereUniqueInput
    update: XOR<TestQuestionUpdateWithoutTestInput, TestQuestionUncheckedUpdateWithoutTestInput>
    create: XOR<TestQuestionCreateWithoutTestInput, TestQuestionUncheckedCreateWithoutTestInput>
  }

  export type TestQuestionUpdateWithWhereUniqueWithoutTestInput = {
    where: TestQuestionWhereUniqueInput
    data: XOR<TestQuestionUpdateWithoutTestInput, TestQuestionUncheckedUpdateWithoutTestInput>
  }

  export type TestQuestionUpdateManyWithWhereWithoutTestInput = {
    where: TestQuestionScalarWhereInput
    data: XOR<TestQuestionUpdateManyMutationInput, TestQuestionUncheckedUpdateManyWithoutTestInput>
  }

  export type TestAnswerUpsertWithWhereUniqueWithoutTestInput = {
    where: TestAnswerWhereUniqueInput
    update: XOR<TestAnswerUpdateWithoutTestInput, TestAnswerUncheckedUpdateWithoutTestInput>
    create: XOR<TestAnswerCreateWithoutTestInput, TestAnswerUncheckedCreateWithoutTestInput>
  }

  export type TestAnswerUpdateWithWhereUniqueWithoutTestInput = {
    where: TestAnswerWhereUniqueInput
    data: XOR<TestAnswerUpdateWithoutTestInput, TestAnswerUncheckedUpdateWithoutTestInput>
  }

  export type TestAnswerUpdateManyWithWhereWithoutTestInput = {
    where: TestAnswerScalarWhereInput
    data: XOR<TestAnswerUpdateManyMutationInput, TestAnswerUncheckedUpdateManyWithoutTestInput>
  }

  export type TestCreateWithoutTest_questionsInput = {
    total_score?: number | null
    created_at?: Date | string
    completed_at?: Date | string | null
    candidate: CandidateCreateNestedOneWithoutTestsInput
    test_answers?: TestAnswerCreateNestedManyWithoutTestInput
  }

  export type TestUncheckedCreateWithoutTest_questionsInput = {
    test_id?: number
    candidate_id: number
    total_score?: number | null
    created_at?: Date | string
    completed_at?: Date | string | null
    test_answers?: TestAnswerUncheckedCreateNestedManyWithoutTestInput
  }

  export type TestCreateOrConnectWithoutTest_questionsInput = {
    where: TestWhereUniqueInput
    create: XOR<TestCreateWithoutTest_questionsInput, TestUncheckedCreateWithoutTest_questionsInput>
  }

  export type QuestionCreateWithoutTest_questionsInput = {
    question_text: string
    mcq?: boolean
    difficulty: $Enums.Difficulty
    created_at?: Date | string
    choices?: ChoiceCreateNestedManyWithoutQuestionInput
    testAnswers?: TestAnswerCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUncheckedCreateWithoutTest_questionsInput = {
    question_id?: number
    question_text: string
    mcq?: boolean
    difficulty: $Enums.Difficulty
    created_at?: Date | string
    choices?: ChoiceUncheckedCreateNestedManyWithoutQuestionInput
    testAnswers?: TestAnswerUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type QuestionCreateOrConnectWithoutTest_questionsInput = {
    where: QuestionWhereUniqueInput
    create: XOR<QuestionCreateWithoutTest_questionsInput, QuestionUncheckedCreateWithoutTest_questionsInput>
  }

  export type TestUpsertWithoutTest_questionsInput = {
    update: XOR<TestUpdateWithoutTest_questionsInput, TestUncheckedUpdateWithoutTest_questionsInput>
    create: XOR<TestCreateWithoutTest_questionsInput, TestUncheckedCreateWithoutTest_questionsInput>
    where?: TestWhereInput
  }

  export type TestUpdateToOneWithWhereWithoutTest_questionsInput = {
    where?: TestWhereInput
    data: XOR<TestUpdateWithoutTest_questionsInput, TestUncheckedUpdateWithoutTest_questionsInput>
  }

  export type TestUpdateWithoutTest_questionsInput = {
    total_score?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    candidate?: CandidateUpdateOneRequiredWithoutTestsNestedInput
    test_answers?: TestAnswerUpdateManyWithoutTestNestedInput
  }

  export type TestUncheckedUpdateWithoutTest_questionsInput = {
    test_id?: IntFieldUpdateOperationsInput | number
    candidate_id?: IntFieldUpdateOperationsInput | number
    total_score?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    test_answers?: TestAnswerUncheckedUpdateManyWithoutTestNestedInput
  }

  export type QuestionUpsertWithoutTest_questionsInput = {
    update: XOR<QuestionUpdateWithoutTest_questionsInput, QuestionUncheckedUpdateWithoutTest_questionsInput>
    create: XOR<QuestionCreateWithoutTest_questionsInput, QuestionUncheckedCreateWithoutTest_questionsInput>
    where?: QuestionWhereInput
  }

  export type QuestionUpdateToOneWithWhereWithoutTest_questionsInput = {
    where?: QuestionWhereInput
    data: XOR<QuestionUpdateWithoutTest_questionsInput, QuestionUncheckedUpdateWithoutTest_questionsInput>
  }

  export type QuestionUpdateWithoutTest_questionsInput = {
    question_text?: StringFieldUpdateOperationsInput | string
    mcq?: BoolFieldUpdateOperationsInput | boolean
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    choices?: ChoiceUpdateManyWithoutQuestionNestedInput
    testAnswers?: TestAnswerUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateWithoutTest_questionsInput = {
    question_id?: IntFieldUpdateOperationsInput | number
    question_text?: StringFieldUpdateOperationsInput | string
    mcq?: BoolFieldUpdateOperationsInput | boolean
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    choices?: ChoiceUncheckedUpdateManyWithoutQuestionNestedInput
    testAnswers?: TestAnswerUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type TestCreateWithoutTest_answersInput = {
    total_score?: number | null
    created_at?: Date | string
    completed_at?: Date | string | null
    candidate: CandidateCreateNestedOneWithoutTestsInput
    test_questions?: TestQuestionCreateNestedManyWithoutTestInput
  }

  export type TestUncheckedCreateWithoutTest_answersInput = {
    test_id?: number
    candidate_id: number
    total_score?: number | null
    created_at?: Date | string
    completed_at?: Date | string | null
    test_questions?: TestQuestionUncheckedCreateNestedManyWithoutTestInput
  }

  export type TestCreateOrConnectWithoutTest_answersInput = {
    where: TestWhereUniqueInput
    create: XOR<TestCreateWithoutTest_answersInput, TestUncheckedCreateWithoutTest_answersInput>
  }

  export type QuestionCreateWithoutTestAnswersInput = {
    question_text: string
    mcq?: boolean
    difficulty: $Enums.Difficulty
    created_at?: Date | string
    choices?: ChoiceCreateNestedManyWithoutQuestionInput
    test_questions?: TestQuestionCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUncheckedCreateWithoutTestAnswersInput = {
    question_id?: number
    question_text: string
    mcq?: boolean
    difficulty: $Enums.Difficulty
    created_at?: Date | string
    choices?: ChoiceUncheckedCreateNestedManyWithoutQuestionInput
    test_questions?: TestQuestionUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type QuestionCreateOrConnectWithoutTestAnswersInput = {
    where: QuestionWhereUniqueInput
    create: XOR<QuestionCreateWithoutTestAnswersInput, QuestionUncheckedCreateWithoutTestAnswersInput>
  }

  export type ChoiceCreateWithoutSelected_answersInput = {
    choice_text: string
    is_correct?: boolean
    question: QuestionCreateNestedOneWithoutChoicesInput
  }

  export type ChoiceUncheckedCreateWithoutSelected_answersInput = {
    choice_id?: number
    question_id: number
    choice_text: string
    is_correct?: boolean
  }

  export type ChoiceCreateOrConnectWithoutSelected_answersInput = {
    where: ChoiceWhereUniqueInput
    create: XOR<ChoiceCreateWithoutSelected_answersInput, ChoiceUncheckedCreateWithoutSelected_answersInput>
  }

  export type TestUpsertWithoutTest_answersInput = {
    update: XOR<TestUpdateWithoutTest_answersInput, TestUncheckedUpdateWithoutTest_answersInput>
    create: XOR<TestCreateWithoutTest_answersInput, TestUncheckedCreateWithoutTest_answersInput>
    where?: TestWhereInput
  }

  export type TestUpdateToOneWithWhereWithoutTest_answersInput = {
    where?: TestWhereInput
    data: XOR<TestUpdateWithoutTest_answersInput, TestUncheckedUpdateWithoutTest_answersInput>
  }

  export type TestUpdateWithoutTest_answersInput = {
    total_score?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    candidate?: CandidateUpdateOneRequiredWithoutTestsNestedInput
    test_questions?: TestQuestionUpdateManyWithoutTestNestedInput
  }

  export type TestUncheckedUpdateWithoutTest_answersInput = {
    test_id?: IntFieldUpdateOperationsInput | number
    candidate_id?: IntFieldUpdateOperationsInput | number
    total_score?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    test_questions?: TestQuestionUncheckedUpdateManyWithoutTestNestedInput
  }

  export type QuestionUpsertWithoutTestAnswersInput = {
    update: XOR<QuestionUpdateWithoutTestAnswersInput, QuestionUncheckedUpdateWithoutTestAnswersInput>
    create: XOR<QuestionCreateWithoutTestAnswersInput, QuestionUncheckedCreateWithoutTestAnswersInput>
    where?: QuestionWhereInput
  }

  export type QuestionUpdateToOneWithWhereWithoutTestAnswersInput = {
    where?: QuestionWhereInput
    data: XOR<QuestionUpdateWithoutTestAnswersInput, QuestionUncheckedUpdateWithoutTestAnswersInput>
  }

  export type QuestionUpdateWithoutTestAnswersInput = {
    question_text?: StringFieldUpdateOperationsInput | string
    mcq?: BoolFieldUpdateOperationsInput | boolean
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    choices?: ChoiceUpdateManyWithoutQuestionNestedInput
    test_questions?: TestQuestionUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateWithoutTestAnswersInput = {
    question_id?: IntFieldUpdateOperationsInput | number
    question_text?: StringFieldUpdateOperationsInput | string
    mcq?: BoolFieldUpdateOperationsInput | boolean
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    choices?: ChoiceUncheckedUpdateManyWithoutQuestionNestedInput
    test_questions?: TestQuestionUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type ChoiceUpsertWithoutSelected_answersInput = {
    update: XOR<ChoiceUpdateWithoutSelected_answersInput, ChoiceUncheckedUpdateWithoutSelected_answersInput>
    create: XOR<ChoiceCreateWithoutSelected_answersInput, ChoiceUncheckedCreateWithoutSelected_answersInput>
    where?: ChoiceWhereInput
  }

  export type ChoiceUpdateToOneWithWhereWithoutSelected_answersInput = {
    where?: ChoiceWhereInput
    data: XOR<ChoiceUpdateWithoutSelected_answersInput, ChoiceUncheckedUpdateWithoutSelected_answersInput>
  }

  export type ChoiceUpdateWithoutSelected_answersInput = {
    choice_text?: StringFieldUpdateOperationsInput | string
    is_correct?: BoolFieldUpdateOperationsInput | boolean
    question?: QuestionUpdateOneRequiredWithoutChoicesNestedInput
  }

  export type ChoiceUncheckedUpdateWithoutSelected_answersInput = {
    choice_id?: IntFieldUpdateOperationsInput | number
    question_id?: IntFieldUpdateOperationsInput | number
    choice_text?: StringFieldUpdateOperationsInput | string
    is_correct?: BoolFieldUpdateOperationsInput | boolean
  }

  export type StatusUpdateRequestsCreateManyApproverInput = {
    status_update_request_id?: number
    candidate_status_id: number
    requested_status: $Enums.StatusEnum
    request_by?: number | null
    status?: $Enums.StatusEnum
    created_at?: Date | string
    approved_at?: Date | string | null
  }

  export type StatusUpdateRequestsUpdateWithoutApproverInput = {
    requested_status?: EnumStatusEnumFieldUpdateOperationsInput | $Enums.StatusEnum
    request_by?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumStatusEnumFieldUpdateOperationsInput | $Enums.StatusEnum
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    approved_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    candidate_status?: CandidateStatusUpdateOneRequiredWithoutStatus_update_requestsNestedInput
  }

  export type StatusUpdateRequestsUncheckedUpdateWithoutApproverInput = {
    status_update_request_id?: IntFieldUpdateOperationsInput | number
    candidate_status_id?: IntFieldUpdateOperationsInput | number
    requested_status?: EnumStatusEnumFieldUpdateOperationsInput | $Enums.StatusEnum
    request_by?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumStatusEnumFieldUpdateOperationsInput | $Enums.StatusEnum
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    approved_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StatusUpdateRequestsUncheckedUpdateManyWithoutApproverInput = {
    status_update_request_id?: IntFieldUpdateOperationsInput | number
    candidate_status_id?: IntFieldUpdateOperationsInput | number
    requested_status?: EnumStatusEnumFieldUpdateOperationsInput | $Enums.StatusEnum
    request_by?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumStatusEnumFieldUpdateOperationsInput | $Enums.StatusEnum
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    approved_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TestCreateManyCandidateInput = {
    test_id?: number
    total_score?: number | null
    created_at?: Date | string
    completed_at?: Date | string | null
  }

  export type CandidateStatusCreateManyCandidateInput = {
    candidate_status_id?: number
    status: $Enums.CandidateStatusEnum
    updated_by?: number | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type DocumentCreateManyCandidateInput = {
    document_id?: number
    file_url: string
    file_type: string
    doc_type: $Enums.DocTypeEnum
    uploaded_at?: Date | string
  }

  export type AddressCreateManyCandidateInput = {
    address_id?: number
    address_line1: string
    address_line2?: string | null
    city: string
    state?: string | null
    postal_code: string
    country: string
    address_type: $Enums.AddressType
    is_current?: boolean
  }

  export type TestUpdateWithoutCandidateInput = {
    total_score?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    test_questions?: TestQuestionUpdateManyWithoutTestNestedInput
    test_answers?: TestAnswerUpdateManyWithoutTestNestedInput
  }

  export type TestUncheckedUpdateWithoutCandidateInput = {
    test_id?: IntFieldUpdateOperationsInput | number
    total_score?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    test_questions?: TestQuestionUncheckedUpdateManyWithoutTestNestedInput
    test_answers?: TestAnswerUncheckedUpdateManyWithoutTestNestedInput
  }

  export type TestUncheckedUpdateManyWithoutCandidateInput = {
    test_id?: IntFieldUpdateOperationsInput | number
    total_score?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CandidateStatusUpdateWithoutCandidateInput = {
    status?: EnumCandidateStatusEnumFieldUpdateOperationsInput | $Enums.CandidateStatusEnum
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status_update_requests?: StatusUpdateRequestsUpdateManyWithoutCandidate_statusNestedInput
  }

  export type CandidateStatusUncheckedUpdateWithoutCandidateInput = {
    candidate_status_id?: IntFieldUpdateOperationsInput | number
    status?: EnumCandidateStatusEnumFieldUpdateOperationsInput | $Enums.CandidateStatusEnum
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status_update_requests?: StatusUpdateRequestsUncheckedUpdateManyWithoutCandidate_statusNestedInput
  }

  export type CandidateStatusUncheckedUpdateManyWithoutCandidateInput = {
    candidate_status_id?: IntFieldUpdateOperationsInput | number
    status?: EnumCandidateStatusEnumFieldUpdateOperationsInput | $Enums.CandidateStatusEnum
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentUpdateWithoutCandidateInput = {
    file_url?: StringFieldUpdateOperationsInput | string
    file_type?: StringFieldUpdateOperationsInput | string
    doc_type?: EnumDocTypeEnumFieldUpdateOperationsInput | $Enums.DocTypeEnum
    uploaded_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentUncheckedUpdateWithoutCandidateInput = {
    document_id?: IntFieldUpdateOperationsInput | number
    file_url?: StringFieldUpdateOperationsInput | string
    file_type?: StringFieldUpdateOperationsInput | string
    doc_type?: EnumDocTypeEnumFieldUpdateOperationsInput | $Enums.DocTypeEnum
    uploaded_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentUncheckedUpdateManyWithoutCandidateInput = {
    document_id?: IntFieldUpdateOperationsInput | number
    file_url?: StringFieldUpdateOperationsInput | string
    file_type?: StringFieldUpdateOperationsInput | string
    doc_type?: EnumDocTypeEnumFieldUpdateOperationsInput | $Enums.DocTypeEnum
    uploaded_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AddressUpdateWithoutCandidateInput = {
    address_line1?: StringFieldUpdateOperationsInput | string
    address_line2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    state?: NullableStringFieldUpdateOperationsInput | string | null
    postal_code?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    address_type?: EnumAddressTypeFieldUpdateOperationsInput | $Enums.AddressType
    is_current?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AddressUncheckedUpdateWithoutCandidateInput = {
    address_id?: IntFieldUpdateOperationsInput | number
    address_line1?: StringFieldUpdateOperationsInput | string
    address_line2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    state?: NullableStringFieldUpdateOperationsInput | string | null
    postal_code?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    address_type?: EnumAddressTypeFieldUpdateOperationsInput | $Enums.AddressType
    is_current?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AddressUncheckedUpdateManyWithoutCandidateInput = {
    address_id?: IntFieldUpdateOperationsInput | number
    address_line1?: StringFieldUpdateOperationsInput | string
    address_line2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    state?: NullableStringFieldUpdateOperationsInput | string | null
    postal_code?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    address_type?: EnumAddressTypeFieldUpdateOperationsInput | $Enums.AddressType
    is_current?: BoolFieldUpdateOperationsInput | boolean
  }

  export type StatusUpdateRequestsCreateManyCandidate_statusInput = {
    status_update_request_id?: number
    requested_status: $Enums.StatusEnum
    request_by?: number | null
    approve_by?: number | null
    status?: $Enums.StatusEnum
    created_at?: Date | string
    approved_at?: Date | string | null
  }

  export type StatusUpdateRequestsUpdateWithoutCandidate_statusInput = {
    requested_status?: EnumStatusEnumFieldUpdateOperationsInput | $Enums.StatusEnum
    request_by?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumStatusEnumFieldUpdateOperationsInput | $Enums.StatusEnum
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    approved_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approver?: AdminUserUpdateOneWithoutApproved_status_updatesNestedInput
  }

  export type StatusUpdateRequestsUncheckedUpdateWithoutCandidate_statusInput = {
    status_update_request_id?: IntFieldUpdateOperationsInput | number
    requested_status?: EnumStatusEnumFieldUpdateOperationsInput | $Enums.StatusEnum
    request_by?: NullableIntFieldUpdateOperationsInput | number | null
    approve_by?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumStatusEnumFieldUpdateOperationsInput | $Enums.StatusEnum
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    approved_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StatusUpdateRequestsUncheckedUpdateManyWithoutCandidate_statusInput = {
    status_update_request_id?: IntFieldUpdateOperationsInput | number
    requested_status?: EnumStatusEnumFieldUpdateOperationsInput | $Enums.StatusEnum
    request_by?: NullableIntFieldUpdateOperationsInput | number | null
    approve_by?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumStatusEnumFieldUpdateOperationsInput | $Enums.StatusEnum
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    approved_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ChoiceCreateManyQuestionInput = {
    choice_id?: number
    choice_text: string
    is_correct?: boolean
  }

  export type TestQuestionCreateManyQuestionInput = {
    test_question_id?: number
    test_id: number
  }

  export type TestAnswerCreateManyQuestionInput = {
    test_answer_id?: number
    test_id: number
    selected_choice_id?: number | null
    is_correct?: boolean | null
  }

  export type ChoiceUpdateWithoutQuestionInput = {
    choice_text?: StringFieldUpdateOperationsInput | string
    is_correct?: BoolFieldUpdateOperationsInput | boolean
    selected_answers?: TestAnswerUpdateManyWithoutSelected_choiceNestedInput
  }

  export type ChoiceUncheckedUpdateWithoutQuestionInput = {
    choice_id?: IntFieldUpdateOperationsInput | number
    choice_text?: StringFieldUpdateOperationsInput | string
    is_correct?: BoolFieldUpdateOperationsInput | boolean
    selected_answers?: TestAnswerUncheckedUpdateManyWithoutSelected_choiceNestedInput
  }

  export type ChoiceUncheckedUpdateManyWithoutQuestionInput = {
    choice_id?: IntFieldUpdateOperationsInput | number
    choice_text?: StringFieldUpdateOperationsInput | string
    is_correct?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TestQuestionUpdateWithoutQuestionInput = {
    test?: TestUpdateOneRequiredWithoutTest_questionsNestedInput
  }

  export type TestQuestionUncheckedUpdateWithoutQuestionInput = {
    test_question_id?: IntFieldUpdateOperationsInput | number
    test_id?: IntFieldUpdateOperationsInput | number
  }

  export type TestQuestionUncheckedUpdateManyWithoutQuestionInput = {
    test_question_id?: IntFieldUpdateOperationsInput | number
    test_id?: IntFieldUpdateOperationsInput | number
  }

  export type TestAnswerUpdateWithoutQuestionInput = {
    is_correct?: NullableBoolFieldUpdateOperationsInput | boolean | null
    test?: TestUpdateOneRequiredWithoutTest_answersNestedInput
    selected_choice?: ChoiceUpdateOneWithoutSelected_answersNestedInput
  }

  export type TestAnswerUncheckedUpdateWithoutQuestionInput = {
    test_answer_id?: IntFieldUpdateOperationsInput | number
    test_id?: IntFieldUpdateOperationsInput | number
    selected_choice_id?: NullableIntFieldUpdateOperationsInput | number | null
    is_correct?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type TestAnswerUncheckedUpdateManyWithoutQuestionInput = {
    test_answer_id?: IntFieldUpdateOperationsInput | number
    test_id?: IntFieldUpdateOperationsInput | number
    selected_choice_id?: NullableIntFieldUpdateOperationsInput | number | null
    is_correct?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type TestAnswerCreateManySelected_choiceInput = {
    test_answer_id?: number
    test_id: number
    question_id: number
    is_correct?: boolean | null
  }

  export type TestAnswerUpdateWithoutSelected_choiceInput = {
    is_correct?: NullableBoolFieldUpdateOperationsInput | boolean | null
    test?: TestUpdateOneRequiredWithoutTest_answersNestedInput
    question?: QuestionUpdateOneRequiredWithoutTestAnswersNestedInput
  }

  export type TestAnswerUncheckedUpdateWithoutSelected_choiceInput = {
    test_answer_id?: IntFieldUpdateOperationsInput | number
    test_id?: IntFieldUpdateOperationsInput | number
    question_id?: IntFieldUpdateOperationsInput | number
    is_correct?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type TestAnswerUncheckedUpdateManyWithoutSelected_choiceInput = {
    test_answer_id?: IntFieldUpdateOperationsInput | number
    test_id?: IntFieldUpdateOperationsInput | number
    question_id?: IntFieldUpdateOperationsInput | number
    is_correct?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type TestQuestionCreateManyTestInput = {
    test_question_id?: number
    question_id: number
  }

  export type TestAnswerCreateManyTestInput = {
    test_answer_id?: number
    question_id: number
    selected_choice_id?: number | null
    is_correct?: boolean | null
  }

  export type TestQuestionUpdateWithoutTestInput = {
    question?: QuestionUpdateOneRequiredWithoutTest_questionsNestedInput
  }

  export type TestQuestionUncheckedUpdateWithoutTestInput = {
    test_question_id?: IntFieldUpdateOperationsInput | number
    question_id?: IntFieldUpdateOperationsInput | number
  }

  export type TestQuestionUncheckedUpdateManyWithoutTestInput = {
    test_question_id?: IntFieldUpdateOperationsInput | number
    question_id?: IntFieldUpdateOperationsInput | number
  }

  export type TestAnswerUpdateWithoutTestInput = {
    is_correct?: NullableBoolFieldUpdateOperationsInput | boolean | null
    question?: QuestionUpdateOneRequiredWithoutTestAnswersNestedInput
    selected_choice?: ChoiceUpdateOneWithoutSelected_answersNestedInput
  }

  export type TestAnswerUncheckedUpdateWithoutTestInput = {
    test_answer_id?: IntFieldUpdateOperationsInput | number
    question_id?: IntFieldUpdateOperationsInput | number
    selected_choice_id?: NullableIntFieldUpdateOperationsInput | number | null
    is_correct?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type TestAnswerUncheckedUpdateManyWithoutTestInput = {
    test_answer_id?: IntFieldUpdateOperationsInput | number
    question_id?: IntFieldUpdateOperationsInput | number
    selected_choice_id?: NullableIntFieldUpdateOperationsInput | number | null
    is_correct?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}