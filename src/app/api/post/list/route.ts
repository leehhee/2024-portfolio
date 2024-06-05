import getHtml from '@/app/api/post/list/getHtml';

export async function POST(req: Request, res: Response) {
  const param = await req.json();
  const html = await getHtml(param.name, param.limit);

  console.log(html);

  return new Response(JSON.stringify(html));
}
