export async function GET() {
    const res = await fetch('https://links.papareact.com/pyp')
    const data = await res.json()

    return Response.json({ exploreData: data })
}