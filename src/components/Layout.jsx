import cn from 'classnames'
import { useTheme } from '../hooks/useTheme'

const Layout = ({children}) => {
    const {isPink} = useTheme()
    return (
        <div className={cn('layout',{pink: isPink === true})}>
            {children}
        </div>
    )
}

export default Layout