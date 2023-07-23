export function truncateText(text: string, chars: number) {
    const totalChars = text.length

    if (totalChars > chars) {
        const truncatedText = text.substring(0, chars)
        return truncatedText + '...'
    }
    return text
}