
var chip8 = function() {
	this.reset();
};

chip8.prototype.reset = function() {
	// Program counter 
	this.pc = 0;

 	// Memory
 	this.memory = new Array(4096);

	// Stack
	this.stack = new Array(16);
	
	// Stack pointer
	this.sp = 0;
	
	// "V" registers
	this.v = new Array(16);
	
	// "I" register
	this.i = 0;
	
	// Delay timer
	this.delayTimer = 0;
	
	// Sound timer
	this.soundTimer = 0;
};

var boucle = function() {

		//Since the timers are not very precise, we execute multiple
		//CPU cycles when the gameLoop timer hits



			var opcode = (memory[PC++] << 8) | memory[PC++];
			decode(opcode);
			
			if(haltExecution)
				PC-=2;
			
			if(PC > 0xFFF) {
				clearInterval(loopInterval);
				break;
			}

	}


	var decode = function(opcode) {
	// Check first nibble to determine opcode.
	switch (opcode & 0xf000) {

		case 0x0000:

		switch (opcode) {

                 // CLS
                 // OOE0
                 // CLear the display.
                 case 0x00E0:

                 break;

                 // RET
                 // 00EE
                 // Return from subroutine.
                 case 0x00EE:

                 break;

             }

             break;

             // JP addr
             // 1nnnn
             // Jump to location nnn
             case 0x1000:

             break;

             // CALL addr
             // 2nnnn
             // Call subroutine at nnnn.
             case 0x2000:

             break;

             // SE Vx, byte
             // 2xkk
             // Skip next instruction if vX equals kk.
             case 0x3000:

             break;

             // SNE Vx, byte
             // 4xkk
             // Skip next instruction if vX doesn't equal kk.
             case 0x4000:

             break;

             // SE Vx, Vy
             // 5xy0
             // Skip next instruction if vX equals vY.
             case 0x5000:

             break;

             // LD Vx, byte
             // 6xkk
             // Set Vx equal to kk.
             case 0x6000:

             break;

             // ADD Vx, byte
             // 7xkk
             // Set Vx equal to Vx + kk.
             case 0x7000:

             break;

             case 0x8000:

             switch (opcode & 0x000f) {

                     // LD Vx, Vy
                     // 8xy0
                     // Stores register Vy in Vx
                     case 0x0000:

                     break;

                     // OR Vx, Vy
                     // 8xu1
                     // Set vX equal to vX OR Vy;
                     case 0x0001:

                     break;

                     // AND Vx, Vy
                     // 8xy2
                     // Set Vx equal to Vx AMD Vy
                     case 0x0002:

                     break;

                     // XOR Vx, Vy
                     // 8xy3
                     // Set Vx equal to Vx XOR Vy.
                     case 0x0003:

                     break;

                     // ADD Vx, Vy
                     // 8xy4
                     // Set Vx equal to Vx + Vy, set Vf equal to carry.
                     case 0x0004:

                     break;

                     // SUB Vx, Vy
                     // 8xy5
                     // Set Vx equal to Vx - Vy, set Vf equal to NOT borrow.
                     case 0x0005:

                     break;

                     // SHR Vx, Vy
                     // 8xy6
                     // Set Vx SHR 1.
                     case 0x0006:

                     break;

                     // SUBN Vx, Vy
                     // 8xy7
                     // Set Vx equal to Vy - Vx, set Vf equal to NOT borrow.
                     case 0x0007:

                     break;


                     // SHL Vx, Vy
                     // 8xyE
                     // Set Vx equal to Vx SHL 1.
                     case 0x000E:

                     break;

                 }

                 break;

             // SNE Vx, Vy
             // 9xy0
             // Skip next instruction if Vx is not equal to Vy.
             case 0x9000:

             break;

             // LD I, addr
             // Annn
             // Set I equal to nnn.
             case 0xA000:

             break;

             // JP V0, addr
             // Bnnn
             // Jump to location V0 + nnn.
             case 0xB000:

             break;

             // RND Vx, byte
             // Cxkk
             // Set Vx equal to random byte AND kk.
             case 0xC000:

             break;

             // DRW Vx, Vy, nibble
             // Dxyn
             // Display n-byte sprite starting at memory location I at (Vx, Vy), set VF equal to collision.
             case 0xD000:


             break;

             case 0xE000:
             switch (opcode & 0x00FF) {

                     // SKP Vx
                     // Ex9E
                     // Skip next instruction if the key with the value Vx is pressed.
                     case 0x009E:

                     break;

                     // SKNP Vx
                     // ExA1
                     // Skip  next instruction if the key with the value Vx is NOT pressed.
                     case 0x00A1:

                     break;

                 }

                 break;

                 case 0xF000:

                 switch (opcode & 0x00FF) {

                     // LD Vx, DT
                     // Fx07
                     // Place value of DT in Vx.
                     case 0x0007:

                     break;

                     // LD Vx, K
                     // Fx0A
                     // Wait for keypress, then store it in Vx.
                     case 0x000A:

                     break;

                     // LD ST, Vx
                     // Fx18
                     // Set sound timer to Vx.
                     case 0x0018:

                     break;

                     // ADD I, Vx
                     // Fx1E
                     // Set I equal to I + Vx
                     case 0x001E:

                     break;

                     // LD F, Vx
                     // Fx29
                     // Set I equal to location of sprite for digit Vx.
                     case 0x0029:
                         // Multiply by number of rows per character.
                         
                         break;

                     // LD B, Vx
                     // Fx33
                     // Store BCD representation of Vx in memory location starting at location I.
                     case 0x0033:

                     break;

                     // LD [I], Vx
                     // Fx55
                     // Store registers V0 through Vx in memory starting at location I.
                     case 0x0055:

                     break;

                     // LD Vx, [I]
                     // Fx65
                     // Read registers V0 through Vx from memory starting at location I.
                     case 0x0065:

                     break;

                 }

                 break;

                 default:
                 throw new Error("Unknown opcode " + opcode.toString(16) + " passed. Terminating.");
             }
         }
     }

loopInterval = setInterval(boucle,20);
