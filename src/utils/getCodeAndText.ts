export const getCodeAndText = (text: String) => {
    const pattern = /```([\s\S]*?)```/g; // Added 'g' flag for global match
    const matches = [...text.matchAll(pattern)];
    let results = [];

    for (const match of matches) {
        const codeBlock = match[1];
        results.push({ code: codeBlock })

    }

    const otherText = text.replace(pattern, "");
    return { codes: results, text: otherText }

}