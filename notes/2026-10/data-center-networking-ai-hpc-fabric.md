---
id: note-data-center-networking-ai-hpc-fabric
title: "Data Center Networking: AI/HPC Fabric and Operations"
slug: data-center-networking-ai-hpc-fabric
date_captured: 2026-10-10
category: Cloud infrastructure
tags: ["data-centers", "networking", "ai-infrastructure", "hpc", "zero-trust", "ethernet", "telemetry", "storage"]
entities: ["EVPN-VXLAN", "BGP EVPN", "RoCEv2", "UEC", "OpenConfig", "gNMI", "NVMe", "DPU"]
source_type: drive-image
drive_id: 15i_FqycxJVYslfBEg4EHI-sCsvXzlx8e
drive_name: "Screenshot 2026-10-09 at 9.23.31 PM.png"
drive_link: https://drive.google.com/file/d/15i_FqycxJVYslfBEg4EHI-sCsvXzlx8e/view?usp=drivesdk
source_url: https://drive.google.com/file/d/15i_FqycxJVYslfBEg4EHI-sCsvXzlx8e/view?usp=drivesdk
image_path: public/img/notes/2026-10/data-center-networking-ai-hpc-fabric.png
phash: 80fa4a6a3db523ad
ocr: local_tesseract_fallback
ingested_at: 2026-10-10T12:12:00Z
---

# Data Center Networking: AI/HPC Fabric and Operations

![Data Center Networking: AI/HPC Fabric and Operations](/img/notes/2026-10/data-center-networking-ai-hpc-fabric.png)

## Summary

A data-center networking reference spans interconnect, zero-trust security, EVPN-VXLAN, AI/HPC fabrics, compute/storage, and automation telemetry.

## Key points

- Interconnect: internet/cloud to edge routers and data-center interconnect fabrics; 400ZR/800ZR are shown, with 1600ZR labelled emerging.
- Zero-trust: identity policy coordinates microsegmentation, distributed firewall, and IDS/IPS controls.
- EVPN-VXLAN fabric: a spine/leaf layout is paired with BGP EVPN and VXLAN/ECMP.
- AI/HPC fabric: GPU/XPU systems connect over 800G Ethernet, UEC/UET, and RoCEv2; 1.6TbE is marked as undergoing standardization.
- Compute/storage: NICs/DPUs, top-of-rack switches, and NVMe 2.4, NVMe/TCP 1.3, and NVMe/RDMA 1.3 appear in the diagram.
- Automation and telemetry: OpenConfig, gNMI 0.11, streaming telemetry, and out-of-band management feed monitoring and alerting.

**Credit shown on image:** Excellog.Biz, as credited on the image.

## OCR text

DATA CENTER NETWORKING
1. DATA CENTER INTERCONNECT
=a 400ZR / 800ZR
ja —
Rae ves | I — = 6
Internet / Cloud o- oi
Ege Routers eo0ze — Enegng | acre
2. ZERO-TRUST SECURITY =\ identity :
me le9™ eo &
et ud, 1, @
Se op: ol segmentat Py i
So" Eg HQ og
3. EVPN-VXLAN FABRIC
Spine fz fz oo (cP EVEN |
; EFSFSSS—xXv__ (vxtan ecu
“ ee ae Ge oe oo oe oe
HE G6 GB G8 G8 GB HB ©
4. Al / HPC FABRIC 5. COMPUTE & STORAGE
ma: =| ‘a fa< 7 | (som — __NVMe 24
GPU / XPU | SK} = ; 13
RoCEv2 a \
saith ese & (Bw)
eopeeot Ieee =n ===> (9) oon agen» — | epee ad

## Source

- **Drive file:** [Screenshot 2026-10-09 at 9.23.31 PM.png](https://drive.google.com/file/d/15i_FqycxJVYslfBEg4EHI-sCsvXzlx8e/view?usp=drivesdk)
- **Captured:** 2026-10-10
