import Link from 'next/link'

export default function GalleryTeaser ({ id, thumbUrl, name, description }) {
    return (
//         <!--
//   Tailwind UI components require Tailwind CSS v1.8 and the @tailwindcss/ui plugin.
//   Read the documentation to get started: https://tailwindui.com/documentation
// -->
            <li className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow">
                <Link href={ `/gallery/${ id }` }>
                    <a>
                        <div className="flex-1 flex flex-col p-8">
                            <img className="w-32 h-32 flex-shrink-0 mx-auto bg-white rounded-full" src={ thumbUrl } alt="" />
                            <h2 className="mt-6 text-gray-900 leading-5 font-medium">{ name }</h2>
                            <dl className="mt-1 flex-grow flex flex-col justify-between">
                                <dt className="sr-only">{ description }</dt>
                                <dd className="text-gray-500 text-sm leading-5">{ description }</dd>
                            </dl>
                        </div>
                    </a>
                </Link>
            </li>
    )
}