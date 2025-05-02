import Layout from './Layout'

function IndexPage() {
	return (
		<Layout
			title="Rogério Moreira"
			description="A few things about me."
			canonicalUrl="https://rgllm.com"
		>
			<h2 className="text-2xl font-bold mb-4">Rogério Moreira</h2>

			<p className="mb-4">
  				CV and website also available via a Model Context Protocol (MCP) at{' '}
				<code className="px-1 font-mono bg-gray-200 dark:bg-gray-700 rounded">/sse</code>{' '}
				or{' '}
				<code className="px-1 font-mono bg-gray-200 dark:bg-gray-700 rounded">/mcp</code>
			</p>

			<p className="mb-4">I build things, write code, and solve problems.</p>

			<p className="mb-2">Some things about me:</p>
			<ul className="list-disc pl-6 mb-6 space-y-1">
				<li>Grew up in Braga, Portugal</li>
				<li>Graduated with a Master's in Software Engineering from Universidade do Minho</li>
				<li>Worked across industries in companies like Blip, Trainline, and Pixelmatters</li>
				<li>Led frontend architecture, CI/CD, and performance at scale</li>
				<li>Mentored engineers, shaped engineering culture, and helped teams ship faster</li>
				<li>Currently helping to build and scale product engineering at Flecto.io</li>
			</ul>

			<p className="mb-2">Things I'm interested in:</p>
			<ul className="list-disc pl-6 mb-6 space-y-2">
				<li>Design systems</li>
				<li>Experimentation and A/B testing</li>
				<li>Product engineering</li>
				<li>AI, LLMs, Agents and MCPs</li>
			</ul>

			<p className="mb-2">Stuff I'm playing with</p>
			<ul className="list-disc pl-6 mb-6 space-y-2">
				<li><a href="https://ominho.pt">Jornal OMinho</a></li>
				<li><a href="https://github.com/rgllm/awesome-portugal-data">Awesome Portugal Data</a></li>
				<li><a href="https://github.com/rgllm/ipma-mcp">IPMA MCP</a></li>
			</ul>

			<p className="mb-2">Speaking, Interviews, and Publications</p>
			<ul className="list-disc pl-6 mb-6 space-y-2">
				<li><a href="https://visao.sapo.pt/exameinformatica/noticias-ei/software/2020-07-30-identificado-problema-aplicacao-stayaway-covid/">Identificado primeiro problema na aplicação Stayaway Covid. Código já está a ser escrutinado</a></li>
				<li><a href="https://www.facebook.com/events/429278770844403/">WordPress workshop for NEEGIUM</a></li>
				<li><a href="https://repositorium.sdum.uminho.pt/handle/1822/79995">Building an imaging-based research platform for the implementation of experiments with brain connectivity data</a></li>
			</ul>
		</Layout>
	)
}

export default IndexPage
