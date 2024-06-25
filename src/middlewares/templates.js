const methodTemplates = {
    java: (questionName, functionName, inputType, outputType) => `
      public ${outputType} ${functionName}(${inputType} ${inputType.toLowerCase()}) {
          // ${questionName} - Your code here
          return ${outputType === 'int[]' ? 'new int[]{}' : 'null'};
      }
    `,
    javascript: (questionName, functionName, inputType, outputType) => `
      ${functionName}(${inputType.toLowerCase()}) {
          // ${questionName} - Your code here
          return ${outputType === 'number[]' ? '[]' : 'null'};
      }
  }
    `,
    python: (questionName, functionName, inputType, outputType) => `
  class Solution:
      def ${functionName}(self, ${inputType.lower()}):
          # ${questionName} - Your code here
          return ${outputType === 'List[int]' ? '[]' : 'None'}
    `,
    cpp: (questionName, functionName, inputType, outputType) => `
  class Solution {
  public:
      ${outputType} ${functionName}(vector<${inputType}>& ${inputType.toLowerCase()}) {
          // ${questionName} - Your code here
          return {};
      }
  };
    `
  };

  export default methodTemplates;
