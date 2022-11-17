export const convertValueToProgressbarWidth = (value, total) => {

    const exponent = value / total

    const exponent_tailwind_width_equivelent = {
        0: 'w-0',
        0.16: 'w-1/6',
        0.25: 'w-1/4',
        0.4: 'w-2/5',
        0.5: 'w-1/2',
        0.6: 'w-3/5',
        0.75: 'w-3/4',
        0.83: 'w-5/6',
        1: 'w-full'
    }

    if (exponent <= 0)
        return exponent_tailwind_width_equivelent[0]
    else if (exponent <= 0.16)
        return exponent_tailwind_width_equivelent[0.16]
    else if (exponent <= 0.25)
        return exponent_tailwind_width_equivelent[0.25]
    else if (exponent <= 0.4)
        return exponent_tailwind_width_equivelent[0.4]
    else if (exponent <= 0.5)
        return exponent_tailwind_width_equivelent[0.5]
    else if (exponent <= 0.6)
        return exponent_tailwind_width_equivelent[0.6]
    else if (exponent <= 0.75)
        return exponent_tailwind_width_equivelent[0.75]
    else if (exponent == 1)
        return exponent_tailwind_width_equivelent[1]
}