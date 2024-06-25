import methodTemplates from "./templates.js"

const generateDriverCode = (language, questionName, function_name, input_type, output_type) => {
    const code = methodTemplates[language](questionName, function_name, input_type, output_type);
    return code;
}

export default generateDriverCode;