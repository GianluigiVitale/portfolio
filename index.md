# Gianluigi Vitale — Research portfolio

> Gianluigi Vitale researches ML systems and LLM safety, with publications at NeurIPS 2026 and MLSys 2026.

Source: [Official portfolio](https://gianluigivitale.github.io/portfolio/). This English text edition is generated from the visible portfolio content.

[Watch the MLSys 2026 talk](https://www.youtube.com/watch?v=KnsVj5DdIEo)

ML systems researcher · Systems engineer

## I study how LLM systems fail.

I build and measure the systems beneath model behavior: serving stacks, accelerator kernels, numerical paths, and the failures that appear when infrastructure changes.

[Explore the research](https://gianluigivitale.github.io/portfolio/#work) [Download CV](https://gianluigivitale.github.io/portfolio/assets/CV_Gianluigi_Vitale.pdf)

Current

Latest publication STF · NeurIPS 2026 poster

MLSys 2026 DriftBench · oral · sole author

Service MLSys 2027 Program Committee · NeurIPS Ethics · MLSys & SOSP Artifact Evaluation

MLSys 2026 Oral presentation Sole author ACM badges: Available · Functional · Reproduced

#### DriftBench: Measuring and Predicting Infrastructure Drift in LLM Serving Systems

DriftBench is a measurement and prediction framework comprising 236,985 prompt-response pairs across 105 configurations, 5 models, 4 GPU platforms, 3 frameworks, and 3 precisions. Its Portability Risk Index generalizes to unseen hardware (R² = 0.909) and precision (R² = 0.763), separating systematic hardware/precision drift from framework/model changes that require re-measurement. In production validation, it blocked a high-drift upgrade where 23.85% of safety prompts flipped classification.

[MLSys proceedings](https://proceedings.mlsys.org/paper_files/paper/2026/hash/ea0b5818ae9255ee1fb1e3b4442d2ffe-Abstract-Conference.html) [Artifacts & dataset](https://doi.org/10.5281/zenodo.19361066) [Recorded talk](https://www.youtube.com/watch?v=KnsVj5DdIEo)

Google TPU Research Cloud Active since May 2026

#### Research built with Google TPU Research Cloud

Model bring-up, new kernels, cross-accelerator validation, and bit-level hardware characterization across TPU v4, v5e, and v6e.

Working bring-up

##### DeepSeek V4-Flash on TPU

I completed a 32-chip v4-64 bring-up, validating every attention mode with both prefill and decode operational. Equivalent support has since landed in vLLM TPU inference through parallel development in the wider ecosystem.

Work in progress

##### DSA kernel for TPU

A working implementation that is bit-exact against the reference through 8K tokens and runs through 256K. It underpins the GLM-5.3 port, now running on TPU v4, and remains work in progress.

Validated

##### DriftBench on TPU

Extended the MLSys 2026 result to TPU v5e and v6e. The predictability result held across the new numerical path, with R² from 0.72 to 0.96.

Research in progress

##### Bit-level TPU MXU characterization

Built a CPU simulator that reproduces real Llama-3.1-8B matrix multiplications bit-for-bit on a native pass, enabling deterministic study of TPU numerical behavior.

Collaboration

##### Long-context genomics with CNR Italy

A collaboration studying whether long-context DNA models encode linkage disequilibrium, combining ML systems work with genomics expertise at Italy’s National Research Council.

NeurIPS 2026 · Main track Accepted poster · Sole author

#### Decomposing One Professional-Framing Pipeline: Which Components Shift LLM Safety Boundaries?

A pre-specified 2×2×2 factorial ablation of the STF professional-framing pipeline, evaluated in approximately 31,900 trials across nine LLMs. Persona adoption was the main driver of acceptance (OR = 6.5), terminology substitution the main driver of response depth (β = 0.91), and moral justification showed no detectable positive effect at the stated equivalence bounds.

[Paper on OpenReview](https://openreview.net/forum?id=1UvkQdlJOO)

02 / Academic service

### Reviewing systems work from evidence to impact.

2026–2027

#### Program Committee Member — MLSys 2027

Reviewing submissions for the MLSys 2027 technical program.

2026

#### NeurIPS Ethics Reviewer

Reviewed submissions for ethical concerns, societal harms, research-integrity risks, and compliance with conference guidelines.

2026

#### Artifact Evaluation Committee Member — SOSP 2026

Evaluated research artifacts in memory-efficient model serving and memory-safety analysis for GPU kernels in LLM inference systems. Assessed availability, functionality, reproducibility, and consistency with the associated papers' experimental claims.

2026

#### Artifact Evaluation Committee Member — MLSys 2026

Evaluated four accepted submissions spanning attention-kernel optimization, ML profiling infrastructure, GPU memory disaggregation, and distributed inference. Reproduced experimental results on rented 8×H100 clusters (RunPod) and AMD MI350X infrastructure (AMD University Program), assessing availability, functionality, and consistency with each paper's claims.

03 / Research agenda

### Following failures across the ML systems stack.

My work connects hardware arithmetic, kernels, serving infrastructure, and model behavior. I study where assumptions break and build evidence that makes complex AI systems easier to trust, reproduce, and deploy.

01

#### Systems and serving

Building and evaluating infrastructure for efficient, reliable model execution across accelerators and deployment settings.

02

#### Hardware and numerical behavior

Understanding how arithmetic, precision, and kernels shape correctness, performance, and reproducibility.

03

#### Reliability and safety

Measuring when system or context changes alter model outputs and surfacing risk before deployment.

04

#### ML systems across domains

Applying systems and long-context methods to domains including genomics and public-sector information access.

PyTorch vLLM SGLang TensorRT-LLM CUDA Cloud TPU Docker Hugging Face

04 / Profile

### Research grounded in deployed systems.

Experience 2024—present

#### Systems Engineer — Archivio di Stato di Pistoia (Italian State Archive), Italian Ministry of Culture

Designed and deployed a retrieval-augmented generation system over 10,000 internal administrative documents, delivering source-cited answers to staff queries. Built an AI-assisted public consultation interface giving staff and citizens natural-language access to the full inventory database.

Education Expected Mar. 2027

#### B.Sc. in Computer Engineering · Universitas Mercatorum

GPA 29.35/30 (3.87/4.0 WES-converted). Thesis: DSProfiler — static analysis and machine learning for automated detection of data-structure performance anti-patterns in Python.

[Google Scholar ↗](https://scholar.google.com/citations?hl=en&user=x4K6NWUAAAAJ) [ORCID ↗](https://orcid.org/0009-0007-6740-2695) [OpenReview ↗](https://openreview.net/profile?id=~Gianluigi_Vitale1) [GitHub ↗](https://github.com/GianluigiVitale) [LinkedIn ↗](https://www.linkedin.com/in/gianluigi-vitale615)

Research conversations & PhD opportunities

### Let’s talk about reliable ML systems.

[gianluigi.vitale12@gmail.com](mailto:gianluigi.vitale12@gmail.com)
