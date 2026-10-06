\# AI Based Ulcer Healing Tracking System Using Intraoral Imaging



An image-based oral ulcer healing tracking system designed to monitor the healing progress of intraoral ulcers by comparing previous and current ulcer images.



The system analyzes visual characteristics such as \*\*ulcer size, redness, border regularity, and texture\*\* and applies a rule-based AI approach to determine the healing status.







\## Project Overview



Oral ulcers are common conditions that may require continuous observation to understand whether they are healing properly.



Traditional monitoring mainly depends on manual observation and patient descriptions. This project provides a simple image-based approach to assist in tracking changes in an ulcer over time.



The system compares intraoral ulcer images captured during different visits and provides an estimated healing status based on measurable visual changes.



\### Objective



The main objective of this project is to develop an easy-to-use image-based system that can:



\- Analyze intraoral ulcer images

\- Estimate ulcer size and redness

\- Compare previous and current observations

\- Track healing progress

\- Display the analysis results clearly

\- Provide precautions and general remedies based on the observed status

\- Maintain basic patient visit information







\## Features



\- \*\*Intraoral Image Analysis\*\*

&#x20; - Supports analysis of ulcer images captured during different visits.



\- \*\*Ulcer Size Estimation\*\*

&#x20; - Estimates the affected region using image-based processing.



\- \*\*Redness Analysis\*\*

&#x20; - Measures color intensity associated with the ulcer region.



\- \*\*Border Analysis\*\*

&#x20; - Uses edge information to analyze border regularity.



\- \*\*Texture Analysis\*\*

&#x20; - Uses pixel-level variations to obtain additional image characteristics.



\- \*\*Rule-Based AI\*\*

&#x20; - Applies predefined rules to compare previous and current ulcer measurements.



\- \*\*Healing Status\*\*

&#x20; - Provides an estimated status such as:

&#x20;   - Improved

&#x20;   - No Change

&#x20;   - Worsened / Immediate Treatment Needed



\- \*\*Patient History\*\*

&#x20; - Stores basic previous-visit measurements for comparison.



\- \*\*Precautions and Remedies\*\*

&#x20; - Provides general precautions and suggested home-care information based on the observed status.



\- \*\*Visualization\*\*

&#x20; - Displays analysis information in an easy-to-understand interface.



\- \*\*Responsive Web Interface\*\*

&#x20; - Designed using HTML, CSS, and JavaScript.



\---



\## Rule-Based AI Algorithm



The system compares measurements obtained from the previous and current ulcer images.



\### Parameters Considered



| Parameter | Purpose |

|---|---|

| Ulcer Size | Measures the approximate affected region |

| Redness | Measures redness/color intensity |

| Border | Analyzes border regularity |

| Texture | Examines pixel-level variation |



\### Healing Decision



The system calculates the percentage change between previous and current measurements.



For example:



```text

Size Change =

((Previous Size - Current Size) / Previous Size) × 100



Redness Change =

((Previous Redness - Current Redness) / Previous Redness) × 100



\---



\## Application Screenshots



\### Main Dashboard



The main interface allows users to upload previous and current intraoral images and start the healing analysis.



!\[Main Dashboard](images/dashboard.png)



\### Healing Analysis Result



The analysis screen displays extracted parameters, healing status, precautions, home-care guidance, and the healing progress graph.



!\[Healing Analysis Result](images/healing-result.png)



\---

