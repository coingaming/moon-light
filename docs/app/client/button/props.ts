import { type Data } from "@/components/propsTable"
import EnumPropTypes from "@/components/propsTable/enumPropTypes"

const Props: Data[] = [
    {
        name: 'animation',
        type: ['progress', 'success', 'error', 'pulse', EnumPropTypes.BOOLEAN],
        description: 'Animation of button'
    },
    {
        name: 'as',
        type: ['a', 'button'],
        defaultState: 'button',
        description: 'Rendered HTML element'
    },
    {
        name: 'children',
        type: [EnumPropTypes.REACTNODE],
        description: 'Children content'
    },
    {
        name: 'className',
        type: [EnumPropTypes.STRING],
        description: 'Tailwind classes for customization'
    },
    {
        name: 'disabled',
        type: [EnumPropTypes.BOOLEAN],
        defaultState: 'false',
        description: 'Disabled button'
    }
]

export default Props