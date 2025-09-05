import * as React from "react";
import { Registry } from "@/app/doc/schema";

// This file is generated automatically. Do not edit it manually.

const ottoui: Registry = {
  "ai-branch": {
    "name": "ai-branch",
    "type": "registry:ui",
    "files": [
      {
        "path": "ottoui/AiBranch",
        "type": "registry:ui"
      }
    ],
    "dependencies": [
      "lucide-react",
      "motion"
    ],
    component: React.lazy(
      () => import('@/components/ottoui/ui/AiBranch'))
  },
  "ai-input": {
    "name": "ai-input",
    "type": "registry:ui",
    "files": [
      {
        "path": "ottoui/AiInput",
        "type": "registry:ui"
      }
    ],
    "registryDependencies": [
      "@ottoui/siri-orb"
    ],
    "dependencies": [
      "class-variance-authority",
      "motion"
    ],
    component: React.lazy(
      () => import('@/components/ottoui/ui/AiInput'))
  },
  "animated-input": {
    "name": "animated-input",
    "type": "registry:ui",
    "files": [
      {
        "path": "ottoui/AnimatedInput",
        "type": "registry:ui"
      }
    ],
    "dependencies": [
      "motion"
    ],
    component: React.lazy(
      () => import('@/components/ottoui/ui/AnimatedInput'))
  },
  "animated-progress-bar": {
    "name": "animated-progress-bar",
    "type": "registry:ui",
    "files": [
      {
        "path": "ottoui/AnimatedProgressBar",
        "type": "registry:ui"
      }
    ],
    "dependencies": [
      "motion"
    ],
    component: React.lazy(
      () => import('@/components/ottoui/ui/AnimatedProgressBar'))
  },
  "animated-tags": {
    "name": "animated-tags",
    "type": "registry:ui",
    "files": [
      {
        "path": "ottoui/AnimatedTags",
        "type": "registry:ui"
      }
    ],
    "dependencies": [
      "lucide-react",
      "motion"
    ],
    component: React.lazy(
      () => import('@/components/ottoui/ui/AnimatedTags'))
  },
  "app-download-stack": {
    "name": "app-download-stack",
    "type": "registry:ui",
    "files": [
      {
        "path": "ottoui/AppDownloadStack",
        "type": "registry:ui"
      }
    ],
    "dependencies": [
      "lucide-react",
      "motion"
    ],
    component: React.lazy(
      () => import('@/components/ottoui/ui/AppDownloadStack'))
  },
  "apple-invites": {
    "name": "apple-invites",
    "type": "registry:ui",
    "files": [
      {
        "path": "ottoui/AppleInvites",
        "type": "registry:ui"
      }
    ],
    "dependencies": [
      "lucide-react",
      "popmotion",
      "motion"
    ],
    component: React.lazy(
      () => import('@/components/ottoui/ui/AppleInvites'))
  },
  "basic-accordion": {
    "name": "basic-accordion",
    "type": "registry:ui",
    "files": [
      {
        "path": "ottoui/BasicAccordion",
        "type": "registry:ui"
      }
    ],
    "dependencies": [
      "lucide-react",
      "motion"
    ],
    component: React.lazy(
      () => import('@/components/ottoui/ui/BasicAccordion'))
  },
  "basic-dropdown": {
    "name": "basic-dropdown",
    "type": "registry:ui",
    "files": [
      {
        "path": "ottoui/BasicDropdown",
        "type": "registry:ui"
      }
    ],
    "dependencies": [
      "lucide-react",
      "motion"
    ],
    component: React.lazy(
      () => import('@/components/ottoui/ui/BasicDropdown'))
  },
  "basic-modal": {
    "name": "basic-modal",
    "type": "registry:ui",
    "files": [
      {
        "path": "ottoui/BasicModal",
        "type": "registry:ui"
      }
    ],
    "dependencies": [
      "lucide-react",
      "usehooks-ts",
      "motion"
    ],
    component: React.lazy(
      () => import('@/components/ottoui/ui/BasicModal'))
  },
  "basic-toast": {
    "name": "basic-toast",
    "type": "registry:ui",
    "files": [
      {
        "path": "ottoui/BasicToast",
        "type": "registry:ui"
      }
    ],
    "dependencies": [
      "lucide-react",
      "motion"
    ],
    component: React.lazy(
      () => import('@/components/ottoui/ui/BasicToast'))
  },
  "button-copy": {
    "name": "button-copy",
    "type": "registry:ui",
    "files": [
      {
        "path": "ottoui/ButtonCopy",
        "type": "registry:ui"
      }
    ],
    "dependencies": [
      "lucide-react",
      "motion"
    ],
    component: React.lazy(
      () => import('@/components/ottoui/ui/ButtonCopy'))
  },
  "clip-corners-button": {
    "name": "clip-corners-button",
    "type": "registry:ui",
    "files": [
      {
        "path": "ottoui/ClipCornersButton",
        "type": "registry:ui"
      }
    ],
    "dependencies": [
      "motion"
    ],
    component: React.lazy(
      () => import('@/components/ottoui/ui/ClipCornersButton'))
  },
  "cursor-follow": {
    "name": "cursor-follow",
    "type": "registry:ui",
    "files": [
      {
        "path": "ottoui/CursorFollow",
        "type": "registry:ui"
      }
    ],
    "dependencies": [
      "motion"
    ],
    component: React.lazy(
      () => import('@/components/ottoui/ui/CursorFollow'))
  },
  "dot-morph-button": {
    "name": "dot-morph-button",
    "type": "registry:ui",
    "files": [
      {
        "path": "ottoui/DotMorphButton",
        "type": "registry:ui"
      }
    ],
    "dependencies": [
      "motion"
    ],
    component: React.lazy(
      () => import('@/components/ottoui/ui/DotMorphButton'))
  },
  "dynamic-island": {
    "name": "dynamic-island",
    "type": "registry:ui",
    "files": [
      {
        "path": "ottoui/DynamicIsland",
        "type": "registry:ui"
      }
    ],
    "dependencies": [
      "lucide-react",
      "motion"
    ],
    component: React.lazy(
      () => import('@/components/ottoui/ui/DynamicIsland'))
  },
  "expandable-cards": {
    "name": "expandable-cards",
    "type": "registry:ui",
    "files": [
      {
        "path": "ottoui/ExpandableCards",
        "type": "registry:ui"
      }
    ],
    "dependencies": [
      "lucide-react",
      "motion"
    ],
    component: React.lazy(
      () => import('@/components/ottoui/ui/ExpandableCards'))
  },
  "fluid-morph": {
    "name": "fluid-morph",
    "type": "registry:ui",
    "files": [
      {
        "path": "ottoui/FluidMorph",
        "type": "registry:ui"
      }
    ],
    "dependencies": [
      "motion"
    ],
    component: React.lazy(
      () => import('@/components/ottoui/ui/FluidMorph'))
  },
  "image-metadata-preview": {
    "name": "image-metadata-preview",
    "type": "registry:ui",
    "files": [
      {
        "path": "ottoui/ImageMetadataPreview",
        "type": "registry:ui"
      }
    ],
    "dependencies": [
      "lucide-react",
      "motion"
    ],
    component: React.lazy(
      () => import('@/components/ottoui/ui/ImageMetadataPreview'))
  },
  "interactive-image-selector": {
    "name": "interactive-image-selector",
    "type": "registry:ui",
    "files": [
      {
        "path": "ottoui/InteractiveImageSelector",
        "type": "registry:ui"
      }
    ],
    "dependencies": [
      "lucide-react",
      "motion"
    ],
    component: React.lazy(
      () => import('@/components/ottoui/ui/InteractiveImageSelector'))
  },
  "job-listing-component": {
    "name": "job-listing-component",
    "type": "registry:ui",
    "files": [
      {
        "path": "ottoui/JobListingComponent",
        "type": "registry:ui"
      }
    ],
    "dependencies": [
      "usehooks-ts",
      "motion"
    ],
    component: React.lazy(
      () => import('@/components/ottoui/ui/JobListingComponent'))
  },
  "matrix-card": {
    "name": "matrix-card",
    "type": "registry:ui",
    "files": [
      {
        "path": "ottoui/MatrixCard",
        "type": "registry:ui"
      }
    ],
    "dependencies": [
      "motion"
    ],
    component: React.lazy(
      () => import('@/components/ottoui/ui/MatrixCard'))
  },
  "number-flow": {
    "name": "number-flow",
    "type": "registry:ui",
    "files": [
      {
        "path": "ottoui/NumberFlow",
        "type": "registry:ui"
      }
    ],
    "dependencies": [
      "lucide-react"
    ],
    component: React.lazy(
      () => import('@/components/ottoui/ui/NumberFlow'))
  },
  "phototab": {
    "name": "phototab",
    "type": "registry:ui",
    "files": [
      {
        "path": "ottoui/Phototab",
        "type": "registry:ui"
      }
    ],
    "dependencies": [
      "@radix-ui/react-tabs",
      "motion"
    ],
    component: React.lazy(
      () => import('@/components/ottoui/ui/Phototab'))
  },
  "power-off-slide": {
    "name": "power-off-slide",
    "type": "registry:ui",
    "files": [
      {
        "path": "ottoui/PowerOffSlide",
        "type": "registry:ui"
      }
    ],
    "dependencies": [
      "lucide-react",
      "motion"
    ],
    component: React.lazy(
      () => import('@/components/ottoui/ui/PowerOffSlide'))
  },
  "reveal-text": {
    "name": "reveal-text",
    "type": "registry:ui",
    "files": [
      {
        "path": "ottoui/RevealText",
        "type": "registry:ui"
      }
    ],
    "dependencies": [
      "motion"
    ],
    component: React.lazy(
      () => import('@/components/ottoui/ui/RevealText'))
  },
  "rich-popover": {
    "name": "rich-popover",
    "type": "registry:ui",
    "files": [
      {
        "path": "ottoui/RichPopover",
        "type": "registry:ui"
      }
    ],
    "dependencies": [
      "@radix-ui/react-popover",
      "lucide-react",
      "motion"
    ],
    component: React.lazy(
      () => import('@/components/ottoui/ui/RichPopover'))
  },
  "scramble-hover": {
    "name": "scramble-hover",
    "type": "registry:ui",
    "files": [
      {
        "path": "ottoui/ScrambleHover",
        "type": "registry:ui"
      }
    ],
    component: React.lazy(
      () => import('@/components/ottoui/ui/ScrambleHover'))
  },
  "scroll-reveal-paragraph": {
    "name": "scroll-reveal-paragraph",
    "type": "registry:ui",
    "files": [
      {
        "path": "ottoui/ScrollRevealParagraph",
        "type": "registry:ui"
      }
    ],
    "dependencies": [
      "motion"
    ],
    component: React.lazy(
      () => import('@/components/ottoui/ui/ScrollRevealParagraph'))
  },
  "scrollable-card-stack": {
    "name": "scrollable-card-stack",
    "type": "registry:ui",
    "files": [
      {
        "path": "ottoui/ScrollableCardStack",
        "type": "registry:ui"
      }
    ],
    "dependencies": [
      "motion"
    ],
    component: React.lazy(
      () => import('@/components/ottoui/ui/ScrollableCardStack'))
  },
  "siri-orb": {
    "name": "siri-orb",
    "type": "registry:ui",
    "files": [
      {
        "path": "ottoui/SiriOrb",
        "type": "registry:ui"
      }
    ],
    component: React.lazy(
      () => import('@/components/ottoui/ui/SiriOrb'))
  },
  "social-selector": {
    "name": "social-selector",
    "type": "registry:ui",
    "files": [
      {
        "path": "ottoui/SocialSelector",
        "type": "registry:ui"
      }
    ],
    "dependencies": [
      "motion"
    ],
    component: React.lazy(
      () => import('@/components/ottoui/ui/SocialSelector'))
  },
  "typewriter-text": {
    "name": "typewriter-text",
    "type": "registry:ui",
    "files": [
      {
        "path": "ottoui/TypewriterText",
        "type": "registry:ui"
      }
    ],
    component: React.lazy(
      () => import('@/components/ottoui/ui/TypewriterText'))
  },
  "user-account-avatar": {
    "name": "user-account-avatar",
    "type": "registry:ui",
    "files": [
      {
        "path": "ottoui/UserAccountAvatar",
        "type": "registry:ui"
      }
    ],
    "dependencies": [
      "@radix-ui/react-popover",
      "lucide-react",
      "motion"
    ],
    component: React.lazy(
      () => import('@/components/ottoui/ui/UserAccountAvatar'))
  },
  "wave-text": {
    "name": "wave-text",
    "type": "registry:ui",
    "files": [
      {
        "path": "ottoui/WaveText",
        "type": "registry:ui"
      }
    ],
    "dependencies": [
      "motion"
    ],
    component: React.lazy(
      () => import('@/components/ottoui/ui/WaveText'))
  }
};

const example: Registry = {
  "ai-branch-demo": {
    "name": "ai-branch-demo",
    "type": "registry:block",
    "files": [
      {
        "path": "examples/AiBranchDemo",
        "type": "registry:block"
      },
      {
        "path": "ottoui/ai-branch",
        "type": "registry:ui"
      }
    ],
    "registryDependencies": [
      "@ottoui/ai-branch"
    ],
    component: React.lazy(
      () => import('@/components/ottoui/examples/AiBranchDemo'))
  },
  "ai-input-demo": {
    "name": "ai-input-demo",
    "type": "registry:block",
    "files": [
      {
        "path": "examples/AiInputDemo",
        "type": "registry:block"
      },
      {
        "path": "ottoui/ai-input",
        "type": "registry:ui"
      }
    ],
    "registryDependencies": [
      "@ottoui/ai-input"
    ],
    component: React.lazy(
      () => import('@/components/ottoui/examples/AiInputDemo'))
  },
  "animated-input-demo": {
    "name": "animated-input-demo",
    "type": "registry:block",
    "files": [
      {
        "path": "examples/AnimatedInputDemo",
        "type": "registry:block"
      },
      {
        "path": "ottoui/animated-input",
        "type": "registry:ui"
      }
    ],
    "registryDependencies": [
      "@ottoui/animated-input"
    ],
    "dependencies": [
      "lucide-react"
    ],
    component: React.lazy(
      () => import('@/components/ottoui/examples/AnimatedInputDemo'))
  },
  "animated-progress-bar-demo": {
    "name": "animated-progress-bar-demo",
    "type": "registry:block",
    "files": [
      {
        "path": "examples/AnimatedProgressBarDemo",
        "type": "registry:block"
      },
      {
        "path": "ottoui/animated-progress-bar",
        "type": "registry:ui"
      }
    ],
    "registryDependencies": [
      "@ottoui/animated-progress-bar"
    ],
    component: React.lazy(
      () => import('@/components/ottoui/examples/AnimatedProgressBarDemo'))
  },
  "animated-tags-demo": {
    "name": "animated-tags-demo",
    "type": "registry:block",
    "files": [
      {
        "path": "examples/AnimatedTagsDemo",
        "type": "registry:block"
      },
      {
        "path": "ottoui/animated-tags",
        "type": "registry:ui"
      }
    ],
    "registryDependencies": [
      "@ottoui/animated-tags"
    ],
    component: React.lazy(
      () => import('@/components/ottoui/examples/AnimatedTagsDemo'))
  },
  "app-download-stack-demo": {
    "name": "app-download-stack-demo",
    "type": "registry:block",
    "files": [
      {
        "path": "examples/AppDownloadStackDemo",
        "type": "registry:block"
      },
      {
        "path": "ottoui/app-download-stack",
        "type": "registry:ui"
      }
    ],
    "registryDependencies": [
      "@ottoui/app-download-stack"
    ],
    component: React.lazy(
      () => import('@/components/ottoui/examples/AppDownloadStackDemo'))
  },
  "apple-invites-demo": {
    "name": "apple-invites-demo",
    "type": "registry:block",
    "files": [
      {
        "path": "examples/AppleInvitesDemo",
        "type": "registry:block"
      },
      {
        "path": "ottoui/apple-invites",
        "type": "registry:ui"
      }
    ],
    "registryDependencies": [
      "@ottoui/apple-invites"
    ],
    component: React.lazy(
      () => import('@/components/ottoui/examples/AppleInvitesDemo'))
  },
  "basic-accordion-demo": {
    "name": "basic-accordion-demo",
    "type": "registry:block",
    "files": [
      {
        "path": "examples/BasicAccordionDemo",
        "type": "registry:block"
      },
      {
        "path": "ottoui/basic-accordion",
        "type": "registry:ui"
      }
    ],
    "registryDependencies": [
      "@ottoui/basic-accordion"
    ],
    component: React.lazy(
      () => import('@/components/ottoui/examples/BasicAccordionDemo'))
  },
  "basic-dropdown-demo": {
    "name": "basic-dropdown-demo",
    "type": "registry:block",
    "files": [
      {
        "path": "examples/BasicDropdownDemo",
        "type": "registry:block"
      },
      {
        "path": "ottoui/basic-dropdown",
        "type": "registry:ui"
      }
    ],
    "registryDependencies": [
      "@ottoui/basic-dropdown"
    ],
    component: React.lazy(
      () => import('@/components/ottoui/examples/BasicDropdownDemo'))
  },
  "basic-modal-demo": {
    "name": "basic-modal-demo",
    "type": "registry:block",
    "files": [
      {
        "path": "examples/BasicModalDemo",
        "type": "registry:block"
      },
      {
        "path": "ottoui/basic-modal",
        "type": "registry:ui"
      }
    ],
    "registryDependencies": [
      "@ottoui/basic-modal"
    ],
    component: React.lazy(
      () => import('@/components/ottoui/examples/BasicModalDemo'))
  },
  "basic-toast-demo": {
    "name": "basic-toast-demo",
    "type": "registry:block",
    "files": [
      {
        "path": "examples/BasicToastDemo",
        "type": "registry:block"
      },
      {
        "path": "ottoui/basic-toast",
        "type": "registry:ui"
      }
    ],
    "registryDependencies": [
      "@ottoui/basic-toast"
    ],
    "dependencies": [
      "motion"
    ],
    component: React.lazy(
      () => import('@/components/ottoui/examples/BasicToastDemo'))
  },
  "button-copy-demo": {
    "name": "button-copy-demo",
    "type": "registry:block",
    "files": [
      {
        "path": "examples/ButtonCopyDemo",
        "type": "registry:block"
      },
      {
        "path": "ottoui/button-copy",
        "type": "registry:ui"
      }
    ],
    "registryDependencies": [
      "@ottoui/button-copy"
    ],
    component: React.lazy(
      () => import('@/components/ottoui/examples/ButtonCopyDemo'))
  },
  "clip-corners-button-demo": {
    "name": "clip-corners-button-demo",
    "type": "registry:block",
    "files": [
      {
        "path": "examples/ClipCornersButtonDemo",
        "type": "registry:block"
      },
      {
        "path": "ottoui/clip-corners-button",
        "type": "registry:ui"
      }
    ],
    "registryDependencies": [
      "@ottoui/clip-corners-button"
    ],
    component: React.lazy(
      () => import('@/components/ottoui/examples/ClipCornersButtonDemo'))
  },
  "cursor-follow-demo": {
    "name": "cursor-follow-demo",
    "type": "registry:block",
    "files": [
      {
        "path": "examples/CursorFollowDemo",
        "type": "registry:block"
      }
    ],
    component: React.lazy(
      () => import('@/components/ottoui/examples/CursorFollowDemo'))
  },
  "dot-morph-button-demo": {
    "name": "dot-morph-button-demo",
    "type": "registry:block",
    "files": [
      {
        "path": "examples/DotMorphButtonDemo",
        "type": "registry:block"
      },
      {
        "path": "ottoui/dot-morph-button",
        "type": "registry:ui"
      }
    ],
    "registryDependencies": [
      "@ottoui/dot-morph-button"
    ],
    component: React.lazy(
      () => import('@/components/ottoui/examples/DotMorphButtonDemo'))
  },
  "dynamic-island-demo": {
    "name": "dynamic-island-demo",
    "type": "registry:block",
    "files": [
      {
        "path": "examples/DynamicIslandDemo",
        "type": "registry:block"
      },
      {
        "path": "ottoui/dynamic-island",
        "type": "registry:ui"
      }
    ],
    "registryDependencies": [
      "@ottoui/dynamic-island"
    ],
    component: React.lazy(
      () => import('@/components/ottoui/examples/DynamicIslandDemo'))
  },
  "expandable-cards-demo": {
    "name": "expandable-cards-demo",
    "type": "registry:block",
    "files": [
      {
        "path": "examples/ExpandableCardsDemo",
        "type": "registry:block"
      },
      {
        "path": "ottoui/expandable-cards",
        "type": "registry:ui"
      }
    ],
    "registryDependencies": [
      "@ottoui/expandable-cards"
    ],
    component: React.lazy(
      () => import('@/components/ottoui/examples/ExpandableCardsDemo'))
  },
  "fluid-morph-demo": {
    "name": "fluid-morph-demo",
    "type": "registry:block",
    "files": [
      {
        "path": "examples/FluidMorphDemo",
        "type": "registry:block"
      },
      {
        "path": "ottoui/fluid-morph",
        "type": "registry:ui"
      }
    ],
    "registryDependencies": [
      "@ottoui/fluid-morph"
    ],
    component: React.lazy(
      () => import('@/components/ottoui/examples/FluidMorphDemo'))
  },
  "image-metadata-preview-demo": {
    "name": "image-metadata-preview-demo",
    "type": "registry:block",
    "files": [
      {
        "path": "examples/ImageMetadataPreviewDemo",
        "type": "registry:block"
      },
      {
        "path": "ottoui/image-metadata-preview",
        "type": "registry:ui"
      }
    ],
    "registryDependencies": [
      "@ottoui/image-metadata-preview"
    ],
    component: React.lazy(
      () => import('@/components/ottoui/examples/ImageMetadataPreviewDemo'))
  },
  "interactive-image-selector-demo": {
    "name": "interactive-image-selector-demo",
    "type": "registry:block",
    "files": [
      {
        "path": "examples/InteractiveImageSelectorDemo",
        "type": "registry:block"
      },
      {
        "path": "ottoui/interactive-image-selector",
        "type": "registry:ui"
      }
    ],
    "registryDependencies": [
      "@ottoui/interactive-image-selector"
    ],
    component: React.lazy(
      () => import('@/components/ottoui/examples/InteractiveImageSelectorDemo'))
  },
  "job-listing-component-demo": {
    "name": "job-listing-component-demo",
    "type": "registry:block",
    "files": [
      {
        "path": "examples/JobListingComponentDemo",
        "type": "registry:block"
      },
      {
        "path": "ottoui/job-listing-component",
        "type": "registry:ui"
      }
    ],
    "registryDependencies": [
      "@ottoui/job-listing-component"
    ],
    component: React.lazy(
      () => import('@/components/ottoui/examples/JobListingComponentDemo'))
  },
  "matrix-card-demo": {
    "name": "matrix-card-demo",
    "type": "registry:block",
    "files": [
      {
        "path": "examples/MatrixCardDemo",
        "type": "registry:block"
      },
      {
        "path": "ottoui/matrix-card",
        "type": "registry:ui"
      }
    ],
    "registryDependencies": [
      "@ottoui/matrix-card"
    ],
    component: React.lazy(
      () => import('@/components/ottoui/examples/MatrixCardDemo'))
  },
  "number-flow-demo": {
    "name": "number-flow-demo",
    "type": "registry:block",
    "files": [
      {
        "path": "examples/NumberFlowDemo",
        "type": "registry:block"
      },
      {
        "path": "ottoui/number-flow",
        "type": "registry:ui"
      }
    ],
    "registryDependencies": [
      "@ottoui/number-flow"
    ],
    component: React.lazy(
      () => import('@/components/ottoui/examples/NumberFlowDemo'))
  },
  "phototab-demo": {
    "name": "phototab-demo",
    "type": "registry:block",
    "files": [
      {
        "path": "examples/PhototabDemo",
        "type": "registry:block"
      },
      {
        "path": "ottoui/phototab",
        "type": "registry:ui"
      }
    ],
    "registryDependencies": [
      "@ottoui/phototab"
    ],
    "dependencies": [
      "lucide-react"
    ],
    component: React.lazy(
      () => import('@/components/ottoui/examples/PhototabDemo'))
  },
  "power-off-slide-demo": {
    "name": "power-off-slide-demo",
    "type": "registry:block",
    "files": [
      {
        "path": "examples/PowerOffSlideDemo",
        "type": "registry:block"
      },
      {
        "path": "ottoui/power-off-slide",
        "type": "registry:ui"
      }
    ],
    "registryDependencies": [
      "@ottoui/power-off-slide"
    ],
    component: React.lazy(
      () => import('@/components/ottoui/examples/PowerOffSlideDemo'))
  },
  "reveal-text-demo": {
    "name": "reveal-text-demo",
    "type": "registry:block",
    "files": [
      {
        "path": "examples/RevealTextDemo",
        "type": "registry:block"
      },
      {
        "path": "ottoui/reveal-text",
        "type": "registry:ui"
      }
    ],
    "registryDependencies": [
      "@ottoui/reveal-text"
    ],
    component: React.lazy(
      () => import('@/components/ottoui/examples/RevealTextDemo'))
  },
  "rich-popover-demo": {
    "name": "rich-popover-demo",
    "type": "registry:block",
    "files": [
      {
        "path": "examples/RichPopoverDemo",
        "type": "registry:block"
      },
      {
        "path": "ottoui/rich-popover",
        "type": "registry:ui"
      }
    ],
    "registryDependencies": [
      "@ottoui/rich-popover"
    ],
    component: React.lazy(
      () => import('@/components/ottoui/examples/RichPopoverDemo'))
  },
  "scramble-hover-demo": {
    "name": "scramble-hover-demo",
    "type": "registry:block",
    "files": [
      {
        "path": "examples/ScrambleHoverDemo",
        "type": "registry:block"
      },
      {
        "path": "ottoui/scramble-hover",
        "type": "registry:ui"
      }
    ],
    "registryDependencies": [
      "@ottoui/scramble-hover"
    ],
    component: React.lazy(
      () => import('@/components/ottoui/examples/ScrambleHoverDemo'))
  },
  "scroll-reveal-paragraph-demo": {
    "name": "scroll-reveal-paragraph-demo",
    "type": "registry:block",
    "files": [
      {
        "path": "examples/ScrollRevealParagraphDemo",
        "type": "registry:block"
      }
    ],
    component: React.lazy(
      () => import('@/components/ottoui/examples/ScrollRevealParagraphDemo'))
  },
  "scrollable-card-stack-demo": {
    "name": "scrollable-card-stack-demo",
    "type": "registry:block",
    "files": [
      {
        "path": "examples/ScrollableCardStackDemo",
        "type": "registry:block"
      }
    ],
    component: React.lazy(
      () => import('@/components/ottoui/examples/ScrollableCardStackDemo'))
  },
  "siri-orb-demo": {
    "name": "siri-orb-demo",
    "type": "registry:block",
    "files": [
      {
        "path": "examples/SiriOrbDemo",
        "type": "registry:block"
      }
    ],
    "dependencies": [
      "lucide-react"
    ],
    component: React.lazy(
      () => import('@/components/ottoui/examples/SiriOrbDemo'))
  },
  "social-selector-demo": {
    "name": "social-selector-demo",
    "type": "registry:block",
    "files": [
      {
        "path": "examples/SocialSelectorDemo",
        "type": "registry:block"
      },
      {
        "path": "ottoui/social-selector",
        "type": "registry:ui"
      }
    ],
    "registryDependencies": [
      "@ottoui/social-selector"
    ],
    component: React.lazy(
      () => import('@/components/ottoui/examples/SocialSelectorDemo'))
  },
  "typewriter-text-demo": {
    "name": "typewriter-text-demo",
    "type": "registry:block",
    "files": [
      {
        "path": "examples/TypewriterTextDemo",
        "type": "registry:block"
      },
      {
        "path": "ottoui/typewriter-text",
        "type": "registry:ui"
      }
    ],
    "registryDependencies": [
      "@ottoui/typewriter-text"
    ],
    component: React.lazy(
      () => import('@/components/ottoui/examples/TypewriterTextDemo'))
  },
  "user-account-avatar-demo": {
    "name": "user-account-avatar-demo",
    "type": "registry:block",
    "files": [
      {
        "path": "examples/UserAccountAvatarDemo",
        "type": "registry:block"
      },
      {
        "path": "ottoui/user-account-avatar",
        "type": "registry:ui"
      }
    ],
    "registryDependencies": [
      "@ottoui/user-account-avatar"
    ],
    component: React.lazy(
      () => import('@/components/ottoui/examples/UserAccountAvatarDemo'))
  },
  "wave-text-demo": {
    "name": "wave-text-demo",
    "type": "registry:block",
    "files": [
      {
        "path": "examples/WaveTextDemo",
        "type": "registry:block"
      },
      {
        "path": "ottoui/wave-text",
        "type": "registry:ui"
      }
    ],
    "registryDependencies": [
      "@ottoui/wave-text"
    ],
    component: React.lazy(
      () => import('@/components/ottoui/examples/WaveTextDemo'))
  }
};

const hooks: Registry = {
  "use-click-outside": {
    "name": "use-click-outside",
    "type": "registry:hook",
    "files": [
      {
        "path": "hooks/use-click-outside",
        "type": "registry:hook"
      }
    ]
  },
  "use-mobile": {
    "name": "use-mobile",
    "type": "registry:hook",
    "files": [
      {
        "path": "hooks/use-mobile",
        "type": "registry:hook"
      }
    ]
  },
  "use-cursor-position": {
    "name": "use-cursor-position",
    "type": "registry:hook",
    "files": [
      {
        "path": "hooks/useCursorPosition",
        "type": "registry:hook"
      }
    ]
  }
};

const utils: Registry = {
  "cn": {
    "name": "cn",
    "type": "registry:lib",
    "files": [
      {
        "path": "utils/cn",
        "type": "registry:lib"
      }
    ],
    "dependencies": [
      "clsx",
      "tailwind-merge"
    ]
  }
};

export const registry = {
  ...ottoui,
  ...example,
  ...hooks,
  ...utils,
};
