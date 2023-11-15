import React, { useState } from "react";
import * as SC from "./styles";

export const MapSection = ({ isMob }) => {
  const [loading, setLoading] = useState(true);

  return (
    <SC.Wrapper id="map-section" $isMob={isMob}>
      <SC.Title $isMob={isMob}>საკადასტრო კოდით ძებნა</SC.Title>

      <SC.Subtitle $isMob={isMob}>
        ჩვენს რუკაზე ძებნა შესაძლებელია რეგიონის, ადგილმდებარეობისა და
        საკადასტრო კოდის მიხედვით.
      </SC.Subtitle>

      {loading && (
        <SC.SpinnerContainer>
          <SC.Spinner />
        </SC.SpinnerContainer>
      )}

      <SC.MapContainer
        src="https://maps.gov.ge/map/portal/"
        allowFullScreen=""
        loading="lazy"
        onLoad={() => setLoading(false)}
        $isMob={isMob}
      />
    </SC.Wrapper>
  );
};
