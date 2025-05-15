
import React from 'react';
import { Box, ButtonGroup, Button, Typography, TextField, Input, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import PublicIcon from '@mui/icons-material/Public';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import CropSquareOutlinedIcon from '@mui/icons-material/CropSquareOutlined';
import TranslateRoundedIcon from '@mui/icons-material/TranslateRounded';
import InsertLinkRoundedIcon from '@mui/icons-material/InsertLinkRounded';
import CopyAllIcon from '@mui/icons-material/CopyAll';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';


const RightPanel = ({ title }) => {
  return (
    <Box sx={{ width: '70%' ,boxShadow: 2, height: '100vh', display: 'flex', flexDirection: 'column'}}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between', // Ensure space between items
          alignItems: 'center',
          pl: 1,
          borderBottom: '1px solid #e0e0e0'
        }}
      >
        {/* Left Buttons Group */}
        <ButtonGroup
          variant="h6"
          sx={{
            '& .MuiButton-root': {
              color: '#000',
              paddingY: 0.5,
              minHeight: '32px',
              fontSize: '0.875rem',
              textTransform: 'none',
              border: 'none',
              position: 'relative',
            },
            '& .MuiButton-root:not(:last-of-type)::after': {
              content: '""',
              position: 'absolute',
              right: 0,
              top: '25%',
              height: '50%',
              width: '1px',
              backgroundColor: 'rgba(0, 0, 0, 0.8)',
            },
          }}
        >
          <Button>Disney+</Button>
          <Button>Engagement</Button>
          <Button>Damages</Button>
          <Button>FR</Button>
          <Button>Email</Button>
          <Button>October 21</Button>
        </ButtonGroup>

        {/* Right-aligned Button */}
        <Button
          variant="text"
          sx={{
            color: '#000',
            textTransform: 'none',
            fontSize: '0.875rem',
            minHeight: '32px',
            ml: 'auto', 
            borderLeft: '1px solid #e0e0e0',
            pl: 2
          }}
          startIcon={<PublicIcon fontSize="small" />}
          endIcon={<ExpandLessIcon sx={{ fontSize: '26px' }} />}
        >
          Region/Language
        </Button>
      </Box>

      <ButtonGroup
        variant="text"
        sx={{
          '& .MuiButton-root': {
            color: '#000',
            paddingY: 0.5,
            minHeight: '32px',
            fontSize: '0.875rem',
            textTransform: 'none',
            border: 'none',
            position: 'relative',
            pl: 3
          }
        }}
      >
        <Button>EN-GB</Button>
        <Button>ES-419</Button>
        <Button>PT-BR</Button>
      </ButtonGroup>

      <Box display="flex" gap={1} sx={{ pl: 3, background: '#F0F0F0', py: 1 }}>
        <Button variant="outlined" sx={{ color: '#000', textTransform: 'none', border: '1px solid #A9A9A9', boxShadow: 2, backgroundColor: '#fff' }} size="small">
          MX_ES-419
        </Button>
        <Button variant="outlined" sx={{ color: '#000', textTransform: 'none', border: '1px solid #A9A9A9', boxShadow: 2, backgroundColor: '#fff' }} size="small">
          AR_ES-419
        </Button>
        <Button variant="outlined" sx={{ color: '#000', textTransform: 'none', border: '1px solid #A9A9A9', boxShadow: 2, backgroundColor: '#fff' }} size="small">
          AR_ES-419
        </Button>
        <Button variant="outlined" sx={{ color: '#000', textTransform: 'none', border: '1px solid #A9A9A9', boxShadow: 2, backgroundColor: '#fff' }} size="small">
          AR_ES-419
        </Button>
        <Button variant="outlined" sx={{ color: '#000', textTransform: 'none', border: '1px solid #A9A9A9', boxShadow: 2, backgroundColor: '#fff' }} size="small">
          AR_ES-419
        </Button>
        <Button variant="outlined" sx={{ color: '#000', textTransform: 'none', border: '1px solid #A9A9A9', boxShadow: 2, backgroundColor: '#fff' }} size="small">
          AR_ES-419
        </Button>
      </Box>

      <Box sx={{ display: 'flex', borderBottom: '1px solid #e0e0e0' }}>
        <Box sx={{ display: 'flex', gap: 1, px: 2, py: 1, borderRight: '1px solid #e0e0e0' }}>
          <Button variant="text" startIcon={<CropSquareOutlinedIcon />} size="small" sx={{ color: '#000', textTransform: 'none', border: 'none', backgroundColor: '#fff' }}>
            Source Language
          </Button>
          <Button variant="contained" startIcon={<TranslateRoundedIcon />} size="small" sx={{ color: '#fff', textTransform: 'none', border: 'none', backgroundColor: '#006400' }}>
            Import Translation
          </Button>
          <Button variant="outlined" startIcon={<TranslateRoundedIcon />} size="small" sx={{ color: '#1976D2', textTransform: 'none', border: '1px solid #1976D2' }}>
            Request Translation
          </Button>
        </Box>
        <Box sx={{ display: 'flex', gap: 1, px: 2, py: 1, borderRight: '1px solid #e0e0e0' }}>
          <Button variant="outlined" startIcon={<CopyAllIcon />} size="small" sx={{ color: '#1976D2', textTransform: 'none', border: '1px solid #1976D2' }}>
            Copy to Other Locale
          </Button>
          <Button variant="outlined" startIcon={<CopyAllIcon />} size="small" sx={{ color: '#1976D2', textTransform: 'none', border: '1px solid #1976D2' }}>
            Copy Modules
          </Button>
        </Box>
        <Button variant="outlined" size="small" sx={{ minWidth: '30px', mt: 1, height: '30px', minHeight: '25px', lineHeight: 1, ml: 2 }}>
          <InsertLinkRoundedIcon fontSize="small" />
        </Button>
      </Box>

      <Box sx={{ display: 'flex', gap: 2, pl: 3, borderBottom: '1px solid #e0e0e0' }}>
        <Box sx={{ borderRight: '1px solid #e0e0e0', pr: 2, py: 1 }}>
          <Button variant="outlined" endIcon={<KeyboardArrowDownIcon />} size="small" sx={{ color: '#1976D2', textTransform: 'none', border: '1px solid #1976D2' }}>
            A/B/N Testing
          </Button>
        </Box>
        <Box sx={{ py: 1 }}>
          <Button variant="outlined" startIcon={<WorkOutlineIcon />} size="small" sx={{ color: '#1976D2', textTransform: 'none', border: '1px solid #1976D2' }}>
            Asset Manager
          </Button>
        </Box>
      </Box>

      {/* Title */}
      <Typography variant="body1" sx={{ my: 2, pl: 3, pb: 2, fontWeight: 'bold', borderBottom: '1px solid #e0e0e0' }}>
        {title}
      </Typography>

      <Box sx={{ px: 3,  flex: 1, minHeight: 0, display: 'flex', flexDirection: 'column',
      overflowY: 'auto', gap:1}}>
        <Box sx={{ p: 2, background: '#D6F0FF', borderRadius: 2 }}>
          <Typography>Subject</Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2 }}>
            <Box sx={{ flex: 1, width: '100%' }}>
              <TextField
                multiline
                fullWidth
                rows={3}
                value={''}
                inputProps={{ maxLength: 300 }}
                sx={{ boxShadow: 1, background: '#fff', mt: 1 }}
              />
              <Box sx={{ width: '100%', display: 'flex', justifyContent: 'flex-end', mt: 0.5 }}>
                <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                  {0} / 300
                </Typography>
              </Box>
            </Box>

            <CopyAllIcon sx={{ pb: 2, color: '#1976D2' }} />
          </Box>
         
        </Box>
         <Box sx={{ p: 2, background: '#D6F0FF', borderRadius: 2 }}>
          <Typography>Pre-header</Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2 }}>
            <Box sx={{ flex: 1, width: '100%' }}>
              <TextField
                multiline
                fullWidth
                rows={3}
                value={''}
                inputProps={{ maxLength: 300 }}
                sx={{ boxShadow: 1, background: '#fff', mt: 1 }}
              />
              <Box sx={{ width: '100%', display: 'flex', justifyContent: 'flex-end', mt: 0.5 }}>
                <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                  {0} / 300
                </Typography>
              </Box>
            </Box>

            <CopyAllIcon sx={{ pb: 2, color: '#1976D2' }} />
          </Box>
          {/* <Input/> */}
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2}}>
          <TextField fullWidth label="fullWidth" id="fullWidth"   sx={{ boxShadow: 1, background: '#fff', mt: 1 }}/>
           <CopyAllIcon sx={{  color: '#1976D2' }} />
          </Box>
          
      <FormControl  sx={{ mt: 2, width: '96%', boxShadow: 1, background: '#fff', p:0 }}>
        <InputLabel id="gender-label">Gender</InputLabel>
        <Select
          labelId="gender-label"
          // value={gender}
          label="Gender"
          // onChange={handleChange}
        >
          <MenuItem value="male">Male</MenuItem>
          <MenuItem value="female">Female</MenuItem>
          <MenuItem value="other">Other</MenuItem>
        </Select>
      </FormControl>
    
        
          
        </Box>
      </Box>
      
    </Box>
  );
};

export default RightPanel;
