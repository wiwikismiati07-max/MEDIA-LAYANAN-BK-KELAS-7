import { RombelClass } from '../types';

export interface SiswaMaster {
  id: string;
  nama: string;
  nisn: string;
  rombel: RombelClass;
  noAbsen?: number;
}

export const masterSiswaList: Record<RombelClass, SiswaMaster[]> = {
  '7A': [],
  '7B': [],
  '7C': [],
  '7D': [],
  '7E': [],
  '7F': [],
  '7G': [],
  '7H': []
};
