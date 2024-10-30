import { Metadata } from "next"



export function constructMetadata({
    title = 'Ricupero - Az Útépítés és Fuvarozás Szakértője',
    description = 'A Ricupero a vezető vállalat az útépítés, fuvarozás, konténerek kereskedelme, helykiadás és munkagépek kiadásának területén. Cégünk elkötelezett amellett, hogy ügyfelei számára a legmagasabb szintű szolgáltatásokat nyújtsa, amelyek segítenek projektjeik sikeres megvalósításában.',
    image = '/riclogo.png',
    icons = '/riclogo.jpg',
    noIndex = false,
  }: {
    title?: string
    description?: string
    image?: string
    icons?: string
    noIndex?: boolean
  } = {}): Metadata {
    return {
      title,
      description,
      openGraph: {
        title,
        description,
        images: [
          {
            url: image,
          },
        ],
      },
      twitter: {
        card: 'summary_large_image',
        title,
        description,
        images: [image],
        creator: '@Ricupero',
      },
      icons,
      metadataBase: new URL('https://ricupero.hu'),
      ...(noIndex && {
        robots: {
          index: false,
          follow: false,
        },
      }),
    }
  }