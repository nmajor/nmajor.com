import json,hashlib,re
from pathlib import Path
root=Path.cwd(); run=root/'research/linkedin-weekly/2026-10-06-jpmorgan'; folder=run/'meme-selection'; base=root/'app/linkedin/jpmorgan-ai-in-the-mailroom'
contracts_path=root/'.skills/social-meme-campaign/references/template-contracts.json'; index_path=root/'.skills/meme-angle-selector/references/template-selection-index.json'
contracts=json.loads(contracts_path.read_text()); cfg=json.loads((folder/'render-config.json').read_text())
sha=lambda p:hashlib.sha256(p.read_bytes()).hexdigest()
sources={
 'staples':[{'name':'JPMorgan Payments','url':'https://www.jpmorgan.com/payments/newsroom/ai-robotics-lockbox-processing','date':'2026-05-27'}],
 'branch':[{'name':'Liberate press release','url':'https://www.businesswire.com/news/home/20260930951872/en/Liberate-Gives-Insurance-Agents-and-Carriers-Back-More-Than-100-Million-Minutes','date':'2026-09-30'},{'name':'Liberate Branch case resource','url':'https://www.liberate.ai/resources/how-branch-and-liberate-set-a-new-standard-for-claim-reporting-innovation'}],
 'tokio':[{'name':'Automation Today executive interview','url':'https://automationtoday.net/featuredarticles/clearing-the-path-for-human-expertise-how-tokio-marine-hcc-is-automating-underwriting-not-the-underwriter/'}],
 'xpt':[{'name':'XPT Specialty','url':'https://xptspecialty.com/xpt-specialty-deploys-suite-of-ai-tools-across-wholesale-operation/','date':'2026-10-01'}],
 'elliott':[{'name':'Elliott court decision hosted by Dechert','url':'https://www.dechert.com/content/dam/dechert%20files/knowledge/re-torts/Elliott%20v.%20New%20York%20Bariatric%20Group.pdf','date':'2026-08-06'}]}
pairwise={
 'staples':'Honest Work values the unglamorous removal step directly. Genie adds a capability bottleneck but needs an extra implied dependency; the human-or-machine prerequisite is already explicit in the copy.',
 'branch':'Light names the excluded settlement measure directly and keeps the scope boundary visible. Glasses changes the reading of the same metric, but its initial label could be mistaken for a claim before the second panel is read.',
 'tokio':'Kombucha directly changes the reaction to the same agent after context narrows. Bus gives two views of the same cut but conveys the specificity result less directly.',
 'xpt':'Same Picture shows the account-size and paperwork mismatch immediately. Bus needs readers to infer two different views of wholesale automation.',
 'elliott':'Gru makes the failed sequence explicit and preserves the printed-paper fact. Roll Safe shows flawed intent but omits the actual recovery that makes this case specific.'}
fit_reasons={
 'bihw':'The first caption minimizes staple removal; the fixed second caption values useful legitimate work.',
 'genie':'Reading capability meets the physical prerequisite of removing staples from the same documents.',
 'kramer':'The question names unexpected midnight claim reporting; voice and digital intake answer its cause.',
 'light':'The question asks about settlement outside the reporting-time measure; the answer preserves that scope boundary.',
 'glasses':'Both readings concern the same seven-minute metric; the second corrects its meaning to claim reporting.',
 'kombucha':'Both captions evaluate the same underwriting agent; its narrower manual improves specificity and changes the reaction.',
 'balloon':'Rejected: the hosted actor slot lands on the clipped lower balloon, contradicting declared semantic positioning.',
 'same':'The paperwork observes two differently sized account submissions with nearly equivalent processing burden.',
 'bus':'Opposite interpretations concern the same operational change, preserving one event across both passengers.',
 'gru':'Two setup steps seek AI agreement; a judge reading paper defeats the plan and is repeated verbatim.',
 'rollsafe':'The clever-looking directive tries to avoid losing an argument by corrupting the reviewer.'}
recommended=[]; alternatives=[]; visuals=[]; assignments=[]
for p in cfg:
 key=p['key']; templates=[x[0] for x in p['templates']]
 if key=='tokio': templates=['kombucha','bus']
 if key=='branch': templates=['light','glasses']
 post=base/p['file']; raw=post.read_text(); body=re.sub(r'\A---\r?\n[\s\S]*?\r?\n---\r?\n?', '',raw); digest=hashlib.sha256(body.encode()).hexdigest()
 packet=json.loads((folder/f'{key}-selection.json').read_text())
 packet['catalog_scan']={'active_count':len(contracts['admission']['active']),'contracts_sha256':sha(contracts_path),'selection_index_sha256':sha(index_path)}
 # Derive exact IDs from the preserved retriever output, then record manual contract additions separately.
 packet['retrieval'][0]['returned_templates']=re.findall(r'^\d+\. ([a-z0-9-]+) \(', (folder/f'{key}-retrieval.txt').read_text(),re.M)
 if key=='tokio':
  packet['angles'][1].update(id='manual-views',mechanism='preference_contrast',line='The same narrowed manual can look like lost material or retained relevant guidance.')
  packet['manual_additions']=[{'template':t,'reason':fit_reasons[t]} for t in templates]
 if key=='branch':
  packet['angles'][0].update(id='metric-boundary',mechanism='hidden_constraint',line='The reporting-time result is bounded by intake and says nothing about settlement speed.')
  packet['angles'][1].update(id='metric-reading',mechanism='misclassification',line='The same seven-minute number can be misread as claims rather than claim reporting.')
  packet['manual_additions']=[{'template':t,'reason':fit_reasons[t]} for t in templates]
 packet['candidates']=[]
 for n,t in enumerate(templates):
  ledger=folder/'drafts'/f'{key}-{t}.jsonl'; row=json.loads(ledger.read_text()); row['post_body_sha256']=digest
  if n: (root/row['post']).write_text(raw)
  ledger.write_text(json.dumps(row)+'\n')
  scores=dict(relationship_fit=3,surprise_coherence=3 if n==0 else 2,compression=3 if n==0 else 2,operator_recognition=3,audience_familiarity=3 if t in ['bihw','kombucha','same','gru','rollsafe'] else 2,voice_target=3,visual_fluency=3 if t not in ['bihw','gru','light'] else 2)
  reasons={'relationship_fit':fit_reasons[t],'surprise_coherence':p['moment'],'compression':'Short captions carry the relationship without numerical overreach.' if n==0 else 'The alternate needs more inference or text than the recommended relationship.','operator_recognition':p['moment'],'audience_familiarity':'Established active catalog pattern; recognizable without explaining the character.' if scores['audience_familiarity']==3 else 'Established but less universal pattern; captions supply the relationship.','voice_target':'Targets an operating assumption or attempted shortcut, not affected people.','visual_fluency':'Inspected full size and at 300 pixels; all captions readable. Longer text needs deliberate reading.' if scores['visual_fluency']==2 else 'Inspected full size and at 300 pixels; concise text and roles read quickly.'}
  candidate={'template':t,'angle':packet['angles'][n]['id'],'slot_map':{s['key']:fit_reasons[t]+' Caption: '+row['slots'][s['key']] for s in contracts['templates'][t]['slots']},'slots':row['slots'],'render':{'asset':row['asset'],'asset_sha256':row['asset_sha256'],'full_size_qa':'pass','phone_size_qa':'pass'},'hard_fail':False,'hard_fail_reason':None,'scores':scores,'reasons':reasons}
  packet['candidates'].append(candidate)
  if n==0:
   recommended.append(row)
   visuals.append({'version':1,'id':row['id'],'post':row['post'],'post_body_sha256':digest,'format':'classic-meme','title':contracts['templates'][t]['name'],'alt_text':row['alt_text'],'sources':sources[key],'output':row['asset'],'rights':row['rights'],'status':'review','recommended_by':'agent','attached':False,'asset_sha256':row['asset_sha256']})
  else: alternatives.append(row)
 packet['recommendation']={'template':templates[0],'reason':pairwise[key],'confidence':'high' if key in ['tokio','elliott'] else 'medium','alternative':templates[1]}
 packet['post_body_sha256']=digest
 if key=='branch': packet['claim_limit']='Midnight refers to the vendor-described 24/7 intake capability; no Branch-specific after-hours volume or savings are asserted.'
 if key=='xpt': packet['claim_limit']='Same Picture uses comic compression for the source\'s nearly equal workload, not literal identity in all underwriting requirements.'
 if key=='tokio': packet['rejected_render']={'template':'balloon','asset':'research/linkedin-weekly/2026-10-06-jpmorgan/meme-selection/alternatives/tokio-balloon.jpg','reason':fit_reasons['balloon'],'phone_size_qa':'fail'}
 if key=='branch': packet['rejected_render']={'template':'kramer','asset':'app/linkedin/jpmorgan-ai-in-the-mailroom/memes/options/branch-kramer.jpg','reason':'The native blank center wastes about a third of the feed image. Rejected after parent full-size review despite legible captions.','phone_size_qa':'fail'}
 packetpath=folder/f'{key}-selection.json'; packetpath.write_text(json.dumps(packet,indent=2)+'\n')
 assignments.append({'post_id':key,'packet':str(packetpath.relative_to(root)),'packet_sha256':sha(packetpath),'template':templates[0],'mechanism':packet['angles'][0]['mechanism'],'collision_reason':'The two reaction updates expose different operating facts: unglamorous physical work retains value, while narrowing context improves specificity. Their distinct image relationships communicate each more accurately than available replacements.' if key in ['staples','tokio'] else None})
for path,rows in [(base/'memes/campaign.jsonl',recommended),(base/'visuals/campaign.jsonl',visuals),(run/'variant-memes/campaign.jsonl',alternatives),(run/'visual-candidates.jsonl',visuals+[{'version':1,'id':r['id'],'post':str((base/next(p['file'] for p in cfg if r['id'].startswith(p['key']+'-'))).relative_to(root)),'output':r['asset'],'format':'classic-meme','status':'review','recommended_by':'agent','asset_sha256':r['asset_sha256'],'post_body_sha256':r['post_body_sha256'],'alternative':True} for r in alternatives])]:
 path.parent.mkdir(parents=True,exist_ok=True); path.write_text(''.join(json.dumps(x)+'\n' for x in rows))
(folder/'batch-assignment.json').write_text(json.dumps({'version':1,'recent_template_ids':['mordor','drake','panik-kalm-panik','handshake','pigeon'],'assignments':assignments},indent=2)+'\n')
