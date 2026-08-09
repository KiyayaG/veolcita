/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { Car } from "../types";
import { Check, BarChart2, Loader2 } from "lucide-react";

interface GalleryViewProps {
  onBack: () => void;
  onAnalysisComplete: (car: Car) => void;
}

export interface GalleryPhoto {
  index: number;
  alt: string;
  src: string;
}

export const galleryPhotos: GalleryPhoto[] = [
  {
    index: 0,
    alt: "Lamborghini side on reflective surface",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuC4HHd300CLSagXb-Kn6KV-Rlgr0Y7yGn3stwg_RNm6E5woc2LtnNQx-whP8Bi4kjGvU1w_6P9N29UoVt0XhCnL6iEVnyjnup36nn4oid581ILEFKLjgG4QSdnkzqiocSDKyJDGR-ODMbAQ_TAcrTK8nWnHNAJN61QfmQ6rO5qmHTewV12SzDqQe4AvlEE-chK1wUCoyDpZLvswPG9XWFFOM0856X_N-20QexGWW20hrlCoYfEG3ar8fNG3j8SIcADa3l0Owo9JY-Y"
  },
  {
    index: 1,
    alt: "BMW white front perspective",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuC7GOKd9O3EWjQA2-TuHfnY8oQ0Pqlql_omuLe_w_2SiLRJGDnQ5YMHYXwocuZ0xCweFyXJjvKZCFLxxXtn_PuCP5FhUmGzbwrJu9k1Ei29lgxZxECIlHQTepmRWHciU2YIfvq7V5Af2OwRATFdwQyjMKJWhttgOGCZH95GAIdB_zMwQKneZWJz-S-OnVfm-CgTsrwjTmQxe1kjqAHWQ5mVtUIzQ6yT8-qhu0LsqV69pNkzr-PD_HPA4eStk6SzIp1zhj4tBhIZgos"
  },
  {
    index: 2,
    alt: "Porsche custom machined wheels",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBfMR5sahI-PNZveTpga_rCQh3rruaD3PdOnM5a7vHpbd2k8M-xKB5-t_RWJjftZMGIvVxBQMP4eo0bKkGBI_eO-C7Ck4VycYy4F4FhJJSHFeiWxEk-cXTSWNRsviTIHI_7ARZZdqD-qVsqB8nHW7F51PVuKms1INniACBD1iBLeLTmplPQeTXr5MPDu6auLdziGcrHQHF0sy7OQTX3-J_vrIDmQMYcGLzlDPwEzF5pPO6QcLTZOWCnw6eeGWsFVmmbwanJQGUPo54"
  },
  {
    index: 3,
    alt: "Sedan cruising on road sunset",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuC6bsB_7w__LvaHdTAm4G4kKvw_Xkod5J76PEom0ouJr6n3B1ajMFT7f0dQNDBY0RnVm1c4ZfVtOrjpnJGuanwYlAKNpFDIH1nIGLRemVzwyn5ZWRZgw7WV_Tipc6tr86gBeXfan57qYAFXNg65ioMAKrsoqKm1oZpNhA7Y98-HFHgUSiuudibt07hwVz8YH_rgztX1J1RFPpB4NscS_sjp561ZvXWZRqvr_CwlQP6fnD_s0_Q94GfYFAmVDZv3IKxoFF53-rdmYDo"
  },
  {
    index: 4,
    alt: "Red performance car rear highlights",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDF5FZOXo8s-S0GstinsVPiNPECZnaGhIcp1Z5CMhL0PTOpuv2Ybt6E2WWCtWQqBZyd0rgSJ7ls41svkKB7KbxvoarKVxMdZWd10RMHFcoBAbFlApQzfdZfXTPe8CExMXFJyLNOUtP3ALTZIiDukoN6yLGC8cSUspmWRHEmU7UHx5pLIaL3gBk0H7b-KhgikTkSv8EsrDN3PcMvY0KomcinhNKWGDR-V7bQneWnsjGJZTJRFUdwlh5XZB8QUen4iNvdWy26Rqxl-Y4"
  },
  {
    index: 5,
    alt: "Electric car dashboard interior",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDGs59oibAVmYMHfc7Qvpoz_4REirAssvXx-diD_u_1NMjzSMEvhU0xdwmBIycB3XxPNAStgKY7cYyqQ-c22Lo0QZ75H6vqLqXQYHzOUwpyKgzwd45BtL7dyXny5s6Tz2RrPBGWjbRSk9CQWkKv1zbNE_H4_iba58AlmBQ8Q90r4wv6dQj3t2DX9WOypfj-5rju06ACdElaNe7Y-Wuz5DAVsoL2f61Oihvy5XTgSxLBiEJDsquO4vYcIPo8KXuJHkRiExk8lrNJMJU"
  },
  {
    index: 6,
    alt: "Classic white Ferrari silhouette",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDcXeuuHYmPatmo2cU2UhkbM0FE6OetSSqoB6SU9xcOBqIj7ADgrN8rKbx8h6NTMwrjeB4zIvmigo1gbKpLN0TLIM5xlcu0PK2U7ClxQruoBIYT-kV6sC6NaulvxiOfUlpbP4CVLrVvszioyvt5fYkQfVSz7kcgETzEKhFmLZ_78t3-Q89WX3gh6GoNuzMGbgbI9nyZW957hg8TrByrxX-m_gGYJMtfMPEELl0NEBxl7Tq7DxGIxq1TgecOGyYXQHWhioN_yEegnd0"
  },
  {
    index: 7,
    alt: "Yellow Lamborghini Aventador inside concrete gallery",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAbueXZKC5kepjnuLaQwDG3hsaowuAs8TRFNypJj5j7fmN2PnY9YrUj_W66j_H4akCi0U-92PV9O3J8UMNgXMoVGsCrCCljPgI3ULegY00Ib8VdBrupUs81dtRWvV-CZCrWWo292b7n-Q91P0kuVahCC6kBRlcsR7VA-Uuvy6TCROZlCInyUc0Lghbi1C9EC9FyLJkYDagMThqbQRppR8XqpP7dvbf51QTC8D-wFj6_gVNUxzfPM1Bsy4c_nyJG_eT18ZDrzk0SY3o"
  },
  {
    index: 8,
    alt: "Silver car overhead view studio",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuD0puox_dQI6fat7e8IfHIm6MJ4jHwGPGrWtFVOGB-QblRzYRkNWYU7anm3lBsI5BXde4WNJU5z34_MEqET9GClUDvMS5zrZv2E_Nd8Qs495ol5ioA7OX2NGxKGd3KaFgLAmuJW9K-feG1oF5-wXJMeP-lQzgnLFG_mbrgh39V_ywZMAk68LdVss1btkgQF6ARjB9y3Mad6VhHwEAkQUVJ2jovyFkYJlRsjvCYNYKD3s1jQ2ZoPjiHFyQ2VUDgFBBhWynxdOFrMj4Q"
  },
  {
    index: 9,
    alt: "Car side mirror reflecting city",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAJFAAPJmImU2iB3OFt8SAg86oLLxw4MEdKZbmgBzqbJnWDhZ7MWUH8BqxylL34zNUtAmXRMk15JaJl79cXwbddJzDTc6RExCc7t4J84PsE_R1l3mpAeak7XvGzlFJasJZj3DirrsJUeBH6UPcfoQjgKKnw6c9jlPbqBK1abspJ_REJy8D2uelBsYzS5MeCV3YCzX7p9HRvG2PSqYeF1uO-s65OasEanuJudJOzbfr2HSWIJqITlAzeR9Cl1BCCbWr02o4CpC5eh40"
  },
  {
    index: 10,
    alt: "V8 performance engine detailed block",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAo2fUpRfkaNXmSmJdTAVVqjcgRDBA6SPTFwn9jydis-vCabxz5TvfOlP0w2YqZE0OqdyJ1AOrHaQHmxLLAdnKXyOzNSx4UimGzE00mQfnjvop3ZPEb_4H3tU36pns0qpobiYWB7-4TTxGdm10qMNbJ-WFUOtZ8IzrkDPKIhA_PKBbfSeMQLKq4hjpR_gzVOH6-MZmJ3--ULPgLH7TeraQO4Al0OuF_uZA6PrqfYjHEVfUFPlr2boIrUxY4YP52xQircNJcgTMp54w"
  },
  {
    index: 11,
    alt: "Electric hypercar charging station",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDF8rHDQbDGuTp-ugaKwrhmfIlw0ehrSUfrd1Z3Y3Coy_0IrhmtSlj5Xbq5ZIolA_XoMt15a53eBxX5nyq3PdJIdz9JEWWsdbq7oHT9RVvxHWt4972XqhlUTTtZ57BkOkBp_g1CZvnhCpPQk_lvATtUwwU_azbRQOEfdxTEpqSSuTEx8uQGAkH_v0mo_H42qrhg-LjVa2B8eJ_HqnKS0YD1b_ZPPhzNJuFdgkOLGS1YD4aUGfZ54lXqcg4Bff1t9LQYsK_rAFSDIBk"
  }
];

export default function GalleryView({ onBack: _onBack, onAnalysisComplete }: GalleryViewProps) {
  const [selectedPhoto, setSelectedPhoto] = useState<number>(2); // Default mock photo 2 checked as in original screenshot!
  const [isAnalyzing, setIsAnalyzing] = useState<boolean>(false);

  const handleSelect = (index: number) => {
    setSelectedPhoto(index);
  };

  const handleAnalyze = async () => {
    setIsAnalyzing(true);
    
    try {
      // Secure endpoint call using index triggers premium handcrafted datasets from bank instantly
      const response = await fetch("/api/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          imageIndex: selectedPhoto,
          image: galleryPhotos[selectedPhoto].src
        })
      });

      const parsed = await response.json();
      if (parsed.success && parsed.data) {
        // Slow down slightly to allow analysis loaders to build satisfying experience
        setTimeout(() => {
          onAnalysisComplete(parsed.data);
          setIsAnalyzing(false);
        }, 1500);
      } else {
        alert("Bilinmeyen bir hata oluştu.");
        setIsAnalyzing(false);
      }
    } catch (err) {
      console.error(err);
      alert("Hata: Görsel çözümlenirken sunucu bağlantısı başarısız oldu.");
      setIsAnalyzing(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f7f9fb] dark:bg-stone-950 pb-36 text-stone-900 dark:text-stone-100">
      
      {/* Welcome & Prompt description */}
      <section className="px-6 pt-10 pb-6">
        <h2 className="font-headline-lg-mobile text-3xl font-bold font-headline-md mb-2 text-stone-900 dark:text-stone-100">
          Galeriden Fotoğraf Seç
        </h2>
        <p className="text-stone-500 dark:text-stone-400 text-sm">
          Analiz etmek istediğiniz aracın en net göründüğü kareyi seçin.
        </p>
      </section>

      {/* Grid gallery - fits perfectly to width of SPA context */}
      <div className="grid grid-cols-3 gap-0.5 border-t border-b border-stone-100 dark:border-stone-900">
        {galleryPhotos.map((photo) => {
          const isSelected = selectedPhoto === photo.index;
          return (
            <button
              key={photo.index}
              onClick={() => handleSelect(photo.index)}
              className="relative aspect-square overflow-hidden cursor-pointer active:opacity-90 outline-none select-none group"
              style={{ padding: 0 }}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              
              {/* Highlight borders & check circle block */}
              {isSelected && (
                <div className="absolute inset-0 bg-black/20 ring-4 ring-black dark:ring-stone-400 ring-inset flex items-center justify-center transition-all">
                  <div className="w-10 h-10 rounded-full bg-black/35 backdrop-blur-md flex items-center justify-center text-white shadow-sm border border-white/20 animate-scale-in">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                </div>
              )}
            </button>
          );
        })}
      </div>

      {/* Floating Action HUD button with responsive coordinates */}
      <div className="fixed bottom-24 left-1/2 -translate-x-1/2 w-full max-w-md px-6 z-40">
        <button
          onClick={handleAnalyze}
          disabled={isAnalyzing}
          className="w-full bg-stone-950 hover:bg-stone-900 dark:bg-white dark:text-stone-950 text-white font-bold py-4 rounded-full shadow-lg hover:shadow-xl active:scale-[0.97] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-85"
        >
          {isAnalyzing ? (
            <Loader2 className="w-5 h-5 animate-spin" />
          ) : (
            <BarChart2 className="w-5 h-5 text-[#00D1FF]" />
          )}
          <span className="text-sm font-semibold tracking-wider uppercase font-sans">
            {isAnalyzing ? "ÇÖZÜMLENİYOR" : "ANALİZ ET"}
          </span>
        </button>
      </div>

      {/* Spinning loading screen during analyze phase */}
      {isAnalyzing && (
        <div className="fixed inset-0 bg-[#f7f9fb]/90 dark:bg-stone-950/90 backdrop-blur-md z-[100] flex flex-col items-center justify-center select-none pointer-events-auto">
          <div className="relative w-20 h-20 mb-6 flex items-center justify-center">
            <Loader2 className="w-12 h-12 text-[#00D1FF] animate-spin" />
            <div className="absolute inset-0 border-2 border-stone-200 dark:border-stone-850 rounded-full animate-pulse" />
          </div>
          <h3 className="font-headline-md text-xl font-bold dark:text-white">Görsel Analiz Ediliyor</h3>
          <p className="text-stone-500 text-xs mt-1">Yapay zeka aracınızı tanımaya çalışıyor...</p>
        </div>
      )}
    </div>
  );
}
