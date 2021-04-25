import Head from 'next/head'
import Link from 'next/link'

const Layout = props => (
    <div>
        <Head>
            <title>Create Next App</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <header>
            <nav>
                <ul>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/tools">Tools</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                </ul>
            </nav>
        </header>
        <main>
            {props.children}
        </main>
        <footer>

        </footer>
    </div>
)

export default Layout
