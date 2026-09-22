---
license: apache-2.0
language:
- en
tags:
- meme
- humor
- llm
- fact-checking
- knowledge-graph
- rag
pretty_name: MemeFact Templates
size_categories:
- 100<n<1K
---

# MemeFact Templates Dataset

This dataset contains 663 meme templates enriched with contextual knowledge for fact-checking meme generation. Each template includes comprehensive information about its origin, cultural significance, visual characteristics, and typical caption patterns to support Retrieval Augmented Generation (RAG) systems.

## Dataset Description

### Overview

The "MemeFact Templates" dataset is the result of extensive data engineering applied to the Internet Memes Knowledge Graph (IMKG). It provides structured, augmented information about internet memes that enables AI systems to understand both the visual elements and cultural context of each template, facilitating the generation of contextually appropriate captions for fact-checking purposes.

Key features of this dataset include:
- Comprehensive template descriptions and contextual information from KnowYourMeme
- AI-generated visual descriptions of meme contents
- Caption style analyses detailing typical language patterns and structures
- Top engaging examples of each template based on engagement metrics
- Technical metadata required for meme generation

### Key Statistics

- **Total Templates**: 663 unique meme templates
- **Average Captions Per Template**: 9.7 high-engagement examples
- **Data Sources**: Internet Memes Knowledge Graph, ImgFlip, KnowYourMeme
- **Engagement Metrics**: Views and upvotes from ImgFlip
- **Augmentation**: AI-generated visual descriptions and caption style analyses

## Dataset Structure

The dataset is provided as a CSV file with the following columns:

| Column Name | Data Type | Description |
|-------------|-----------|-------------|
| `template_id` | Integer | Unique identifier for the meme template on ImgFlip |
| `template_url` | String (URL) | Direct URL to the template image |
| `template_title` | String | Common name or title of the meme template |
| `total_views` | Integer | Cumulative view count of all memes using this template |
| `total_upvotes` | Integer | Cumulative upvote count of all memes using this template |
| `box_count` | Integer | Number of text placeholders in the template |
| `about` | String | Background information about the meme's origin and cultural significance from KnowYourMeme |
| `captions` | String | Top engaging captions used with this template, separated by delimiter |
| `description` | String | AI-generated visual description of the template, including scene content, emotional landscape, and humor analysis |
| `caption_style_explanation` | String | AI-generated analysis of typical caption patterns, including length distribution, language patterns, setup-punchline mechanics, and recurring elements |

## Data Splits

The dataset is provided as a single CSV file without predefined train/validation/test splits.

## Dataset Limitations

Users of this dataset should be aware of the following limitations:

- **Temporal Coverage**: The dataset primarily contains older, established meme templates and may lack representation of very recent trends
- **Cultural Bias**: The templates predominantly reflect English-language internet culture and may not represent memes from other cultural or linguistic contexts
- **Visual Description Quality**: Some templates may have limited or missing visual descriptions due to content filtering by the AI models used for augmentation
- **Template Naming Inconsistency**: There may be inconsistencies in template naming between ImgFlip and KnowYourMeme sources

## Collection Methodology

This dataset was created through a multi-stage data engineering process:

1. **Data Extraction**: The IMKG was parsed from its Resource Description Framework (RDF) format, extracting 15,978,495 triples containing information about 7,556 different meme templates and 1,307,470 meme instances.

2. **Quality Enhancement**:
   - **Engagement Scoring**: Templates were ranked using a weighted combination of view and upvote z-scores
   - **Deduplication**: Redundant entries were identified and removed based on template IDs and names
   - **Content Filtering**: Templates containing profanity or inappropriate content were removed

3. **AI Augmentation**:
   - **Visual Descriptions**: GPT-4o was used to generate detailed descriptions of template images
   - **Caption Style Analysis**: Each template's typical caption patterns were analyzed to understand its usage conventions
   - **Caption Examples**: The top 10 most engaging captions were extracted for each template

4. **Data Enrichment**:
   - **Recent Templates**: Additional scraping of ImgFlip's "top-new" section to include newer templates
   - **Knowledge Integration**: Linking ImgFlip templates with KnowYourMeme entries for contextual background

The final dataset represents templates with sufficient contextual information, high engagement metrics, and appropriate content for fact-checking applications.

## Use Cases

This dataset is valuable for researchers and developers in:

- Retrieval Augmented Generation (RAG) for meme creation
- Fact-checking and misinformation correction
- Multimodal understanding of visual-textual humor
- Cultural analysis of internet memes
- Computational humor generation
- AI alignment with human preferences for visual content

## Citation

If you use this dataset in your research, please cite our work:

```bibtex
@mastersthesis{pinto2025factchecking,
  title={Fact-Checking News with Internet Memes},
  author={Pinto, Sergio Miguel Goncalves},
  school={Instituto Superior Tecnico, Universidade de Lisboa},
  year={2025},
  month={June}
}
```

## Acknowledgements

We acknowledge the following resources that made this dataset possible:

- **Internet Memes Knowledge Graph (IMKG)**: Our templates and contextual information were derived from IMKG. [IMKG paper](https://2023.eswc-conferences.org/wp-content/uploads/2023/05/paper_Tommasini_2023_The.pdf)

- **FactFlip**: We acknowledge Grégoire Burel's [FactFlip repository](https://github.com/evhart/factflip), which provided valuable code for processing IMKG data.

## Links

- **GitHub Repository**: [sergiomgpinto/MemeFact](https://github.com/sergiomgpinto/MemeFact)

## Contact

For questions or inquiries about this dataset, please contact:
- Sérgio Pinto (sergio.g.pinto@tecnico.ulisboa.pt)
- [Personal Website](https://sergio-pinto.com/)