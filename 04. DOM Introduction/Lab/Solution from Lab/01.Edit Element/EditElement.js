function editElement(ref, match, repalcer) {
    let content = ref.textContent;
//първо ми се подава референция към някакъв HTML елемент
//със textContent взимам текста (съдържанието)
// на елемента
    let matcher = new RegExp(match, 'i');
//после идва елемента който трябва да се открие
//правя matcher който със new RegExp приема този елемент
    let edited = content.replace(matcher, repalcer);
//накрая идва текста с който да заменя горния елемент
    ref.textContent = edited;
//и вече променения текст го присвоявам към контента
}