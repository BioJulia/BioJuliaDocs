import{_ as e,c as a,o as l,az as r}from"./chunks/framework.D4wCFcVx.js";const b=JSON.parse('{"title":"BioRuby (Ruby)","description":"","frontmatter":{},"headers":[],"relativePath":"comparisons/bioruby.md","filePath":"comparisons/bioruby.md","lastUpdated":null}'),i={name:"comparisons/bioruby.md"};function n(o,t,s,d,g,f){return l(),a("div",null,t[0]||(t[0]=[r('<h1 id="bioruby" tabindex="-1">BioRuby (Ruby) <a class="header-anchor" href="#bioruby" aria-label="Permalink to &quot;BioRuby (Ruby) {#bioruby}&quot;">​</a></h1><ul><li><p><a href="http://bioruby.org/" target="_blank" rel="noreferrer">BioRuby</a> represents an ecosystem of related biology tools written in the Ruby programming language</p></li><li><p>Unlike with BioJulia, BioRuby tools are installed together as classes/modules into a single <code>bio</code> gem</p></li><li><p>Launched in 2000 with two major releases covering the Ruby1/2/3 transitions</p></li><li><p>Primarily composed of wrapper classes/modules for common bioinformatics, molecular biology applications</p></li></ul><p><strong>A few equivalent application tools between BioJulia and BioRuby:</strong></p><table tabindex="0"><thead><tr><th style="text-align:left;">Application</th><th style="text-align:left;">BioJulia packages</th><th style="text-align:left;">BioRuby classes/modules</th></tr></thead><tbody><tr><td style="text-align:left;">Sequence alignment</td><td style="text-align:left;"><a href="https://biojulia.dev/BioSequences.jl/stable/" target="_blank" rel="noreferrer">BioSequences</a>, <a href="https://biojulia.dev/BioAlignments.jl/stable/" target="_blank" rel="noreferrer">BioAlignments</a></td><td style="text-align:left;"><code>Bio::Sequence</code>, <code>Bio::Alignment</code></td></tr><tr><td style="text-align:left;">Input/Output</td><td style="text-align:left;"><a href="https://biojulia.dev/FASTX.jl/stable/" target="_blank" rel="noreferrer">FASTX</a>, <a href="https://biojulia.dev/XAM.jl/stable/" target="_blank" rel="noreferrer">XAM</a>, <a href="https://biojulia.dev/BigWig.jl/dev/" target="_blank" rel="noreferrer">BigWig</a>,...</td><td style="text-align:left;"><code>Bio::Fasta</code>, <code>Bio::Fastq</code>,...</td></tr></tbody></table><p><strong>A few package/ecosystem equivalents between Julia and Ruby:</strong></p><table tabindex="0"><thead><tr><th style="text-align:left;">Application</th><th style="text-align:left;">Julia</th><th style="text-align:left;">Ruby</th></tr></thead><tbody><tr><td style="text-align:left;">Data manipulation/analysis</td><td style="text-align:left;"><a href="https://dataframes.juliadata.org/stable/" target="_blank" rel="noreferrer">DataFrames</a>, <a href="https://csv.juliadata.org/stable/" target="_blank" rel="noreferrer">CSV</a>, <a href="https://www.queryverse.org/Query.jl/stable/" target="_blank" rel="noreferrer">Query</a></td><td style="text-align:left;"><code>daru</code>, <code>CSV</code></td></tr><tr><td style="text-align:left;">Plotting/visualization</td><td style="text-align:left;"><a href="https://docs.juliaplots.org/stable/" target="_blank" rel="noreferrer">Plots</a>, <a href="https://docs.makie.org/stable/" target="_blank" rel="noreferrer">Makie</a>, <a href="https://github.com/TidierOrg/TidierPlots.jl" target="_blank" rel="noreferrer">TidierPlots</a></td><td style="text-align:left;"><code>Chartkick</code>, <code>gruff</code></td></tr><tr><td style="text-align:left;">Statistical analysis</td><td style="text-align:left;"><a href="https://docs.julialang.org/en/v1/stdlib/Statistics/" target="_blank" rel="noreferrer">Statistics</a>, <a href="https://github.com/JuliaStats/HypothesisTests.jl" target="_blank" rel="noreferrer">HypothesisTests</a>, <a href="https://github.com/JuliaStats/GLM.jl" target="_blank" rel="noreferrer">GLM</a>, <a href="https://juliastats.org/Distributions.jl/latest/" target="_blank" rel="noreferrer">Distributions</a></td><td style="text-align:left;"><code>Statsample</code>, <code>distribution</code></td></tr><tr><td style="text-align:left;">Machine learning</td><td style="text-align:left;"><a href="https://fluxml.ai/Flux.jl/stable/" target="_blank" rel="noreferrer">Flux</a>, <a href="https://sciml.ai/" target="_blank" rel="noreferrer">SciML</a></td><td style="text-align:left;"><code>Rumale</code>, <code>TensorStream</code></td></tr><tr><td style="text-align:left;">Numerical mathematics</td><td style="text-align:left;"><a href="https://docs.julialang.org/en/v1/stdlib/LinearAlgebra/" target="_blank" rel="noreferrer">LinearAlgebra</a></td><td style="text-align:left;"><code>NMatrix</code>, <code>minimization</code>, <code>integration</code></td></tr><tr><td style="text-align:left;">Notebook/report generator</td><td style="text-align:left;"><a href="https://julialang.github.io/IJulia.jl/stable/" target="_blank" rel="noreferrer">IJulia</a>, <a href="https://plutojl.org/" target="_blank" rel="noreferrer">Pluto</a></td><td style="text-align:left;"><code>IRuby</code></td></tr><tr><td style="text-align:left;">Web applications</td><td style="text-align:left;"><a href="https://genieframework.com/" target="_blank" rel="noreferrer">Genie</a>, <a href="https://franklinjl.org/" target="_blank" rel="noreferrer">Franklin</a></td><td style="text-align:left;"><code>Hanami</code>, <code>Jekyll</code></td></tr></tbody></table><p><strong>A few notable differences between Julia and Ruby:</strong></p><table tabindex="0"><thead><tr><th style="text-align:left;">Julia</th><th style="text-align:left;">Ruby</th></tr></thead><tbody><tr><td style="text-align:left;">High-level, general-purpose compiled language</td><td style="text-align:left;">High-level, general-purpose interpreted language</td></tr><tr><td style="text-align:left;">Dynamically typed with multiple dispatch and optional type annotations</td><td style="text-align:left;">Dynamically typed with optional type annotations (Sorbet, RBS)</td></tr><tr><td style="text-align:left;">Built-in parallelism via threads, coroutines (Tasks)</td><td style="text-align:left;">Built-in parallelism via threads, fibers</td></tr><tr><td style="text-align:left;">Lisp-inspired metaprogramming (S-expressions, homoiconicity,...)</td><td style="text-align:left;">Macro-less metaprogramming capabilities (dynamic reflection, eval methods,...)</td></tr><tr><td style="text-align:left;">Single implementation available (JuliaLang)</td><td style="text-align:left;">Multiple implementations available (TruffleRuby, mruby,...)</td></tr></tbody></table><p><strong>To transition from Ruby to Julia:</strong></p><ul><li><p>Read the <a href="https://docs.julialang.org/" target="_blank" rel="noreferrer">Julia manual</a> for an in-depth look at its internals and features</p></li><li><p>See <a href="https://docs.julialang.org/en/v1/manual/running-external-programs/" target="_blank" rel="noreferrer">Running External Programs</a> in the manual for running Ruby scripts or other programs from Julia</p></li></ul>',10)]))}const p=e(i,[["render",n]]);export{b as __pageData,p as default};
