import { body, ValidationChain } from 'express-validator';

/**
 * Validation chain for flight booking requests
 * Performs sanitization (trim, escape) and validation of passenger details
 */
export const bookFlightValidation: ValidationChain[] = [
  body('passenger.name')
    .trim()
    .notEmpty()
    .withMessage('Passenger name is required')
    .isLength({ min: 2, max: 30 })
    .withMessage('Name must be between 2 and 30 characters long')
    .matches(/^[a-zA-Z\s'-]+$/)
    .withMessage('Name can only contain letters, spaces, hyphens and apostrophes')
    .escape(),
    
  body('passenger.email')
    .trim()
    .isEmail()
    .withMessage('Valid email address is required')
    .isLength({ max: 254 })
    .withMessage('Email address is too long')
    .normalizeEmail()
    .escape(),
    
  body('passenger.passport')
    .trim()
    .notEmpty()
    .withMessage('Passport number is required')
    .isLength({ min: 6, max: 9 })
    .withMessage('Passport number must be between 6 and 9 characters long')
    .matches(/^[A-Z0-9]+$/)
    .withMessage('Passport number can only contain uppercase letters and numbers')
    .escape(),
];