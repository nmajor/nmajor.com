# J.P. Morgan's AI had to remove the staples

J.P. Morgan's payment automation now includes a robot that opens envelopes and removes the staples. That last step is the tell. Anyone who has fed a stapled stack into a scanner knows what happens next. The bank spent engineering effort on the least glamorous part of its pipeline, which is often where the actual work lives.

The setting is lockbox processing. Customers mail checks and remittance documents to a bank-managed address. The bank deposits the checks and digitizes the paperwork so payments can be reconciled against the invoices they cover. It is a service built on physical mail, which means the first mile of a digital workflow is somebody opening an envelope.

In 2025, [J.P. Morgan Payments deployed a mail automation robot at one lockbox site](https://www.jpmorgan.com/payments/newsroom/ai-robotics-lockbox-processing), developed with Ripcord. The machine opens envelopes, removes and unfolds the contents, separates pages, removes staples, tracks what came out of each envelope, and scans the documents. The bank says it handles more than 4,000 envelope and document permutations. That figure is bank-reported, and the deployment covers a single site.

## The platform underneath

The robot is the visible piece of a longer build. The bank rebuilt its underlying processing platform in 2020, applying AI to extraction, quality validation, and review, then added LLMs later for complex review cases. The order matters. Converting scanned pages into clean, validated data had been worked on for years before any machine touched an envelope. Each improvement sat on earlier operational work: digitized documents, structured extraction, exception routing to people. A machine that only opens envelopes would be a curiosity. Connected to a platform that can read, validate, and process what it scans, it becomes capacity.

The bank says [data capture across this operation once required about 13 billion keystrokes a year](https://www.jpmorgan.com/payments/newsroom/ai-robotics-lockbox-processing) and is now largely automated. That claim belongs to the layered platform, not to the robot or any single model, and the bank attaches no savings estimate to it.

Operators get visibility into throughput, exceptions, and turnaround time, plus an AI assistant that answers process questions. The bank says every model is tested before deployment. Accuracy figures come from its own data, with the measurement method undisclosed.

The sequencing is what stands out. The bank fixed document understanding first, ran it for years, and only then automated the physical intake that feeds it. The contents of a business envelope are folded, stapled, and attached to checks that have to clear. That mess breaks clean digital pipelines. J.P. Morgan treated it as an engineering problem.