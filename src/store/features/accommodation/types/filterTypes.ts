export interface Feature {
  id: number
  categoryId: number
  featureName: string
  createdAt: string
  updatedAt: string
}

export interface AccessibilityCategories {
  id: number
  categoryName: string
  createdAt: string
  updatedAt: string
  features: Feature[]
}