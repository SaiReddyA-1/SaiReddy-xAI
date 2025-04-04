'use client'

import type {modelID} from '@/ai/providers'
import {useChat} from '@ai-sdk/react'
import {useState} from 'react'
import {Textarea} from './textarea'
import {ProjectOverview} from './project-overview'
import {Messages} from './messages'
import {Header} from './header'

export default function Chat() {
  const [selectedModel, setSelectedModel] = useState<modelID>('grok-2-1212')
  const {
    messages,
    input,
    handleInputChange,
    handleSubmit,
    error,
    status,
    stop,
  } = useChat({
    maxSteps: 5,
    body: {
      selectedModel,
    },
  })

  const isLoading = status === 'streaming' || status === 'submitted'

  if (error) return <div>{error.message}</div>

  return (
    <div className='h-dvh flex flex-col justify-center w-full stretch'>
      <Header />
      {messages.length === 0 ? (
        <div className='max-w-xl mx-auto w-full'>
          <ProjectOverview />
        </div>
      ) : (
        <Messages messages={messages} isLoading={isLoading} status={status} />
      )}
      <form
        onSubmit={handleSubmit}
        className='pb-8 bg-white dark:bg-black w-full max-w-xl mx-auto px-4 sm:px-0'
      >
        <Textarea
          selectedModel={selectedModel}
          setSelectedModel={setSelectedModel}
          handleInputChange={handleInputChange}
          input={input}
          isLoading={isLoading}
          status={status}
          stop={stop}
        />
      </form>
    </div>
  )
}
