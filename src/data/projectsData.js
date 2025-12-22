// Import all individual project files
import gpt2Inference from "./projects/gpt2-inference";
import oooRiscv from "./projects/ooo-riscv";
import mrnav from "./projects/mrnav";
import uscc from "./projects/uscc";
import internetworking from "./projects/internetworking";
import sleepRight from "./projects/sleep-right";
import sudoku from "./projects/sudoku";
import digitalThermostat from "./projects/digital-thermostat";
import wizardsChess from "./projects/wizards-chess";
import scheduleGurus from "./projects/schedule-gurus";
import qdMarl from "./projects/qd-marl";

// Combine all projects into a single object
// The key is the slug used in the URL
const projectsData = {
  "gpt2-inference": gpt2Inference,
  "ooo-riscv": oooRiscv,
  mrnav: mrnav,
  uscc: uscc,
  internetworking: internetworking,
  "sleep-right": sleepRight,
  sudoku: sudoku,
  "digital-thermostat": digitalThermostat,
  "wizards-chess": wizardsChess,
  "schedule-gurus": scheduleGurus,
  "qd-marl": qdMarl,
};

export default projectsData;
