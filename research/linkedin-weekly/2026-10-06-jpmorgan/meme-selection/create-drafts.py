import json,hashlib,re
from pathlib import Path
root=Path.cwd()
run=root/'research/linkedin-weekly/2026-10-06-jpmorgan'
base=Path('app/linkedin/jpmorgan-ai-in-the-mailroom')
cfg=json.loads((run/'meme-selection/render-config.json').read_text())
contracts=json.loads((root/'.skills/social-meme-campaign/references/template-contracts.json').read_text())['templates']
for p in cfg:
    post=base/p['file']; raw=(root/post).read_text(); body=re.sub(r'\A---\r?\n[\s\S]*?\r?\n---\r?\n?', '',raw); digest=hashlib.sha256(body.encode()).hexdigest()
    for n,(template,texts) in enumerate(p['templates']):
        slots=dict(zip([s['key'] for s in contracts[template]['slots']],texts))
        dest=base/'memes/options'/f"{p['key']}-{template}.jpg" if n==0 else Path('research/linkedin-weekly/2026-10-06-jpmorgan/meme-selection/alternatives')/f"{p['key']}-{template}.jpg"
        row={'version':1,'id':f"{p['key']}-{template}",'post':str(post),'audience':'ai-decision-maker','operator_moment':p['moment'],'template':template,'slots':slots,'alt_text':contracts[template]['name']+'. '+' / '.join(texts)+'.','asset':str(dest),'asset_sha256':'','render_url':'','rights':{'status':'fair-use-review','provenance':'Established template in the local Memegen catalog; exact pair pending review.'},'status':'draft','post_body_sha256':digest,'attached':False}
        if n:
            alt=Path('research/linkedin-weekly/2026-10-06-jpmorgan/meme-selection/alternatives')/p['file']; (root/alt).parent.mkdir(parents=True,exist_ok=True); (root/alt).write_text(raw); row['post']=str(alt)
        folder=run/'meme-selection/drafts'; folder.mkdir(parents=True,exist_ok=True)
        (folder/f"{p['key']}-{template}.jsonl").write_text(json.dumps(row)+'\n')
