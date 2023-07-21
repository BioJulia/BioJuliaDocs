## BioPython (Python3)

- [BioPython](https://biopython.org/) represents an ecosystem of related biology tools written in the Python3 programming language
- Unlike in BioJulia, BioPython tools are installed together as modules into a single `biopython` package 
- Is more mature (begun over two decades ago with major releases covering the Python2/3 transition)
- Capabilities cover a number of molecular biology applications including sequence alignment, population genetics, and machine learning

| Application         | BioJulia Package                                                                                                                              | BioPython object/module    |
| :------------------ | :-------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------- |
| Sequence annotation | [BioSymbols](https://biojulia.dev/BioSymbols.jl/stable/), [BioSequences](https://biojulia.dev/BioSequences.jl/stable/)                        | `Seq`, `SeqRecord`         |
| Input/Output        | [FASTX](https://biojulia.dev/FASTX.jl/stable/), [XAM](https://biojulia.dev/XAM.jl/stable/), [BigWig](https://biojulia.dev/BigWig.jl/dev/),... | `Bio.SeqIO`, `Bio.AlignIO` |
| Sequence alignment  | [BioAlignments](https://biojulia.dev/BioAlignments.jl/stable/)                                                                                | `Bio.Align`                |
| Population genetics | [PopGen](https://biojulia.dev/PopGen.jl/)                                                                                                     | `Bio.PopGen`               |

**A few notable differences between Julia and Python3:**

| Julia                                                                  | Python3                                                                  |
| :--------------------------------------------------------------------- | :----------------------------------------------------------------------- |
| High-level, general-purpose compiled language                          | High-level, general purpose interpreted language                         |
| Expression-based (statements evaluate to a value)                      | Statement-based (assignment as a statement)                              |
| Dynamically typed with multiple dispatch and optional type annotations | Dynamically typed with optional type annotations                         |
| Built-in parallelism via threads, coroutines (Tasks)                   | Limited (GIL) parallelism via threads, async/await                       |
| Extensive metaprogramming (Lisp-like macros, homoiconicity,...)        | Less extensive metaprogramming (decorators, metaclasses,...)             |
| Included default package manager                                       | No default package manager (poetry, conda, other alternatives available) |
| Arrays are column-major (columns are contiguous in memory)             | (Numpy) arrays are row-major by default (rows are contiguous in memory)  |

**To transition from Python3 to Julia:**
- See [Noteworthy differences from Python](https://docs.julialang.org/en/v1/manual/noteworthy-differences/#Noteworthy-differences-from-Python) in the Julia manual for a more in-depth comparison
- Use [PythonCall.jl](https://github.com/cjdoris/PythonCall.jl.git)/[CondaPkg.jl](CondaPkg.jl) to seamlessly integrate Python3 code into your Julia project

## BioConductor (R)

- [BioConductor](https://www.bioconductor.org/) represents an ecosystem of related genomics tools _primarily_ written in the R programming language
- Tools written in other languages, such as C and Python, can also be included in BioConductor with R wrappers available 
- Is more mature (begun over two decades ago with major releases covering the Python2/3 transition)
- Capabilities cover a number of molecular biology applications including sequence alignment, population genetics, and machine learning

| Application                | BioJulia Package                                                                                                                               | BioConductor package                    |
| :------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------- | :-------------------------------------- |
| Core primitives/interfaces | [BioGenerics](https://biojulia.dev/BioGenerics.jl/stable/), [BioSymbols](https://biojulia.dev/BioSymbols.jl/stable/)                           | `BiocGenerics`, `Biobase`               |
| Sequence annotation        | [BioSymbols](https://biojulia.dev/BioSymbols.jl/stable/), [BioSequences](https://biojulia.dev/BioSequences.jl/stable/)                         | `Seq`, `SeqRecord`                      |
| Input/Output               | [FASTX](https://biojulia.dev/FASTX.jl/stable/), [XAM.](https://biojulia.dev/XAM.jl/stable/), [BigWig](https://biojulia.dev/BigWig.jl/dev/),... | `BiocIO`, `BioStrings`, `ShortRead`,... |
| Sequence alignment         | [BioAlignments](https://biojulia.dev/BioAlignments.jl/stable/)                                                                                 | `Bio.Align`                             |
| Population genetics        | [PopGen](https://biojulia.dev/PopGen.jl/)                                                                                                      | `Bio.PopGen`                            |

**A few package equivalents between Julia and R:**

| Application                | Julia                                                                                                                                                                               | R                                      |
| :------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------- |
| Data manipulation/analysis | [DataFrames](https://dataframes.juliadata.org/stable/), [Tidier](https://tidierorg.github.io/Tidier.jl/stable/)                                                                     | `tibble`, `dplyr`                      |
| Plotting/visualization     | [Gadfly](http://gadflyjl.org/stable/), [VegaLite](https://www.queryverse.org/VegaLite.jl/stable/), [Makie](https://docs.makie.org/stable/)                                          | `ggplot2`, `vegalite`, `plotly`        |
| Statistical analysis       | [Statistics](https://docs.julialang.org/en/v1/stdlib/Statistics/), [HypothesisTests](https://github.com/JuliaStats/HypothesisTests.jl), [GLM](https://github.com/JuliaStats/GLM.jl) | `stats`                                |
| Machine learning           | [Flux](https://fluxml.ai/Flux.jl/stable/), [SciML](https://sciml.ai/), [Zygote](https://fluxml.ai/Zygote.jl/stable/)                                                                | `mlr3`, `caret`, `tidymodels`, `Deriv` |
| Numerical mathematics      | [LinearAlgebra](https://docs.julialang.org/en/v1/stdlib/LinearAlgebra/), [IterativeSolvers](https://iterativesolvers.julialinearalgebra.org/dev/)                                   | `Matrix`, `pracma`, `deSolve`          |
| DateTime                   | [Dates](https://docs.julialang.org/en/v1/stdlib/Dates/), [TimeZones](https://github.com/JuliaTime/TimeZones.jl)                                                                     | `lubridate`                            |
| Notebook/report generator  | [Pluto](https://plutojl.org/), [Weave](https://weavejl.mpastell.com/stable/)                                                                                                        | `rmarkdown`, `knitr`                   |
| Web applications           | [Genie](https://genieframework.com/), [Franklin](https://franklinjl.org/)                                                                                                           | `shiny`                                |

**A few notable differences between Julia and R:**

| Julia                                                                  | R                                                                                |
| :--------------------------------------------------------------------- | :------------------------------------------------------------------------------- |
| High-level, general-purpose compiled language                          | High-level, interpreted language for statistical computing                       |
| Dynamically typed with multiple dispatch and optional type annotations | Dynamically typed without type annotations support                               |
| Built-in parallelism via threads, coroutines (Tasks)                   | Parallelism via external libraries (BLAS, parallel,...)                          |
| Extensive metaprogramming (Lisp-like macros, generated functions,...)  | Less extensive metaprogramming (function factories, expression manipulation,...) |
| Single implementation available (JuliaLang)                            | Multiple implementations available (pqR, Renjin,...)                             |


**To transition from R to Julia:**
- See [Noteworthy differences from R](https://docs.julialang.org/en/v1/manual/noteworthy-differences/#Noteworthy-differences-from-R) in the Julia manual for a more in-depth comparison
- Use [RCall.jl](https://github.com/JuliaInterop/RCall.jl.git) to seamlessly integrate R code into your Julia project

## BioPerl (Perl)