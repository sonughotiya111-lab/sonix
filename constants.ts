import { 
  QrCode, 
  Image, 
  Lock, 
  Ruler, 
  Palette, 
  FileType, 
  Zap,
  LayoutGrid,
  Scan,
  RefreshCcw,
  Binary,
  Barcode,
  Images,
  FileBox
} from 'lucide-react';
import { Tool } from './types';

// Reordered: High utility tools first
export const TOOLS: Tool[] = [
  {
    id: 'qr-reader',
    name: 'QR Scanner',
    description: 'Scan codes via camera.',
    path: '/tools/qr-reader',
    icon: Scan,
    category: 'utility'
  },
  {
    id: 'qr-generator',
    name: 'QR Maker',
    description: 'Create custom QR codes.',
    path: '/tools/qr-generator',
    icon: QrCode,
    category: 'utility'
  },
  {
    id: 'image-compressor',
    name: 'Compressor',
    description: 'Reduce image size.',
    path: '/tools/image-compressor',
    icon: Image,
    category: 'graphics'
  },
  {
    id: 'pdf-tools',
    name: 'PDF Merge',
    description: 'Combine PDF files.',
    path: '/tools/pdf-tools',
    icon: FileType,
    category: 'utility'
  },
  {
    id: 'image-to-pdf',
    name: 'Img to PDF',
    description: 'Photos to PDF doc.',
    path: '/tools/image-to-pdf',
    icon: Images,
    category: 'utility'
  },
  {
    id: 'password-gen',
    name: 'Passwords',
    description: 'Secure generator.',
    path: '/tools/password-gen',
    icon: Lock,
    category: 'security'
  },
  {
    id: 'unit-converter',
    name: 'Converter',
    description: 'Units & measures.',
    path: '/tools/unit-converter',
    icon: Ruler,
    category: 'utility'
  },
  {
    id: 'image-converter',
    name: 'Format Swap',
    description: 'JPG, PNG, WebP.',
    path: '/tools/image-converter',
    icon: RefreshCcw,
    category: 'graphics'
  },
  {
    id: 'color-picker',
    name: 'Colors',
    description: 'Picker & palettes.',
    path: '/tools/color-picker',
    icon: Palette,
    category: 'graphics'
  },
  {
    id: 'zip-tools',
    name: 'Zip Tool',
    description: 'Archive files.',
    path: '/tools/zip-tools',
    icon: FileBox,
    category: 'utility'
  },
  {
    id: 'barcode-gen',
    name: 'Barcodes',
    description: 'EAN & Code128.',
    path: '/tools/barcode-gen',
    icon: Barcode,
    category: 'utility'
  },
  {
    id: 'base64-converter',
    name: 'Base64',
    description: 'Encode/Decode.',
    path: '/tools/base64-converter',
    icon: Binary,
    category: 'developer'
  }
];

export const NAV_ITEMS = [
  { label: 'Home', path: '/', icon: LayoutGrid },
  { label: 'Quick', path: '/quick', icon: Zap },
];