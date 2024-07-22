export async function POST(req: Request) {
    const body = await req.json();
    var o;
    var r;
    var e;
    var h = true;
    var j = true;
    var a = true;
    await fetch('https://friends.roblox.com/v1/users/'+(body.i).toString()+'/followers/count').then(async res => {
        h = res.ok;
        res.text().then(resp => {o = resp});
    });
    await fetch('https://raw.githubusercontent.com/1top10000/dx/main/png.base64').then(async res => {
        j = res.ok;
        await res.text().then(resp => {r = resp});
    });
    await fetch('https://raw.githubusercontent.com/1top10000/dx/main/png.base64').then(async res => {
        a = res.ok;
        await res.text().then(resp => {e = resp});
    });
    return new Response(JSON.stringify({
        x:[o, h],
        y:[r, j],
        z:[e, a]
    }));
}
