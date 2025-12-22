import React from "react";

const oooRiscv = {
  id: 12,
  title: "Out-of-Order RISC-V Processor",
  image: "/images/mp_ooo_diagram.png",
  date: "Fall 2025",
  overview:
    "An out-of-order (OoO) processor implementing the RV32IM instruction set architecture in SystemVerilog. This 8-week capstone project for UIUC's ECE 411: Computer Organization & Design demonstrates advanced computer architecture concepts including dynamic instruction scheduling, register renaming, and speculative execution.",
  courseLink:
    "https://courses.grainger.illinois.edu/ece411/fa2025/syllabus.html",
  videoLink: null,
  stackImage: null,
  imageClass: null,
  detailedOverview: `The goal of this project was to design and implement a high-performance out-of-order processor that maximizes instruction-level parallelism (ILP) while maintaining correct program semantics. Out-of-order execution allows the processor to dynamically reorder instructions to avoid stalls and keep execution units busy, significantly improving performance over in-order designs. The key challenges included managing data dependencies, handling precise exceptions, and implementing efficient speculation and recovery mechanisms.

We implemented an Explicit Register Renaming (ERR) architecture using a Reorder Buffer (ROB) for tracking in-flight instructions and maintaining precise exception semantics. The design features a reservation station-based execution model that allows instructions to wait for their operands while freeing up pipeline resources. Our processor implements the full RV32IM instruction set, including integer multiplication and division operations.

The processor includes several advanced features for high performance. We implemented a 2-way superscalar design that can fetch, decode, dispatch, and retire up to two instructions per cycle. The memory subsystem features split instruction and data caches with a bus arbiter for efficient memory access, and both caches are fully pipelined to minimize latency. To improve instruction fetch throughput, we added next-line prefetching that predicts sequential instruction access patterns. For branch handling, we integrated a Gshare branch predictor that uses a global history register combined with branch address hashing to achieve high prediction accuracy. The memory execution unit uses a split load-store queue architecture that allows loads and stores to be scheduled independently while maintaining memory ordering constraints.

Key technical challenges included maintaining correct program order despite out-of-order execution, which required coordination between the ROB, reservation stations, and execution units to ensure instructions retire in order even when they complete out of order. We had to balance competing tradeoffs between power, performance (IPC), area, and timing delay throughout the design. For example, increasing superscalar width improves IPC but increases area and power consumption, while deeper pipelines can improve clock frequency but add complexity to forwarding paths and hazard detection. Through this process, we discovered that not all advanced features work well together—some combinations provided diminishing returns or introduced new bottlenecks that negated their individual benefits.`,
  advancedFeaturesContent: (
    <>
      <strong>2-Way Superscalar Design:</strong> Can fetch, decode, dispatch,
      and retire up to two instructions per cycle, significantly improving
      instruction throughput
      <br />
      <br />
      <strong>Split Instruction and Data Caches:</strong> Features separate L1
      caches with a bus arbiter for efficient memory access, with both caches
      fully pipelined to minimize latency
      <br />
      <br />
      <strong>Next-Line Prefetching:</strong> Predicts sequential instruction
      access patterns to improve instruction fetch throughput and reduce cache
      misses
      <br />
      <br />
      <strong>Gshare Branch Predictor:</strong> Uses a global history register
      combined with branch address hashing to achieve high prediction accuracy
      and minimize pipeline flushes
      <br />
      <br />
      <strong>Split Load-Store Queue:</strong> Allows loads and stores to be
      scheduled independently while maintaining memory ordering constraints for
      correct program execution
      <br />
      <br />
      <strong>Explicit Register Renaming (ERR):</strong> Uses a Reorder Buffer
      (ROB) for tracking in-flight instructions and maintaining precise
      exception semantics
      <br />
      <br />
      <strong>Reservation Station Execution Model:</strong> Enables instructions
      to wait for operands while freeing up pipeline resources, maximizing
      instruction-level parallelism
    </>
  ),
  techStack: [
    "SystemVerilog",
    "RISC-V",
    "Computer Architecture",
    "Out-of-Order Execution",
  ],
  paperLink: null,
  githubLink: null,
  reportLink: "/documents/mp_ooo_final_report.pdf",
  liveDemo: null,
  slug: "ooo-riscv",
  tags: ["SystemVerilog", "RISC-V", "Computer Architecture"],
  description:
    "High-performance out-of-order microprocessor implementing RV32IM with dynamic scheduling, register renaming, and speculative execution",
  imagePosition: null,
};

export default oooRiscv;
