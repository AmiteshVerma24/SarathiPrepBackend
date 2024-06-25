import methodTemplates from "./templates.js"

const generateDriverCode = (questionName, function_name, input_type, output_type) => {
    const code = methodTemplates["java"](questionName, function_name, input_type, output_type);
    return code;
}

export default generateDriverCode;