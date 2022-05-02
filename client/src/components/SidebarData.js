import * as GitIcons from 'react-icons/go'


export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <GitIcons.GoHome></GitIcons.GoHome>,
        cName: 'nav-text'
    },
    {
        title: 'Projects',
        path: '/projects',
        icon: <GitIcons.GoFileBinary></GitIcons.GoFileBinary>,
        cName: 'nav-text'
    },
    {
        title: 'Contact',
        path: '/contact',
        icon: <GitIcons.GoCommentDiscussion></GitIcons.GoCommentDiscussion>,
        cName: 'nav-text'
    }
]