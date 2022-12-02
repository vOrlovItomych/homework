/**
 * The PowerButton class is our Facade
 */
class PowerButton {

    private computerIsRunning = false;

    constructor(
        private cpu: CPU = new CPU(),
        private memory: Memory = new Memory(),
        private hardDrive: HardDrive = new HardDrive()
    ) { }

    private startComputer() {
        this.cpu.start();
        this.memory.start();
        this.hardDrive.start();
        console.log("COMPUTER: Started!")
    }
    private stopComputer() {
        this.cpu.stop();
        this.memory.stop();
        this.hardDrive.stop();
        console.log("COMPUTER: Stopped!")
    }

    public press(): void {
        if (this.computerIsRunning) {
            this.stopComputer();
        }
        if (!this.computerIsRunning) {
            this.startComputer();
        }
        this.computerIsRunning = !this.computerIsRunning;
    }
}

/**
 * The CPU class is one of our subsystems
 */
class CPU {
    public start(): void {
        console.log('CPU: Ready!\n');
    }
    public stop(): void {
        console.log('CPU: Stopped!\n');
    }
}

/**
 * The Memory class is one of our subsystems
 */
class Memory {
    public start(): void {
        console.log('Memory: Ready!\n');
    }
    public stop(): void {
        console.log('Memory: Stopped!\n');
    }
}

/**
 * The HardDrive class is one of our subsystems
 */
class HardDrive {
    public start(): void {
        console.log('HardDrive: Ready!\n');
    }
    public stop(): void {
        console.log('HardDrive: Stopped!\n');
    }
}


function clientCode(powerButton: PowerButton) {
    powerButton.press();
    powerButton.press();
}

const powerButton = new PowerButton();
clientCode(powerButton);