'use client'
import type {modelID} from '@/ai/providers'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select'

interface ModelPickerProps {
  selectedModel: modelID
  setSelectedModel: (model: modelID) => void
}

const MODELS: Record<modelID, string> = {
  'grok-2-1212':
    'Our flagship LLM that delivers unfiltered insights and raw intelligence',
}

export const ModelPicker = ({
  selectedModel,
  setSelectedModel,
}: ModelPickerProps) => {
  return (
    <div className='absolute bottom-2 left-2 flex flex-col gap-2'>
      <Select value={selectedModel} onValueChange={setSelectedModel}>
        <SelectTrigger className=''>
          <SelectValue placeholder='Select a model' />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {Object.entries(MODELS).map(([modelId]) => (
              <SelectItem key={modelId} value={modelId}>
                {modelId}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  )
}
