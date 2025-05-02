import React from 'react'
import Layout from './Layout'

function AutomovelOnlinePage() {
	return (
		<Layout
			title="Como autenticar no Automóvel Online em macOS"
			description="Como autenticar no Automóvel Online em macOS"
			canonicalUrl="https://rgllm.com/blog/como-autenticar-no-automovel-online-em-macos"
			lang="pt"
		>
			<h2 className="text-2xl font-bold mb-4">Como autenticar no Automóvel Online em macOS</h2>

			<p className="mb-4 italic">[Este post está em português porque se aplica apenas a Portugal]</p>

			<p className="mb-4">O <strong className="font-bold">Automóvel On-line</strong> permite pedir pela Internet vários atos de registo sobre veículos e respetivos reboques e receber em casa o Certificado de Matrícula / Documento Único Automóvel. Para este tutorial precisas de Cartão de Cidadão e um leitor.</p>

			<p className="mb-2">Ao aceder ao site, surge o erro:</p>
			<blockquote className="pl-4 border-l-4 border-gray-300 italic my-4">
				E063 - A área à qual tentou aceder é reservada e apenas acessível para utilizadores com um certificado digital válido.  
				Por favor, instale um certificado antes de tentar aceder a esta área do site.  
				Antes de voltar a tentar, por favor feche esta janela.
			</blockquote>

			<p className="mb-2">Os passos para contornar este erro são:</p>

			<ol className="list-decimal pl-6 mb-6 space-y-1">
				<li>Fazer download e instalar a aplicação <strong className="font-bold">Autenticação.gov</strong>.</li>
				<li>Fazer download do <strong className="font-bold">Firefox 90.0</strong> (não funciona nas versões mais recentes) e instalar.</li>
				<li>Ir às definições do Firefox e pesquisar por <strong className="font-bold">"cert"</strong>.</li>
				<li>Clicar em <strong className="font-bold">"Security Devices"</strong> e depois em <strong className="font-bold">"Load"</strong>.</li>
				<li>No <strong className="font-bold">Module Name</strong>, escrever <code className="bg-gray-100 px-1 py-0.5 rounded">autenticacao.gov</code> e apontar o ficheiro para <code className="bg-gray-100 px-1 py-0.5 rounded">/usr/local/lib/libpteidpkcs11.2.0.0.dylib</code>.</li>
				<li>Iniciar a aplicação <strong className="font-bold">Autenticação.gov</strong>, ligar o leitor e inserir o Cartão de Cidadão.</li>
				<li>Ao entrar no <a href="https://www.automovelonline.mj.pt" target="_blank" className="text-blue-600 hover:underline">automovelonline.mj.pt</a>, aceitar os certificados apresentados.</li>
				<li>Inserir o <strong className="font-bold">PIN de Autenticação</strong> do Cartão de Cidadão e usar o portal.</li>
			</ol>

			<p className="sr-only" aria-hidden="true">
				Post técnico sobre o uso do portal Automóvel Online com Cartão de Cidadão em macOS.
			</p>
		</Layout>
	)
}

export default AutomovelOnlinePage
