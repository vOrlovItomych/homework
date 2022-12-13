//array types
const array = [1, 2, 3]; // PACKED_SMI_ELEMENTS
const array = [1, 2, 3, 4.5]; // PACKED_DOUBLE_ELEMENTS
const array = [1, 2, 4, 'string']; // PACKED__ELEMENTS

const array = [1, 2, , 3]; // HOLEY_SMI_ELEMENTS
const array = [1, 2, 3, , 4.5]; // HOLEY_DOUBLE_ELEMENTS
const array = [1, 2, 4, , 'string']; // HOLEY__ELEMENTS