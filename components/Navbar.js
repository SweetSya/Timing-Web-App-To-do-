import Link from "next/link"
import { useRouter } from "next/router"

const Navbar = () => {
    const twNavList = `
        px-[10px] cursor-pointer whitespace-nowrap sm:w-4/5 w-full h-12 flex flex-row items-center justify-center sm:justify-start gap-3 sm:rounded font-normal hover:text-slate-300 ease-in duration-300
        `
    const twActive = `
        bg-slate-400 text-dark sm:ml-[33px]
        `
    const twIcons = `
        h-1/2 w-auto
        `
    const twNavLink = `
        w-full flex items-center sm:ml-[8px] ml-auto mr-auto
        `


    const router = useRouter()
    
    return (
        <nav className="top-0 left-0 w-1/5 min-w-[80px] sm:min-w-[280px] h-screen bg-slate-700 flex flex-col justify-between">
            <div>
                <span className="flex w-full h-fit items-center sm:pl-[10px] pt-[10px]">
                    <div className="rounded-[100px] bg-dark p-[5px] sm:mx-[0px] mx-auto">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-[33px]">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>

                    <h1 className="text-[20px] ml-[10px] text-white font-bold sm:block hidden">Timing</h1>
                </span>

            <ul className="flex flex-col gap-6 items-center w-full my-5">
                <Link href={'/'} className={[twNavLink]} >
                    <li className={[twNavList, router.pathname == "/" ? twActive : ""]}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                    </svg>
                    <p className="hidden sm:block">Home</p>
                    </li>
                </Link>
                <Link href={'/create'} className={[twNavLink]}>
                    <li className={[twNavList, router.pathname == "/create" ? twActive : ""]}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="hidden sm:block">Create Note</p>
                    </li>
                </Link>
                <Link href={'/view'} className={[twNavLink]}>
                    <li className={[twNavList, router.pathname == "/view" ? twActive : "", router.pathname == "/view/[id]" ? twActive : ""]}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                    </svg>
                    <p className="hidden sm:block">View Note</p>
                    </li>
                </Link>
            </ul>
            </div>
            <div className="w-auto h-[80px] flex sm:pl-[10px] bg-slate-800">
                <span className="w-full h-full flex gap-[10px] items-center sm:justify-start justify-center">
                    <span className="flex-none max-w-[50px] min-w-[50px] h-[50px] flex items-center justify-center bg-slate-900 rounded-[100px] overflow-hidden">
                        <img className="h-full w-full object-cover" src="../resources/images/user.jpg" />
                    </span>
                    <span className="sm:w-9/12 hidden sm:block">
                        <p className="w-2/3 truncate">SweetSy</p>
                        <span className="w-auto flex justify-between">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                            </svg>

                            <span className="flex gap-2.5">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
                                    </svg>
                                </span>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                                    </svg>

                                </span>
                            </span>
                        </span>
                    </span>
                </span>
            </div>
        </nav>
    )
}

export default Navbar