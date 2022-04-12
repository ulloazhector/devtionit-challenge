import { useState, useEffect } from "react"

// Custom hook
const useDebouncer = (input, delay) => {
    const [debounce, setDebounce] = useState(input)

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setDebounce(input)
        }, delay)
        
        return () => clearTimeout(timeoutId)
    }, [input, delay])

    return debounce
}

export default useDebouncer
