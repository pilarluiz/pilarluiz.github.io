const sudoku = {
  id: 9,
  title: "Sindoku: FPGA Sudoku Game",
  image: "/images/sudoku.PNG",
  date: "Spring 2021",
  overview:
    "Sindoku is a hardware-based Sudoku game implemented on FPGA using Verilog. This was my final project for USC's EE354: Introduction to Digital Circuits course, demonstrating digital logic design and FPGA programming skills.",
  courseLink: "https://web-app.usc.edu/soc/syllabus/20221/30978.pdf",
  imageClass: "sudoku-image",
  detailedOverview: `Our project SINdoku uses a VGA monitor to display a sudoku puzzle that the user can solve using the Nexys-4 FPGA board. The player can use the left, right, up, and down buttons on the board to move to different cells in the puzzle and enter numbers by pressing the center button after using the FPGA switches to select a number.

After filling out all the empty cells on the board, the user can flip the "check solution" switch to verify their puzzle with the solution. If the user was correct, an LED on the board lights up to indicate success. Otherwise, a different LED lights up to indicate an incorrect answer.

I was responsible for the display implementation, including the VGA controller and rendering system. A major challenge was drawing the numbers on screen and also creating the puzzles. Since Sudoku doesn't have many repeating patterns, much of the puzzle and testbench generation was manual and tedious work.

The outcome was a fully functional hardware-based Sudoku game that demonstrated digital design skills, VGA interfacing, and complex graphics implementation on FPGA. In retrospect, I would have imported number sprites to avoid wasting "human clocks" on manual digit creation. The project name "SINdoku" was a reference to our professor's emphasis on not wasting hardware clock cycles.`,
  techStack: ["Verilog", "FPGA", "VGA"],
  reportLink: "/documents/SINdoku_ProjectReport.pdf",
  paperLink: null,
  githubLink: "https://github.com/pilarluiz/SINdoku",
  liveDemo: null,
  slug: "sudoku",
  tags: ["Verilog", "FPGA", "VGA"],
  description: "TODO",
  imagePosition: "zoom-out-simple",
};

export default sudoku;

