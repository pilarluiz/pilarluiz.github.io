import React from "react";

const uscc = {
  id: 11,
  title: "USCC – University Simple C Compiler",
  image: "/images/uscc.png",
  date: "Spring 2022",
  overview:
    "USCC (University Simple C Compiler) is a complete compiler for the University Simple C language, a subset of Standard C. Built as part of USC's ITP 439 Compiler Design course, this project implements all major compiler phases from lexical analysis to LLVM IR generation.",
  courseLink: "https://itp439-20231.github.io/USCC.html",
  detailedOverview: (
    <>
      USCC was built over six programming assignments (PAs) in USC's ITP 439
      Compiler Design course, implementing a complete compiler pipeline for
      the University Simple C language.
      <br />
      <br />
      <strong>PA1 - Recursive Descent Parser:</strong> Implemented a recursive
      descent parser using Flex for lexical analysis and custom C++ parsing
      logic. The parser constructs an Abstract Syntax Tree (AST) and handles
      syntax error recovery with detailed error messages showing exact line
      and column positions.
      <br />
      <br />
      <strong>PA2 - Semantic Analysis:</strong> Added semantic analysis
      including type checking, symbol table management, and scope resolution.
      The compiler validates type consistency, handles function declarations
      and calls, and manages variable scoping.
      <br />
      <br />
      <strong>PA3 - LLVM IR Generation:</strong> Implemented LLVM IR code
      generation from the AST. Each AST node has a corresponding LLVM IR
      generation function that creates basic blocks, instructions, and control
      flow structures.
      <br />
      <br />
      <strong>PA4 - Static Single Assignment (SSA):</strong> Added SSA form
      conversion, which is crucial for optimization passes. This involved
      implementing phi nodes and ensuring each variable has a single
      definition point.
      <br />
      <br />
      <strong>PA5 - Optimization Passes:</strong> Implemented various LLVM
      optimization passes including constant folding, dead code elimination,
      and loop optimizations to improve generated code efficiency.
      <br />
      <br />
      <strong>PA6 - Register Allocation:</strong> Built a custom graph
      coloring register allocation pass for efficient machine code generation,
      supporting both x86_64 and ARM64 architectures.
      <br />
      <br />
      The final compiler supports the full University Simple C language
      including arrays, functions, control structures, and generates optimized
      LLVM bitcode that can be compiled to executable binaries.
    </>
  ),
  techStack: [
    "C++",
    "LLVM",
    "Recursive Descent Parsing",
    "SSA",
    "Register Allocation",
  ],
  githubLink: "https://github.com/pilarluiz/uscc",
  reportLink: null,
  paperLink: null,
  liveDemo: null,
  slug: "uscc",
  tags: ["C++", "LLVM", "Compiler Design"],
  description:
    "A simple C compiler built using LLVM for educational purposes",
};

export default uscc;

