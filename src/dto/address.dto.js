import { z } from 'zod';
import { addressSchema } from '../schemas/address.schema.js';

export const createAddressDto = addressSchema.omit({
    address_id: true,
});

export const updateAddressDto = addressSchema.partial();
