"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Upload, Link, X } from "lucide-react"
import { StepContainer } from "@/components/ui/stepContainer"

interface CampaignInformationStepProps {
  onNext: () => void
  onBack: () => void
}

export function CampaignInformationStep({ onNext, onBack }: CampaignInformationStepProps) {
  const [activeTab, setActiveTab] = useState("new")
  const [productUrl, setProductUrl] = useState("")
  const [uploadedFiles, setUploadedFiles] = useState([
    { name: "document-attachment-1.pdf", uploading: false, progress: 100 },
    { name: "document-attachment-2.pdf", uploading: false, progress: 100 },
    { name: "product-catalog-2024.pdf", uploading: true, progress: 67 }
  ])

  const [existingProducts] = useState([
    {
      id: 1,
      name: "YETI Tundra 45 Cooler",
      category: "Outdoor Gear",
      price: "$299.99",
      image: "/product-placeholder.jpg"
    },
    {
      id: 2,
      name: "Nike Air Max 270",
      category: "Footwear",
      price: "$149.99", 
      image: "/product-placeholder.jpg"
    },
    {
      id: 3,
      name: "Apple AirPods Pro",
      category: "Electronics",
      price: "$249.99",
      image: "/product-placeholder.jpg"
    },
    {
      id: 4,
      name: "Stanley Adventure Quencher",
      category: "Drinkware",
      price: "$44.95",
      image: "/product-placeholder.jpg"
    }
  ])
  
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null)

  const removeFile = (index: number) => {
    setUploadedFiles(files => files.filter((_, i) => i !== index))
  }

  const [isDragging, setIsDragging] = useState(false)

  const simulateFileUpload = (fileName?: string) => {
    const newFile = { 
      name: fileName || `new-upload-${Date.now()}.pdf`, 
      uploading: true, 
      progress: 0 
    }
    setUploadedFiles(prev => [...prev, newFile])
    
    // Simulate progress
    const interval = setInterval(() => {
      setUploadedFiles(prev => 
        prev.map(file => 
          file.name === newFile.name && file.uploading
            ? { ...file, progress: Math.min(file.progress + 15, 100) }
            : file
        )
      )
    }, 200)

    // Complete upload after progress reaches 100
    setTimeout(() => {
      clearInterval(interval)
      setUploadedFiles(prev => 
        prev.map(file => 
          file.name === newFile.name 
            ? { ...file, uploading: false, progress: 100 }
            : file
        )
      )
    }, 1400)
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
    
    const files = Array.from(e.dataTransfer.files)
    files.forEach(file => {
      simulateFileUpload(file.name)
    })
  }

  return (
    <StepContainer>
      {/* Content Area with Header and Scrollable Content */}
      <div className="flex flex-col min-h-0">
        {/* Header */}
        <div className="flex-shrink-0 mb-8">
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">
            2. Add Campaign Information
          </h2>
          <p className="text-gray-600 text-lg">
            Upload a file or paste a link &mdash; we&apos;ll pull the product and campaign details for you.
          </p>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto min-h-0 space-y-6">
          <div>
            <div className="flex space-x-8 border-b border-gray-200">
              <button
                onClick={() => setActiveTab("new")}
                className={`pb-4 px-2 text-base font-medium transition-colors ${
                  activeTab === "new"
                    ? "text-gray-900 border-b-2 border-gray-900"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                New Product
              </button>
              <button
                onClick={() => setActiveTab("existing")}
                className={`pb-4 px-2 text-base font-medium transition-colors ${
                  activeTab === "existing"
                    ? "text-gray-900 border-b-2 border-gray-900"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                Existing Products
              </button>
            </div>
          </div>

          {activeTab === "existing" && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Select from your existing products
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {existingProducts.map((product) => (
                  <Card 
                    key={product.id}
                    className={`p-4 cursor-pointer transition-all border-2 ${
                      selectedProduct === product.id 
                        ? "border-blue-500 bg-blue-50" 
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                    onClick={() => setSelectedProduct(product.id)}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center">
                        <span className="text-gray-500 text-xs">IMG</span>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900">{product.name}</h4>
                        <p className="text-sm text-gray-500">{product.category}</p>
                        <p className="text-sm font-medium text-gray-900">{product.price}</p>
                      </div>
                      <div className="w-5 h-5 rounded-full border-2 border-gray-300 flex items-center justify-center">
                        {selectedProduct === product.id && (
                          <div className="w-2.5 h-2.5 rounded-full bg-blue-500"></div>
                        )}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {activeTab === "new" && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Product URL (optional)
            </label>
            <div className="flex items-center gap-3 p-4 border border-gray-300 rounded-lg bg-white">
              <Link className="w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Paste link"
                value={productUrl}
                onChange={(e) => setProductUrl(e.target.value)}
                className="flex-1 outline-none text-gray-700 placeholder-gray-400"
              />
            </div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              File Upload
            </label>
            
            <Card 
              className={`p-16 border-2 border-dashed transition-colors cursor-pointer ${
                isDragging 
                  ? "border-blue-500 bg-blue-50" 
                  : "border-gray-300 hover:border-gray-400"
              }`}
              onClick={() => simulateFileUpload()}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-6">
                  <Upload className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Drop in your product/campaign info
                </h3>
                <p className="text-gray-600 mb-1">
                  Click to upload
                </p>
                <p className="text-sm text-gray-500">
                  PDF/CSV
                </p>
              </div>
            </Card>

            {uploadedFiles.length > 0 && (
              <div className="mt-6 space-y-3">
                {uploadedFiles.map((file, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-red-100 rounded flex items-center justify-center">
                        <svg className="w-4 h-4 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-sm text-gray-700">{file.name}</span>
                      {file.uploading && (
                        <div className="flex-1 mx-4">
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-orange-500 h-2 rounded-full transition-all duration-300" 
                              style={{ width: `${file.progress}%` }}
                            />
                          </div>
                        </div>
                      )}
                    </div>
                    <button
                      onClick={() => removeFile(index)}
                      className="p-1 hover:bg-gray-200 rounded transition-colors"
                    >
                      <X className="w-4 h-4 text-gray-400" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>)}
        </div>
      </div>

      {/* Navigation Buttons at Bottom */}
      <div className="flex-shrink-0 flex justify-between py-2 border-t border-gray-100">
        <Button 
          variant="outline" 
          onClick={onBack}
          className="px-8 py-3 rounded-lg text-base font-medium"
        >
          Back
        </Button>
        <Button 
          onClick={onNext}
          className="px-8 py-3 bg-black text-white hover:bg-gray-800 rounded-lg text-base font-medium"
        >
          Scan
        </Button>
      </div>
    </StepContainer>
  )
}