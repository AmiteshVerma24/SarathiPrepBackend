const methodTemplates = {
    java: (questionName, functionName, inputType, outputType) => `
      public ${outputType} ${functionName}(${inputType} ${inputType.toLowerCase()}) {
          // ${questionName} - Your code here\n}`,
    javascript: (questionName, functionName, inputType, outputType) => `
      const ${functionName} = function(${inputType.toLowerCase()}) {
        // ${questionName} - Your code here\n};`,
    cpp: (questionName, functionName, inputType, outputType) => `
  class Solution {
public:
    ${outputType} ${functionName}(vector<${inputType}>& ${inputType.toLowerCase()}) {
          // ${questionName} - Your code here\n    }\n};`
  };


  export default methodTemplates;
