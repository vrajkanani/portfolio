const Joi = require('joi');
const { createBooking } = require('c:/Users/asusi/Documents/GitHub/Chhakdawala/backend/src/modules/factory/bookings/bookings.validation');

// Helper to run schema validation
const validateBody = (body) => {
  const { error } = createBooking.body.validate(body);
  return error ? error.details[0].message : null;
};

// Test 1: Valid payload with short description
const validPayload = {
  pickupLocation: "123 Factory Lane",
  dropLocation: "456 Port Road",
  vehicleTypeId: "a1b2c3d4-e5f6-4a8b-9c0d-1e2f3a4b5c6d", // UUIDv4 (has 4 at third group)
  weight: 500,
  weightUnit: "kg",
  loadType: "Timber",
  loadDescription: "Small planks of wood under 50 chars",
  receiverName: "Vijay Patel",
  receiverPhone: "9876543210",
  senderName: "Ajay Shah",
  senderPhone: "9123456789"
};

console.log("Test 1 (Valid payload):");
const err1 = validateBody(validPayload);
if (err1 === null) {
  console.log("-> PASSED\n");
} else {
  console.log("-> FAILED:", err1, "\n");
}

// Test 2: Description > 50 characters (should fail)
const longDescPayload = {
  ...validPayload,
  loadDescription: "This description has more than fifty characters. It should fail validation."
};

console.log("Test 2 (Description too long > 50 chars):");
const err2 = validateBody(longDescPayload);
if (err2 !== null) {
  console.log("-> PASSED (Expected error message:", err2, ")\n");
} else {
  console.log("-> FAILED (Validation passed when it should have failed)\n");
}

// Test 3: Invalid Phone format (should fail)
const invalidPhonePayload = {
  ...validPayload,
  receiverPhone: "98765"
};

console.log("Test 3 (Invalid phone number format):");
const err3 = validateBody(invalidPhonePayload);
if (err3 !== null) {
  console.log("-> PASSED (Expected error message:", err3, ")\n");
} else {
  console.log("-> FAILED (Validation passed when it should have failed)\n");
}

// Test 4: Description missing/null (should pass since it's optional)
const noDescPayload = {
  ...validPayload,
  loadDescription: null
};

console.log("Test 4 (Null/Optional description):");
const err4 = validateBody(noDescPayload);
if (err4 === null) {
  console.log("-> PASSED\n");
} else {
  console.log("-> FAILED:", err4, "\n");
}
